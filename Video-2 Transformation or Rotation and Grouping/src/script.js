import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = [
  new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
  new THREE.MeshBasicMaterial({ color: 0x0000ff }),
  new THREE.MeshBasicMaterial({ color: 0xff0000 }),
  new THREE.MeshBasicMaterial({ color: 0xffff00 }),
  new THREE.MeshBasicMaterial({ color: 0x00ffff }),
  new THREE.MeshBasicMaterial({ color: 0xff00ff }),
];

const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// mesh.position.x = 0;
// mesh.position.y = 1; 
// mesh.position.z = 0;

mesh.position.set(0, 0, 0); // Set position of the mesh
console.log("Before",mesh.position.length()); // Log the distance from the origin or the center of the scene

mesh.position.normalize(); // Normalize the position vector
console.log("after", mesh.position.length());  // After normalization, the length should be 1

//  We can also do scale, rotate and translate the mesh object on x, y, z axis
// mesh.scale.set(1.5, 1.5, .2); // Set scale of the mesh

// mesh.rotation.set(Math.PI / 4, Math.PI / 4, Math.PI / 4); // Set rotation of the mesh

// mesh.rotation.x = Math.PI / 4; // Rotate around x-axis
// mesh.rotation.y = Math.PI / 4; // Rotate around y-axis
// mesh.rotation.z = Math.PI / 4; // Rotate around z-axis

// mesh.translateX(1); // Translate the mesh along the x-axis
// mesh.translateY(1); // Translate the mesh along the y-axis
// mesh.translateZ(1); // Translate the mesh along the z-axis

/**
 * Sizes
*/
const sizes = {
  width: 800,
  height: 600,
};


// Grouping the mesh object
const group = new THREE.Group();
const box1 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: "orange" }));
const box2 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: "purple" }));
box1.position.set(-1, 0, 0); // Position box1 to the left
box2.position.set(1, 0, 0); // Position box2 to the right

scene.add(group); // Add the group to the scene
group.add(box1);
group.add(box2);

// group.position.set(0, 1, 0); // Position the group in the scene

/**
 * Camera
*/
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.lookAt(mesh.position); // Ensure camera looks at the mesh
console.log(mesh.position.distanceTo(camera.position)); // Log the camera position
scene.add(camera);


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
