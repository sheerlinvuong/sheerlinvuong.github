import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const FunPage = () => {
  const mountRef = useRef(null);
  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    /**
     * Object
     */
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    //camera
    const sizes = {
      width: 800,
      height: 600
    };
    const camera = new THREE.PerspectiveCamera(55, sizes.width / sizes.height);
    camera.position.z = 3;
    scene.add(camera);

    //renderer
    // const canvas = document.querySelector('canvas.webgl');
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(sizes.width, sizes.height);

    renderer.render(scene, camera);
    mountRef.current.appendChild(renderer.domElement);
    return () => mountRef?.current?.removeChild(renderer.domElement);
  }, []);

  return <div ref={mountRef}></div>;
};
