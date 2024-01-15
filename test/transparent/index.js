const { app, BrowserWindow, screen} = require("electron");
const { attach } = require("../../dist/index");
const {getBoundXOffset} = require("../utils");

app.on("ready", async () => {
  const win = new BrowserWindow({
    width: 675,
    height: 680,
    enableLargerThanScreen: true,
    autoHideMenuBar: true,
    show: false,
    frame: false,
    transparent: true,
  });

  await win.loadURL(`file://${ __dirname }/index.html`);
  const boundXOffset = getBoundXOffset(screen.getAllDisplays());
  const displayBound = screen.getPrimaryDisplay().bounds;

  win.setBounds({

    x: displayBound.x + boundXOffset.offsetX,
    y: displayBound.y + boundXOffset.offsetY,
  });

  win.webContents.openDevTools({
    mode: "detach",
  });

  try {
    attach(win, {
      transparent: true,
    });
    win.show();
  } catch (e) {
    console.log(e);
  }
});
