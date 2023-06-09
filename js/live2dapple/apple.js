// 改成你自己的live2d源文件的路径 (可以和js文件放在一起)
let cubism4Model = window.location.href + "js/live2dapple/6.5apple/6.5apple.model3.json";
// if (window.screen.width > 1000) {
(async function main() {
  const body = document.querySelector('body')
  body.insertAdjacentHTML('beforeend', '<div id="live2d-wripe" style="background-color: transparent"><canvas id="canvas" style="background-color: transparent"><canvas></div>')
  const app = new PIXI.Application({
    view: document.getElementById("canvas"),
    autoStart: true,
    resolution: window.devicePixelRatio || 1,
    antialias: true,
    transparent: true
  });
  const wriper = document.getElementById("live2d-wripe");
  app.renderer.autoResize = true;
  app.renderer.resize(wriper.clientWidth, wriper.clientWidth);
  const model4 = await PIXI.live2d.Live2DModel.from(cubism4Model);
  app.stage.addChild(model4);
  app.stage.width = wriper.clientWidth;
  app.stage.height = wriper.clientWidth;
  model4.scale.set(1.0);
})();