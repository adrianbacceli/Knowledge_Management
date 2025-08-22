import { FileTrieNode } from "../../util/fileTrie"
import { FullSlug, resolveRelative, simplifySlug } from "../../util/path"
import { ContentDetails } from "../../plugins/emitters/contentIndex"

let previousSlug: FullSlug | null = null
let building = false

type MaybeHTMLElement = HTMLElement | undefined

interface ParsedOptions {
  folderClickBehavior: "collapse" | "link"
  folderDefaultState: "collapsed" | "open"
  useSavedState: boolean
  sortFn: (a: FileTrieNode, b: FileTrieNode) => number
  filterFn: (node: FileTrieNode) => boolean
  mapFn: (node: FileTrieNode) => void
  order: ("sort" | "filter" | "map")[]
}

type FolderState = {
  path: string
  collapsed: boolean
}

let currentExplorerState: Array<FolderState>
function toggleExplorer(this: HTMLElement) {
  const nearestExplorer = this.closest(".explorer") as HTMLElement
  if (!nearestExplorer) return
  const explorerCollapsed = nearestExplorer.classList.toggle("collapsed")
  nearestExplorer.setAttribute(
    "aria-expanded",
    nearestExplorer.getAttribute("aria-expanded") === "true" ? "false" : "true",
  )

  if (!explorerCollapsed) {
    // Stop <html> from being scrollable when mobile explorer is open
    document.documentElement.classList.add("mobile-no-scroll")
  } else {
    document.documentElement.classList.remove("mobile-no-scroll")
  }
}

function toggleFolder(evt: MouseEvent) {
  evt.stopPropagation()
  const target = evt.target as MaybeHTMLElement
  if (!target) return

  // Check if target was svg icon or button
  const isSvg = target.nodeName === "svg"

  // corresponding <ul> element relative to clicked button/folder
  const folderContainer = (
    isSvg
      ? // svg -> div.folder-container
        target.parentElement
      : // button.folder-button -> div -> div.folder-container
        target.parentElement?.parentElement
  ) as MaybeHTMLElement
  if (!folderContainer) return
  const childFolderContainer = folderContainer.nextElementSibling as MaybeHTMLElement
  if (!childFolderContainer) return

  childFolderContainer.classList.toggle("open")

  // Collapse folder container
  const isCollapsed = !childFolderContainer.classList.contains("open")
  setFolderState(childFolderContainer, isCollapsed)

  const currentFolderState = currentExplorerState.find(
    (item) => item.path === (folderContainer as HTMLElement).dataset.folderpath,
  )
  if (currentFolderState) {
    currentFolderState.collapsed = isCollapsed
  } else {
    currentExplorerState.push({
      path: (folderContainer as HTMLElement).dataset.folderpath as FullSlug,
      collapsed: isCollapsed,
    })
  }

  const stringifiedFileTree = JSON.stringify(currentExplorerState)
  localStorage.setItem("fileTree", stringifiedFileTree)
}

function createFileNode(currentSlug: FullSlug, node: FileTrieNode): HTMLLIElement {
  const template = document.getElementById("template-file") as HTMLTemplateElement
  const clone = template.content.cloneNode(true) as DocumentFragment
  const li = clone.querySelector("li") as HTMLLIElement
  const a = li.querySelector("a") as HTMLAnchorElement
  a.href = resolveRelative(currentSlug, node.slug)
  a.dataset.for = node.slug
  a.textContent = node.displayName

  if (currentSlug === node.slug) {
    a.classList.add("active")
  }

  return li
}

