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
  const ref = useRef();
  const borderSize = 5,
      glowSize = "50px -10px",
      gradientSize = "400px";

  useEffect(() => {/*
    let controls;

    const mesh = new THREE.Mesh();

    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0, 0, 0);

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

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 2000);

    const renderer = new THREE.WebGLRenderer( { alpha: true } );
    renderer.setClearColor( 0x000000, 0 );

    let effect;

    let characters = ' .:-+*=%@#';
    const effectSize = { amount: .205 };
    let backgroundColor = 'black';
    let ASCIIColor = 'white';

    function createEffect() {
      effect = new AsciiEffect(renderer, characters, { invert: true, resolution: effectSize.amount });
      effect.setSize(sizes.width, sizes.height);
      effect.domElement.style.color = ASCIIColor;
      effect.domElement.style.backgroundColor = backgroundColor;
    }*/

    // createEffect();


    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer( { alpha: true } );
    renderer.setClearColor( 0x000000, 0 );
    $(`#${styles.modelContainer}`).append(renderer.domElement);

    renderer.setSize( window.innerWidth, window.innerHeight );
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );

    scene.add( cube );

    camera.position.z = 5;
    function animate() {

      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;

      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    }
    animate()
    // $(`#${styles.modelContainer}`).append(effect.domElement);
/*
    stlLoader.load(
        'brand/model.stl',
        function (geometry) {

          mesh.material = material;
          mesh.geometry = geometry;

          let tempGeometry = new THREE.Mesh(geometry, material);
          mesh.position.copy = (tempGeometry.position);

          geometry.computeVertexNormals();
          mesh.geometry.center();

          mesh.rotation.x = -90 * Math.PI / 180;
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

          function render() {
            window.requestAnimationFrame(render);
            mesh.rotation.z += 0.01;
            effect.render(scene, camera);
          }
          render()
        }
    )*/
  })

  return (
    <>
      <Head title={"Acnod Team"} />
      <main className={styles.main}>
        <div className={`${styles.background} container`}>
          {/*<Image src={saturn} alt={""} height={300}/>*/}
          {/*  <span/>*/}
          {/*  <span/>*/}
          {/*  <span/>*/}
        </div>
        <Header />
        <div className={"container"}>
          <h1>
              Software development and essential design<b className={"_greenText"}>.</b>
            </h1>
          <div className={styles.middleContainer}>
            <div className={styles.gridBox}>
              <div className={styles.mainBox}>
                <h2>
                  Professional website development
                </h2>
                <a href="">Explore</a>
              </div>
              <div className={styles.secondBox}>
                <h3>
                  Modern design
                </h3>
              </div>
              <div className={styles.thirdBox}>
                <h3>
                  Sleek look
                </h3>
              </div>
            </div>
            <div id={styles.modelContainer}>
            </div>
          </div>
            <div className={styles.languages}>
              <div className={"container"}>
                <h2>
                  Our tech stack for development.
                </h2>
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
            </div>
          </div>
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
      </main>
    </>
  )
}
