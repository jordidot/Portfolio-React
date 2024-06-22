import * as THREE from 'three';
import setupLights from '../hooks/SetupLights';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import React, { useEffect, useRef, useState } from "react";

function ModelViewer() {
  const modelRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const scene = new THREE.Scene();
    let animationId = null;
    let isAnimating = false;
    let frameCount = 0;
    const renderInterval = 5;
    setupLights(scene);
 
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 50, 50);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 4096;
    directionalLight.shadow.mapSize.height = 4096;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 500;
    directionalLight.shadow.camera.left = -50;
    directionalLight.shadow.camera.right = 50;
    directionalLight.shadow.camera.top = 50;
    directionalLight.shadow.camera.bottom = -50;
    scene.add(directionalLight);


    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(0, 50, 0);
    scene.add(pointLight);

    const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    scene.add(hemisphereLight);

    const interiorLight = new THREE.PointLight(0xffffff, 0.5, 50);
    interiorLight.position.set(0, 5, 0);
    scene.add(interiorLight);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 25;
    camera.position.y = 15;
    camera.position.x = 25;

    const renderer = new THREE.WebGLRenderer({alpha:true});
  
    renderer.setSize(window.innerWidth, window.innerHeight);
    modelRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    const loadingManager = new THREE.LoadingManager();
    loadingManager.onStart = () => {
      setLoading(true);
    };
    loadingManager.onLoad = () => {
      setLoading(false);
    };
    loadingManager.onError = (url) => {
      console.error(`Error: ${url}`);
    };
  
    const loader = new GLTFLoader(loadingManager);
    loader.load(
      '/Car.glb',
      function (gltf) {
        var model = gltf.scene;
        scene.add(model);
        var bbox = new THREE.Box3().setFromObject(model);
        var size = bbox.getSize(new THREE.Vector3());
        var maxDim = Math.max(size.x, size.y, size.z);
        var scale = 50 / maxDim;
        model.scale.set(scale, scale, scale);
        var animations = gltf.animations;

         if (animations && animations.length) {
                var mixer = new THREE.AnimationMixer(gltf.scene);
                let animacio1 = animations[0];
                mixer.clipAction(animacio1).play();
           
                function animate() {
                    requestAnimationFrame(animate);
                    var delta = clock.getDelta();
                    mixer.update(delta);
                    renderer.render(scene, camera);
                }
                var clock = new THREE.Clock();
                animate();
            }
      },
      undefined,
      function (error) {
        console.error(error);
      }
    )

    function animate() {
      if (!isAnimating) return;

      animationId = requestAnimationFrame(animate);

      if (frameCount % renderInterval === 0) {
        controls.update();
        renderer.render(scene, camera);
      }

      frameCount++;
    }

    function startAnimation() {
      if (!isAnimating) {
        isAnimating = true;
        animate();
      }
    }

    function stopAnimation() {
      if (isAnimating) {
        isAnimating = false;
        if (animationId !== null) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
      }
    }
    stopAnimation();
    startAnimation();

    const handleResize = () => {
      const width = modelRef.current.clientWidth;
      const height = modelRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);

      try {
        if (modelRef.current) {
          while (modelRef.current.firstChild) {
            modelRef.current.removeChild(modelRef.current.firstChild);
          }
        }
      } catch (error) {
        console.error("Error cleaning up modelRef:", error);
      }
    };
  }, []);

  return (
    <>
      {loading && <div className="loading-overlay flex items-center justify-center animate-spin">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
      </div>}
      <div id="modelGLB" ref={modelRef} style={{ width: '100%', height: '100%' }} className="model-viewer"></div>
    </>
  );
};
export default ModelViewer;