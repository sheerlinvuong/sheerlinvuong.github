import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const Gallery = () => {
  useEffect(() => {
    /**
     * Scene
     **/
    const scene = new THREE.Scene();

    /**
     * Objects
     **/
    const material = new THREE.MeshNormalMaterial();

    THREE.Cache.enabled = true;
    const fontLoader = new THREE.FontLoader();
    fontLoader.load(
      `${process.env.PUBLIC_URL}/georgia_bold.typeface.json`,
      (font) => {
        const textGeometry = new THREE.TextGeometry('Coming Soon :)', {
          font: font,
          size: 0.5,
          height: 0.2,
          curveSegments: 5,
          bevelEnabled: true,
          bevelThickness: 0.03,
          bevelSize: 0.02,
          bevelOffset: 0,
          bevelSegments: 4
        });
        textGeometry.computeBoundingBox();

        textGeometry.center();
        textGeometry.translate(0, 0.2, 0);

        const text = new THREE.Mesh(textGeometry, material);
        scene.add(text);

        const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);
        for (let i = 0; i < 500; i++) {
          const donut = new THREE.Mesh(donutGeometry, material);
          donut.position.x = (Math.random() - 0.5) * 30;
          donut.position.y = (Math.random() - 0.5) * 30;
          donut.position.z = (Math.random() - 0.5) * 30;

          donut.rotation.x = Math.random() * Math.PI;
          donut.rotation.y = Math.random() * Math.PI;

          const scale = Math.random();
          donut.scale.set(scale, scale, scale);
          scene.add(donut);
        }
      }
    );

    /**
     * Sizes
     **/
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    window.addEventListener('resize', () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    /**
     * Camera
     **/
    const camera = new THREE.PerspectiveCamera(55, sizes.width / sizes.height);
    camera.position.set(5, -1, 2);
    scene.add(camera);

    /**
     * renderer
     * */
    const canvas = document.querySelector('canvas.webgl');
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas
    });
    renderer.setSize(sizes.width, sizes.height);

    /**
     * Controls
     */
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.minDistance = 5;
    controls.maxDistance = 20;
    renderer.render(scene, camera);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    /**
     * Animate
     */
    const tick = () => {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };
    tick();
  }, []);

  return <canvas className="webgl"></canvas>;
};

export default Gallery;
