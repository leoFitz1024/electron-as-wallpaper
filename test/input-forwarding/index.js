const {app, BrowserWindow, screen} = require("electron");
const {attach, detach} = require("../../dist/index");
const {getBoundXOffset} = require("../utils");

app.on("ready", async () => {
  const win = new BrowserWindow({
    transparent: true,
    autoHideMenuBar: true,
    show: false,
    frame: false,
  });

  const boundXOffset = getBoundXOffset(screen.getAllDisplays());
  const displayBound = screen.getPrimaryDisplay().bounds;

  win.setBounds({
    width: displayBound.width,
    height: displayBound.height,
    x: displayBound.x + boundXOffset.offsetX,
    y: displayBound.y + boundXOffset.offsetY,
  });

  await win.loadURL("https://www.baidu.com/");

  win.webContents.openDevTools({
    mode: "detach",
  });

  attach(win, {
    transparent: true,
    forwardKeyboardInput: true,
    forwardMouseInput: true,
  });

  win.show();

  // setTimeout(() => {
  //   detach(win);
  // }, 10000);
});
