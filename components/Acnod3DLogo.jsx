import {useEffect} from "react";
import styles from "@/styles/Home.module.scss";
import * as THREE from "three";
import {STLLoader} from "three/addons/loaders/STLLoader";
import {AsciiEffect} from "three/addons/effects/AsciiEffect";
import {OrbitControls} from "three/addons/controls/OrbitControls";
import $ from "jquery";

export default function Acnod3DLogo() {
    useEffect(() => {
        let controls;

        const mesh = new THREE.Mesh();

        const scene = new THREE.Scene();

        const pointLight1 = new THREE.PointLight(0xffffff, 1);
        pointLight1.position.set(100, 50, 400);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xffffff, 1);
        pointLight2.position.set(-100, -50, -400);
        scene.add(pointLight2);

        const stlLoader = new STLLoader()

        const material = new THREE.MeshStandardMaterial()
        material.flatShading = true;
        material.side = THREE.DoubleSide;

        const model = $(`#${styles.model}`);

        const sizes = {
            width: model[0].clientWidth,
            height: model[0].clientHeight
        };

        const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 2000);

        const renderer = new THREE.WebGLRenderer();

        let effect;

        let characters = ' .:-+*=%#@';
        const effectSize = { amount: .205 };
        let backgroundColor = 'transparent';

        // let ASCIIColor = '#02ffb4';
        let ASCIIColor = '#00ae86';

        function createEffect() {
            effect = new AsciiEffect(renderer, characters, { invert: true, resolution: effectSize.amount });
            effect.setSize(sizes.width, sizes.height);
            effect.domElement.style.color = ASCIIColor;
            effect.domElement.style.backgroundColor = backgroundColor;
        }
        createEffect();

        model.append(effect.domElement);

        stlLoader.load(
            'brand/model.stl',
            function (geometry) {

                mesh.material = material;
                mesh.geometry = geometry;

                let tempGeometry = new THREE.Mesh(geometry, material);
                mesh.position.copy = (tempGeometry.position);

                geometry.computeVertexNormals();
                mesh.geometry.center();

                mesh.rotation.x = (-90 * Math.PI / 180).toFixed(2);
                mesh.rotation.z = 90 * Math.PI / 180;

                // mesh.rotation.x += -5 * Math.PI / 180;

                mesh.geometry.computeBoundingBox();
                let bbox = mesh.geometry.boundingBox;

                mesh.position.y = ((bbox.max.z - bbox.min.z) / 5);

                camera.position.x = ((bbox.max.x * 4));
                camera.position.y = ((bbox.max.y));
                camera.position.z = ((bbox.max.z * 3));

                scene.add(mesh);
                controls = new OrbitControls(camera, effect.domElement);
                controls.enableZoom = false;
                controls.enablePan = false;
                controls.enableDamping = true;

                let box = new THREE.Box3().setFromObject( mesh )
                let center = new THREE.Vector3();
                box.getCenter( center );
                mesh.position.sub( center );

                let pauseAnimation = false;

                controls.addEventListener('change', function() {
                    pauseAnimation = true;
                });

                controls.addEventListener('end', function() {
                    pauseAnimation = false;
                });

                function render() {
                    window.requestAnimationFrame(render);
                    if (!pauseAnimation){
                        mesh.rotation.z += 0.005;
                        mesh.rotation.y += 0.005;
                    }
                    effect.render(scene, camera);
                }
                render()
            }
        )
    }, [])
}