function createFolderNode(
  currentSlug: FullSlug,
  node: FileTrieNode,
  opts: ParsedOptions,
): HTMLLIElement {
  const template = document.getElementById("template-folder") as HTMLTemplateElement
  const clone = template.content.cloneNode(true) as DocumentFragment
  const li = clone.querySelector("li") as HTMLLIElement
  const folderContainer = li.querySelector(".folder-container") as HTMLElement
  const titleContainer = folderContainer.querySelector("div") as HTMLElement
  const folderOuter = li.querySelector(".folder-outer") as HTMLElement
  const ul = folderOuter.querySelector("ul") as HTMLUListElement

  const folderPath = node.slug
  folderContainer.dataset.folderpath = folderPath

  if (opts.folderClickBehavior === "link") {
    // Replace button with link for link behavior
    const button = titleContainer.querySelector(".folder-button") as HTMLElement
    const a = document.createElement("a")
    a.href = resolveRelative(currentSlug, folderPath)
    a.dataset.for = folderPath
    a.className = "folder-title"
    a.textContent = node.displayName
    button.replaceWith(a)
  } else {
    const span = titleContainer.querySelector(".folder-title") as HTMLElement
    span.textContent = node.displayName
  }

  // if the saved state is collapsed or the default state is collapsed
  const isCollapsed =
    currentExplorerState.find((item) => item.path === folderPath)?.collapsed ??
    opts.folderDefaultState === "collapsed"

  // if this folder is a prefix of the current path we
  // want to open it anyways
  const simpleFolderPath = simplifySlug(folderPath)
  const folderIsPrefixOfCurrentSlug =
    simpleFolderPath === currentSlug.slice(0, simpleFolderPath.length)

  if (!isCollapsed || folderIsPrefixOfCurrentSlug) {
    folderOuter.classList.add("open")
  }

  for (const child of node.children) {
    const childNode = child.isFolder
      ? createFolderNode(currentSlug, child, opts)
      : createFileNode(currentSlug, child)
    ul.appendChild(childNode)
  }

  return li
}

