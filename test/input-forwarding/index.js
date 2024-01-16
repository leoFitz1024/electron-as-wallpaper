const {app, BrowserWindow, screen} = require("electron");
const {attach, detach} = require("../../dist/index");
const {getBoundXOffset} = require("../utils");
const {refresh} = require("../../dist");

app.on("ready", async () => {
  const [display1, display2] = screen.getAllDisplays()
  const boundXOffset = getBoundXOffset(screen.getAllDisplays());
  const displayBound = display1.bounds;

  console.log(display1.bounds)
  console.log(display2.bounds)
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    roundedCorners: false,
    frame: false,
    show: false,
    width: displayBound.width,
    height: displayBound.height,
    x: displayBound.x,
    y: displayBound.y,
    opacity: 1.0,
    backgroundColor: "RGB(0,0,0,0)",
    skipTaskbar: true,
    type: "desktop",
  });

  await win.loadURL("https://blog.csdn.net/weixin_41010198/article/details/88055078");

  // win.webContents.openDevTools({
  //   mode: "detach",
  // });

  attach(win, {
    // transparent: true,
    forwardKeyboardInput: false,
    forwardMouseInput: false,
  });

  win.setBounds({
    width: displayBound.width,
    height: displayBound.height,
    x: displayBound.x + boundXOffset.offsetX,
    y: displayBound.y + boundXOffset.offsetY
  });
  win.show();
  console.log(win.getBounds())
  // setTimeout(() => {
  //   detach(win);
  // }, 10000);
});
