import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders/glTF';

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


  // const box = new BABYLON.MeshBuilder.CreateBox('myBox', {
  //   size: 0.2,
  //   width: 2,
  //   height: 0.05,
  //   depth: 0.5,
  //   faceColors: [
  //     new BABYLON.Color4(1, 0, 0, 1),
  //     BABYLON.Color3.Green()
  //   ]
  // });

  // const sphere = new BABYLON.MeshBuilder.CreateSphere('mySphere', {
  //   segments: 50,
  //   // diameter: 0.3,
  //   // diameterY: 0.4,
  // }, scene);

  // const sphereMaterial = new BABYLON.StandardMaterial();
  // sphere.material = sphereMaterial;

  // sphereMaterial.diffuseTexture = new BABYLON.Texture('src/Images/iceland_heightmap.png');

  //sphereMaterial.diffuseColor = new BABYLON.Color3(0, 1, 0);
  // sphereMaterial.specularColor = new BABYLON.Color3(1, 0, 0);

  // sphereMaterial.ambientColor = new BABYLON.Color3(0, 1, 0);
  // scene.ambientColor = new BABYLON.Color3(0, 1, 0);

  // sphereMaterial.emissiveColor = new BABYLON.Color3(1, 0, 0);

  // sphereMaterial.alpha = 0.2;

  // sphereMaterial.wireframe = true;

  // const ground = new BABYLON.MeshBuilder.CreateGround('', {
  //   height: 10,
  //   width: 10,
  //   subdivisions: 5,
  //   subdivisionsX: 10,

  // });

  // ground.material = new BABYLON.StandardMaterial();
  // ground.material.wireframe = true;

  // const groundFromHM = new BABYLON.MeshBuilder.CreateGroundFromHeightMap('', 'src/Images/iceland_heightmap.png', {
  //   height: 20,
  //   width: 20,
  //   subdivisions: 200,
  // });

  BABYLON.SceneLoader.ImportMeshAsync(
    '',
    'src/Models/',
    'MasterSword_CellShaded_ModApplied.glb',
    scene
  );

  return scene;
}

const scene = createScene();

engine.runRenderLoop(function () {
  scene.render();
});

window.addEventListener('resize', function () {
  engine.resize();
});
