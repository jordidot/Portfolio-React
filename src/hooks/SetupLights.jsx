import * as THREE from 'three';
import ensureLight from './EnsureLights';

function setupLights(scene) {
    ensureLight(THREE.AmbientLight, {
      color: 0x404040,
      intensity: 0.5,
      distance: 0,
      position: new THREE.Vector3(0, 0, 0)
    },scene);
    ensureLight(THREE.DirectionalLight, {
      color: 0xffffff,
      intensity: 0.5,
      distance: 0,
      position: new THREE.Vector3(0, 10, 10),
      castShadow: true
    },scene);
    ensureLight(THREE.DirectionalLight, {
      color: 0xffffff,
      intensity: 0.5,
      distance: 0,
      position: new THREE.Vector3(0, -10, -10),
      castShadow: true
    },scene);
    ensureLight(THREE.DirectionalLight, {
      color: 0xffffff,
      intensity: 0.5,
      distance: 0,
      position: new THREE.Vector3(10, 0, 0),
      castShadow: true
    },scene);
    ensureLight(THREE.DirectionalLight, {
      color: 0xffffff,
      intensity: 0.5,
      distance: 0,
      position: new THREE.Vector3(0, 0, 10),
      castShadow: true
    },scene);
    ensureLight(THREE.DirectionalLight, {
      color: 0xffffff,
      intensity: 0.5,
      distance: 0,
      position: new THREE.Vector3(-10, 0, 0),
      castShadow: true
    },scene);
    ensureLight(THREE.DirectionalLight, {
      color: 0xffffff,
      intensity: 0.5,
      distance: 0,
      position: new THREE.Vector3(0, 0, -10),
      castShadow: true
    },scene);
    ensureLight(THREE.PointLight, {
      color: 0xffffff,
      intensity: 0.5,
      distance: 100,
      position: new THREE.Vector3(50, 50, 50)
    },scene);
  }
  export default setupLights;