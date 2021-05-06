import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 *      TODO
 * [] max zoom out
 * [] center text
 * [] avoid donuts rendering near text
 * [] camera start at distance
 * [] nicer font
 * [] remove axis helper and console.logs
 */

export const FunPage = () => {
  useEffect(() => {
    /**
     * Scene
     **/
    const scene = new THREE.Scene();
    // axis helper
    const axisHelper = new THREE.AxesHelper();
    scene.add(axisHelper);

    /**
     * Objects
     **/
    const material = new THREE.MeshNormalMaterial();

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

        // textGeometry.center();
        // textGeometry.translate(0, 0.2, 0);
        console.log(textGeometry.boundingBox);

        const text = new THREE.Mesh(textGeometry, material);
        scene.add(text);

        console.time('donuts');
        const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);
        for (let i = 0; i < 300; i++) {
          const donut = new THREE.Mesh(donutGeometry, material);
          donut.position.x = (Math.random() - 0.5) * 10;
          donut.position.y = (Math.random() - 0.5) * 10;
          donut.position.z = (Math.random() - 0.5) * 10;

          donut.rotation.x = Math.random() * Math.PI;
          donut.rotation.y = Math.random() * Math.PI;

          const scale = Math.random();
          donut.scale.set(scale, scale, scale);

          scene.add(donut);
        }
        console.timeEnd('donuts');
      }
    );

    /**
     * Camera
     **/
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    const camera = new THREE.PerspectiveCamera(55, sizes.width / sizes.height);
    camera.position.x = 1;
    camera.position.y = 1;
    camera.position.z = 2;
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
    renderer.render(scene, camera);

    /**
     * Animate
     */
    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update controls
      controls.update();

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  }, []);

  return <canvas className="webgl"></canvas>;
};
