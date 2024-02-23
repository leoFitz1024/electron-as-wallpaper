const {app, BrowserWindow, screen} = require("electron");
const {attach, detach} = require("../../dist/index");
const {getBoundXOffset} = require("../utils");
const {refresh} = require("../../dist");
const {join} = require("path");

app.on("ready", async () => {
  const [display1, display2] = screen.getAllDisplays()
  const boundXOffset = getBoundXOffset(screen.getAllDisplays());
  const bounds = display2.bounds;

  const win = new BrowserWindow({
    roundedCorners: false,
    autoHideMenuBar: true,
    frame: false,
    show: false,
    width: bounds.width,
    height: bounds.height,
    x: bounds.x,
    y: bounds.y,
    opacity: 1.0,
    backgroundColor: 'RGB(0,0,0,0)',
    // transparent:true,
    skipTaskbar: true,
    focusable: false,
    type: 'desktop',
    webPreferences: {
      //用于解决not allowed to load local resource的问题
      // devTools: appVar._debug,
      //当设置为 false, 它将禁用同源策略 (通常用来测试网站), 如果此选项不是由开发者设置的，还会把 allowRunningInsecureContent设置为 true. 默认值为 true。
      webSecurity: false,
      preload: join(__dirname, '../preload/wall-preload.js'),
      //使用nodejs
      nodeIntegration: false,
      contextIsolation: true,
      //启用多线程
      nodeIntegrationInWorker: true,
      //在 macOS 启用弹力动画 (橡皮筋) 效果. 默认值为 false
      scrollBounce: true,
      //页面的默认缩放系数, 3.0 表示 300%. 默认值为 1.0.
      zoomFactor: 1.0,
      //是否在页面成为背景时限制动画和计时器。 这也会影响到 Page Visibility API. 默认值为 true。
      backgroundThrottling: false,
      //关闭拼写检查
      spellcheck: false,
      disableDialogs: true,
      webgl: true,
      plugins: false,
      enableWebSQL: false
    }
  })

  // await win.loadURL("https://blog.csdn.net/weixin_41010198/article/details/88055078");
  await win.loadFile("C:\\Users\\chen\\AppData\\Roaming\\wallhaven\\wallpaper_temp\\2c249fef-eb86-433b-a180-ae97bf7ec195\\index.html");

  // win.webContents.openDevTools({
  //   mode: "detach",
  // });

  attach(win, {
    // transparent: true,
    forwardKeyboardInput: false,
    forwardMouseMove: true,
    forwardMouseClick: true,
  });

  win.setBounds({
    width: bounds.width,
    height: bounds.height,
    x: bounds.x + boundXOffset.offsetX,
    y: bounds.y + boundXOffset.offsetY
  });
  win.show();
  console.log(win.getBounds())
  setTimeout(() =>{
    attach(win, {
      // transparent: true,
      forwardKeyboardInput: false,
      forwardMouseMove: false,
      forwardMouseClick: false,
    });
  },30000)
  // setTimeout(() => {
  //   detach(win);
  // }, 10000);
});
