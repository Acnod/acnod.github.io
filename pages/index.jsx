import styles from '@/styles/Home.module.scss';
import Head from '@/components/Head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  BsFillCalendarCheckFill,
  BsFillChatDotsFill,
  BsLayoutTextWindow,
  BsSpeedometer,
  BsSliders,
  BsGrid1X2Fill
} from 'react-icons/bs';
import { useRef, useEffect } from "react";
import * as THREE from "three";
import {STLLoader} from "three/addons/loaders/STLLoader";
import {AsciiEffect} from "three/addons/effects/AsciiEffect";
import {OrbitControls} from "three/addons/controls/OrbitControls";
import $ from "jquery";


export default function Home() {

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
    console.log(model)

    const sizes = {
      width: model[0].clientWidth,
      height: model[0].clientHeight
    };

    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 2000);

    const renderer = new THREE.WebGLRenderer();

    let effect;

    let characters = ' .:-+*=%@#';
    const effectSize = { amount: .205 };
    let backgroundColor = 'transparent';
    let ASCIIColor = '#626b76';

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

  return (
    <>
      <Head title={"Acnod Team"} />
      <Header />
      <main className={styles.main}>
        <div className={"container"}>
            <div className={styles.grid}>
          <div>
            <h1>Software development and essential design<span>.</span></h1>
            <div className={styles.languages}>
              <ul>
                <li>
                  <p>C#</p>
                </li>
                <li>
                  <p>CSS</p>
                </li>
                <li>
                  <p>HTML</p>
                </li>
                <li>
                  <p>Java</p>
                </li>
                <li>
                  <p>JavaScript</p>
                </li>
                <li>
                  <p>JQuery</p>
                </li>
                <li>
                  <p>NextJS</p>
                </li>
                <li>
                  <p>SCSS</p>
                </li>
              </ul>
            </div>
              <a href={"#"} className={styles.button}>Learn more</a>
          </div>
          <div id={styles.modelContainer}><div id={styles.model}/></div>
            </div>
        </div>
      </main>
      <div className={styles.description}>
        <div className={"container"}>
          <h1>What can we do<b className={"_greenText"}>?</b></h1>
          <ul>
            <li>
              <BsGrid1X2Fill/>
              <h2>Detailed look</h2>
              <p>Our web design services offer a professional, elegant, and simplistic look, while ensuring attention to detail and precision.</p>
            </li>
            <li>
              <BsFillCalendarCheckFill/>
              <h2>Delivery</h2>
              <p>We are committed to delivering your product on time, and in the event of any unforeseen delays, we will promptly notify you.</p>
            </li>
            <li>
              <BsFillChatDotsFill/>
              <h2>Fast support</h2>
              <p>We strive to respond to your messages within an hour, even outside of regular business hours, with the exception of overnight.</p>
            </li>
            <li>
              <BsLayoutTextWindow/>
              <h2>Responsive</h2>
              <p>Our websites provide great responsiveness for mobile, tablets and desktops.</p>
            </li>
            <li>
              <BsSpeedometer/>
              <h2>Optimized</h2>
              <p>Thanks to our use of Next.js, our websites are optimized for speed and performance.</p>
            </li>
            <li>
              <BsSliders/>
              <h2>Customization</h2>
              <p>We offer flexible customization options to accommodate any changes you desire, ensuring that the final product meets your specifications.</p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}
