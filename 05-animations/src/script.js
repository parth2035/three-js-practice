import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

gsap.to(mesh.position, {duration:1, delay: 2 ,x: 2})

// Timer
// const clock = new THREE.Timer();
// clock.connect(document);
// let elapsedTime = 0;

// Animations 
const tick = () => {
    window.requestAnimationFrame(tick)

    // clock.update()
    // const deltaTime = clock.getDelta()
    // elapsedTime += deltaTime

    // // Update objects
    // mesh.rotation.y = Math.sin(elapsedTime)*Math.PI*2
    // mesh.position.z = Math.sin(elapsedTime)*Math.PI*2
    // mesh.position.x = Math.sin(elapsedTime)*Math.PI*2
    // mesh.position.y = Math.sin(elapsedTime)*Math.PI*2
    // camera.lookAt(mesh.position)
    // Renderer
    renderer.render(scene, camera)
}

tick()