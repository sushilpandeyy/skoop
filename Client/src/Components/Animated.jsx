import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function Animated() {
  useEffect(() => {
    let scene, camera, renderer, controls;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 1);
      controls = new OrbitControls(camera, renderer.domElement);
      document.body.appendChild(renderer.domElement);
      const geometry = new THREE.TorusGeometry(2, 1, 25, 100);
      const material = new THREE.MeshBasicMaterial({ color: 0x4a565e, wireframe: true });
      const torus = new THREE.Mesh(geometry, material);
      scene.add(torus);
      const animate = () => {
        requestAnimationFrame(animate);
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.005;

        renderer.render(scene, camera);
      };

      animate();
     
    };

    init();

    return () => {
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);
}

export default Animated;