// ---- helpers for safe filter/map/sort from data-fns ----
function compileDataFn<T extends Function | undefined>(src: unknown): T | undefined {
  if (typeof src !== "string" || !src.trim()) return undefined
  let fixed = src

  // Fix common bad filter: node.slugSegment == "tags" → should EXCLUDE tags
  if (/slugSegment\s*={1,3}\s*["']tags["']/.test(fixed)) {
    fixed = fixed.replace(/={1,3}/, "!==")
  }

  try {
    // eslint-disable-next-line no-new-func
    return new Function("return " + fixed)() as T
  } catch {
    return undefined
  }
}

async function setupExplorer(currentSlug: FullSlug) {
  if (building) return
  building = true
  try {
    const allExplorers = document.querySelectorAll("div.explorer") as NodeListOf<HTMLElement>
    for (const explorer of allExplorers) {
      const dataFns = JSON.parse((explorer as HTMLElement).dataset.dataFns || "{}")
      const opts: ParsedOptions = {
        folderClickBehavior: ((explorer as HTMLElement).dataset.behavior || "collapse") as "collapse" | "link",
        folderDefaultState: ((explorer as HTMLElement).dataset.collapsed || "collapsed") as "collapsed" | "open",
        useSavedState: (explorer as HTMLElement).dataset.savestate === "true",
        order: dataFns.order || ["filter", "map", "sort"],
        sortFn: compileDataFn<(a: FileTrieNode, b: FileTrieNode) => number>(dataFns.sortFn) ??
          ((a, b) => a.displayName.localeCompare(b.displayName, undefined, { numeric: true, sensitivity: "base" })),
        // Safe default: exclude the synthetic "tags" folder
        filterFn: compileDataFn<(node: FileTrieNode) => boolean>(dataFns.filterFn) ??
          ((node) => node.slugSegment !== "tags"),
        mapFn: compileDataFn<(node: FileTrieNode) => void>(dataFns.mapFn) ?? ((node) => void node),
      }

      // Get folder state from local storage
      const storageTree = localStorage.getItem("fileTree")
      const serializedExplorerState = storageTree && opts.useSavedState ? JSON.parse(storageTree) : []
      const oldIndex = new Map<string, boolean>(
        serializedExplorerState.map((entry: FolderState) => [entry.path, entry.collapsed]),
      )

      const data = await fetchData
      const entriesRaw = [...Object.entries(data)] as [FullSlug, ContentDetails][]
      const trie = FileTrieNode.fromEntries(entriesRaw)

      // Apply functions in order (mutates trie)
      for (const fn of opts.order) {
        switch (fn) {
          case "filter":
            if (opts.filterFn) trie.filter(opts.filterFn)
            break
          case "map":
            if (opts.mapFn) trie.map(opts.mapFn)
            break
          case "sort":
            if (opts.sortFn) trie.sort(opts.sortFn)
            break
        }
      }

      // Get folder paths for state management
      const folderPaths = trie.getFolderPaths()
      currentExplorerState = folderPaths.map((path) => {
        const previousState = oldIndex.get(path)
        return {
          path,
          collapsed:
            previousState === undefined ? opts.folderDefaultState === "collapsed" : previousState,
        }
      })

      const explorerUl = explorer.querySelector(".explorer-ul")
      if (!explorerUl) continue

      // Build new content
      const buildFragment = (root: FileTrieNode) => {
        const frag = document.createDocumentFragment()
        for (const child of root.children) {
          const node = child.isFolder
            ? createFolderNode(currentSlug, child, opts)
            : createFileNode(currentSlug, child)
          frag.appendChild(node)
        }
        return frag
      }

      let fragment = buildFragment(trie)

      // Fallback: if custom filtering produced an empty list, rebuild with safe defaults
      if (!fragment.hasChildNodes()) {
        const safe = FileTrieNode.fromEntries(entriesRaw)
        safe.filter((node) => node.slugSegment !== "tags")
        if (opts.sortFn) safe.sort(opts.sortFn)
        fragment = buildFragment(safe)
      }

      if (fragment.hasChildNodes()) {
        ;(explorerUl as HTMLElement).replaceChildren(fragment)
      }

      // restore explorer scrollTop position if it exists
      const scrollTop = sessionStorage.getItem("explorerScrollTop")
      if (scrollTop) {
        ;(explorerUl as HTMLElement).scrollTop = parseInt(scrollTop)
      } else {
        const activeElement = (explorerUl as HTMLElement).querySelector(".active")
        if (activeElement) {
          activeElement.scrollIntoView({ behavior: "smooth" })
        }
      }

      // Set up event handlers
      const explorerButtons = explorer.getElementsByClassName(
        "explorer-toggle",
      ) as HTMLCollectionOf<HTMLElement>
      for (const button of explorerButtons) {
        button.addEventListener("click", toggleExplorer)
        window.addCleanup(() => button.removeEventListener("click", toggleExplorer))
      }

      if (opts.folderClickBehavior === "collapse") {
        const folderButtons = explorer.getElementsByClassName(
          "folder-button",
        ) as HTMLCollectionOf<HTMLElement>
        for (const button of folderButtons) {
          button.addEventListener("click", toggleFolder)
          window.addCleanup(() => button.removeEventListener("click", toggleFolder))
        }
      }

      const folderIcons = explorer.getElementsByClassName(
        "folder-icon",
      ) as HTMLCollectionOf<HTMLElement>
      for (const icon of folderIcons) {
        icon.addEventListener("click", toggleFolder)
        window.addCleanup(() => icon.removeEventListener("click", toggleFolder))
      }
    }
  } finally {
    building = false
  }
}

document.addEventListener("prenav", async () => {
  const explorer = document.querySelector(".explorer-ul") as HTMLElement | null
  if (!explorer) return
  sessionStorage.setItem("explorerScrollTop", explorer.scrollTop.toString())
})

document.addEventListener("nav", async (e: CustomEventMap["nav"]) => {
  const currentSlug = e.detail.url as FullSlug
  const norm = (s: string) =>
    decodeURI(s).split("?")[0].split("#")[0].replace(/\/+$/, "")

  // Skip if same path (ignoring query, hash, trailing slash)
  if (previousSlug && norm(currentSlug) === norm(previousSlug)) {
    return
  }

  const oldSlug = previousSlug
  try {
    await setupExplorer(currentSlug)
    previousSlug = currentSlug
  } catch (err) {
    console.error(err)
    previousSlug = oldSlug
  }

  // collapse by default (once per session) on mobile
  for (const explorer of document.getElementsByClassName("explorer")) {
    const mobileExplorer = (explorer as HTMLElement).querySelector(".mobile-explorer") as Element | null
    if (!mobileExplorer) continue

    const isVisible = (el: Element) =>
      (el as any).checkVisibility ? (el as any).checkVisibility() : getComputedStyle(el).display !== "none"

    const COLLAPSE_KEY = "explorerCollapsedOnce"
    if (isVisible(mobileExplorer) && !sessionStorage.getItem(COLLAPSE_KEY)) {
      (explorer as HTMLElement).classList.add("collapsed")
      ;(explorer as HTMLElement).setAttribute("aria-expanded", "false")
      document.documentElement.classList.remove("mobile-no-scroll")
      sessionStorage.setItem(COLLAPSE_KEY, "1")
    }

    mobileExplorer.classList.remove("hide-until-loaded")
  }
})

window.addEventListener("resize", function () {
  const explorer = document.querySelector(".explorer")
  if (explorer && !explorer.classList.contains("collapsed")) {
    document.documentElement.classList.add("mobile-no-scroll")
    return
  }
})

function setFolderState(folderElement: HTMLElement, collapsed: boolean) {
  return collapsed ? folderElement.classList.remove("open") : folderElement.classList.add("open")
}
