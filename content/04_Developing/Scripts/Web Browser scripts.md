---
title: Web Browser scripts
draft: false
tags:
  - Playback
  - video
  - speed
  - console
  - web-browser
  - div
  - document-querySelector
  - playbackRate
  - read-only
  - credential-access
  - html
  - javascript
NeedsReview: false
---
# Change video playback ratio
```javascript
var video = document.querySelector("video")
video.playbackRate = 16;
```

If there are multiple videos or have specific values, like this:
```html
<div data-dv_ref="container" class="modern-video">
	<video data-video-id="video9" tabindex="-1" preload="auto" playsinline="" style="transform-origin: 0px 0px;" data-tabindex="-1" src="blob:https://dell.sabacloud.com/875acbce-aac9-413e-bda9-8fa0f3cc7d8c">
	</video>
</div>

```

you can refer to them like this:
```javascript
const video = document.querySelector('video[data-video-id="video9"]');
video.playbackRate = 16;
```

---
# Remove Read Only from video player slides
```html
<div id="seek" tabindex="-1" class="progress-bar cs-seekcontrol read-only" style="position: absolute; left: 0px; top: 0px; overflow: visible; transform-origin: center center; width: 2332px; height: 30px; transform: translate(44px, 18px); display: block;" data-tabindex="-1">
      <style>
        #seek:before {
          border: 1px solid rgba(0, 0, 0, 0);
          background-image: initial;
          background-repeat: no-repeat !important;
        }
      </style>

      <div class="cs-seekbar-inner progress-bar-inner slide-lockable">
        <div data-ref="seek" class="cs-seek progress-bar-seek">
          <div class="progress-bar-fill-preview cs-fill" data-ref="progressPreview" style="width: 2240px;"></div>
          <input tabindex="0" type="range" aria-hidden="false" aria-label="slide progress" data-ref="progressBar" data-tabindex="0" max="137500" step="100" aria-valuetext="1%" disabled="">
          <div class="cs-fill cs-brandhighlight-bg progress-bar-fill" style="width: 1.19155%;" data-ref="progressBarFill">
            <div class="prev-progress-bar-fill-preview cs-fill" data-ref="prevProgressPreview" style="width: 0px;"></div>
          </div>
        </div>
      </div>
    </div>
```

We run from console
``` javascript
document.querySelector("#seek")?.classList.remove("read-only");
```
