// console.log("Hello, World!",THREE);

// Create Scene
const scene = new THREE.Scene();

// Create Object = GEOMETRY + MATERIAL
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = [
  new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
  new THREE.MeshBasicMaterial({ color: 0x0000ff }),
  new THREE.MeshBasicMaterial({ color: 0xff0000 }),
  new THREE.MeshBasicMaterial({ color: 0xffff00 }),
  new THREE.MeshBasicMaterial({ color: 0x00ffff }),
  new THREE.MeshBasicMaterial({ color: 0xff00ff }),
]

// Create Mesh
const box = new THREE.Mesh(geometry, material);

// Add Mesh to Scene
scene.add(box);

// Create Camera
const camera = new THREE.PerspectiveCamera(45, 1, 1, 1000);

// Position Camera
camera.position.set(0, 0, 5);

// Add Camera to Scene
scene.add(camera);

// Render Scene
const canvas = document.querySelector('#webgl');
const renderer = new THREE.WebGLRenderer({ canvas: canvas });

// Set size of renderer
renderer.setSize(window.innerWidth, window.innerHeight);

// Give scene to renderer
renderer.render(scene, camera);
