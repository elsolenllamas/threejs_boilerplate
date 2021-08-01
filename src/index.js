import './css/style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

/* default values */
const settings = {
    width: window.innerWidth,
    height: window.innerHeight
}
const canvas = document.getElementById('canvas');
const gui = new dat.GUI();
const scene = new THREE.Scene();

/* camera */
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
scene.add(camera);

/* controls */
const controls = new OrbitControls(camera, canvas);

/* renderer */
const renderer = new THREE.WebGLRenderer();
renderer.setSize(settings.width, settings.height);

/* animation */
const clock = new THREE.Clock();
const animation = () => { 
    const animationTime = clock.getElapsedTime()
    controls.update();
    renderer.render( scene, camera );
    requestAnimationFrame(animation);
}
animation();
