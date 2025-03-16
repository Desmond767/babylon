import * as BABYLON from '@babylonjs/core';
import {registerBuiltInLoaders} from '@babylonjs/loaders/dynamic';
registerBuiltInLoaders();

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

const createScene = function () {
  const scene = new BABYLON.Scene(engine);

  // scene.createDefaultCameraOrLight(true, false, true);
  scene.createDefaultLight();
  // const camera = new BABYLON.UniversalCamera('camera', new BABYLON.Vector3(0, 5, -10), scene);
  // camera.attachControl(true);
  // camera.inputs.addMouseWheel();
  // camera.setTarget(BABYLON.Vector3.Zero());

  const camera = new BABYLON.ArcRotateCamera('camera', 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
  camera.attachControl(true);
  camera.setPosition(new BABYLON.Vector3(0, 0, -1));
  // This is to limit the Beta Variable (Up and Down Arc) camera rotation long Z (which is Y in Blender) in it's upper and lower rotations
  // camera.lowerBetaLimit = Math.PI / 4;
  // camera.upperBetaLimit = Math.PI / 2;
  // This is to limit the Alpha Variable (left and right Arc) camera rotation long X in it's upper and lower rotations
  //camera.lowerAlphaLimit = Math.PI / 4;
  //camera.upperAlphaLimit = Math.PI / 2;
  // This sets limits to how far the user can zoom in and out from the target
  camera.minZ = 0;
  camera.lowerRadiusLimit = .5;
  camera.upperRadiusLimit = 15;

  // misc ArcRotation Camera Properties
  camera.panningSensibility = 0;
  camera.wheelPrecision = 250;
  camera.useFramingBehavior = true;
  camera.useBouncingBehavior = false;
  camera.useAutoRotationBehavior = true;
  camera.idleRotationWaitTime = 50000;

  BABYLON.SceneLoader.ImportMeshAsync('', 'src/Models/', 'MasterSword_CellShaded_ModApplied.obj', scene);

  return scene;
}

const scene = createScene();

engine.runRenderLoop(function () {
  scene.render();
});

window.addEventListener('resize', function () {
  engine.resize();
});
