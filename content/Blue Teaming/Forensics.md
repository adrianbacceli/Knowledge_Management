---
title: Forensics
draft: true
tags:
  - tag1
  - tag2
NeedsReview: true
---
# Disk Analysis

1. Se realiza una filmación de la extracción de datos
2. Se utiliza un sistema como el Tableau Forensic Duplication y/o Writeblockers para evitar comprometer la data

3. Se recomendaba usar un modelo idéntico para el clonado de la data.
4. Se puede crear en un disco destino más grande.
5. Clonado de disco almacenado como Imagen (RAW .DD / ENCASE).

6. Encase permite la compresión de datos (Similar a thin Provisioning)
7. Hace Hashing cada 16 sectores.

Se puede visitar la página de Coolgear para obtener esta solución Budget Friendly, pero por tener un switch manual de lock, en juicio pueden objetar y causar un mal rato; a pesar de no perder la validez de la información. / Tableau Forensic Bridge / WiebeTech Writeblocker UTS 3.1 / Tableau Forensic Duplicator.

Generar el hash para demostrar la protección de la data.

Notas:

- Para trabajar con RAIDs, se recomienda crear el RAID con cada disco conectado al sistema y se crea el software RAID.
- Algunas aplicaciones pueden interpretar un software RAID luego de clonar los discos.
- Encase tiene su boot system en DOS. DOS no toca nada si no recibe una instrucción para hacerlo. Se puede usar Encase para hacer la copia entonces desde un live CD. También se puede hacer con Linux, pero la unidad debe montarse en Read Only.
- También se puede realizar un Encase por red.
- La máquina de audito debe estar aislada.

Herramientas de Forensia

- Cain
- FTK Imager (free)
- FTK Forensic Toolkit (Paid)
- ----
## Evidence Mover
NUIX Evicence Mover 6.2.1

---
## Autopsy

Open source, downloadable at https://www.autopsy.com

---
## Xways Forensic

ways Forensic

Thursday, January 19, 2023

11:42 AM

Con Xways forensic se puede examinar archivos en Hex

Se puede montar filesystems (la imagen del disco) y recuperar archivos a traves de cabeceras

---

## FTK Exterro

---
## Belkasoft

---

## Magnet Forensic Axiom

---
## Artifacts Known useful info

* $5000 ENCASE (OPENTEXT, antes GUIDANCE SOFTWARE)   
* $4000 FTK (EXTERRO, antes ACCESSDATA) MUY BUENA EN 2010   
* $2400 XWAYS FORENSICS   
* 2012 NUIX - PROCESAMIENTO MÅs RÅPIDO.   
* 2014 Artefactos - MAGNET FORENSICS AXIOM  / BELKASOFT


|            |            |                                                                                                                                                  |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Windows    | Linux      |                                                                                                                                                  |
|            | dd         | a command line utility to copy disk images using a bit by bit copying process                                                                    |
| FTK Imager | FTK Imager | a data preview and imaging tool that lets you quickly assess electronic evidence to determine if further analysis with a forensic tool is needed |
|            | memdump    | a command line utility to dump system memory to the standard output stream by skipping over holes in memory maps                                 |
| WinHex     | WinHex     | a commercial disk editor and universal hexade­cimal editor used for recovery and digital forensics                                               |
| Autopsy    | Autopsy    | a digital forensics platform and graphical interface to The Sleuth Kit and other digital forensics                                               |


# Network Forensics

---
## Netresec Network Miner Free

---
## Network Miner 

NetworkMiner has, since the first release in 2007, become a   
popular tool among incident response teams as well as law enforcement. NetworkMiner is today   
used by companies and organizations all over the world.   
NetworkMiner 2.7.3   


---

# Encryption


### Fsum

Thursday, January 19, 2023

2:00 PM

Permite calcular los hash de un archivo.

Al ser herramienta de CLI, se pueden hacer scripts

---
## AES Encrypt

---
## JPHSWIN (Steganography)

---

# Steganography


## Xsteg (Detect Steganography)

---

## Stegdetect (CLI)

---
## StegBreak (JonTheRipper alike)
