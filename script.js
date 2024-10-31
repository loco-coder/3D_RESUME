// Import necessary libraries
import * as THREE from 'three';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas'),
  antialias: true
});

// Set up the camera controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Add some basic lighting
const ambientLight = new THREE.AmbientLight(0x444444);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Create 3D text for the resume content
const resumeContent = [
  {
    title: 'Summary',
    text: 'Highly motivated and experienced software developer with a strong passion for innovation and problem-solving.'
  },
  {
    title: 'Skills',
    text: 'JavaScript, HTML/CSS, React, Node.js, MongoDB, etc.'
  },
  {
    title: 'Experience',
    text: 'Software Developer at XYZ Corporation (2018-Present)'
  }
];

const textGeometry = new THREE.TextGeometry(resumeContent[0].title, {
  font: 'Arial',
  size: 2,
  height: 0.5
});
const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const textMesh = new THREE.Mesh(textGeometry, textMaterial);
scene.add(textMesh);

// Add interactive elements ( buttons )
const buttonGeometry = new THREE.BoxGeometry(2, 0.5, 0.5);
const buttonMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const buttonMesh = new THREE.Mesh(buttonGeometry, buttonMaterial);
buttonMesh.position.set(0, -2, 0);
scene.add(buttonMesh);

// Add event listener for button click
buttonMesh.addEventListener('click', () => {
  console.log('Button clicked!');
});

// Add camera movement
camera.position.set(0, 0, 5);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();

// Window resize event handler
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
		