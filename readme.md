# Electron As Wallpaper (✨)

> set your electron window as wallpaper behind desktop icons
---

<div align="center">

![license](https://badgen.net/badge/license/MIT/blue)
![stars](https://badgen.net/npm/v/@xchencode/electron-as-wallpaper)
![forks](https://badgen.net/npm/dw/@xchencode/electron-as-wallpaper)
![issues](https://badgen.net/github/issues/leoFitz1024/electron-as-wallpaper)

</div>

---

<div align="center">

![issues](assets/app.gif)

<a href="https://github.com/leoFitz1024/electron-as-wallpaper/releases/tag/v1.0">`try the app`</a>

</div>

---

## Features (⭐)

- [x] set electron window as wallpaper
- [x] support transparent window
- [x] support mouse forwarding
- [x] support keyboard forwarding

## Getting Started (✅)

- ### Installation (⏬)
	- `npm install electron-as-wallpaper --save`

- ### How to use (🌠)
  ```js
  import {attach, detach, refresh} from "electron-as-wallpaper";
  // or
  const {attach, detach, refresh} = require("electron-as-wallpaper");
  
  attach(mainWindow);
  detach(mainWindow);
  
  // if the window closed before detach, you can call refresh
  refresh();
  ```

- ### Examples
	- [transparent](test/transparent/index.js)
	- [input forwarding](test/input-forwarding/index.js)
	- [screen size changed](test/screen-size-changed/index.js)

---

## The End (💘)
