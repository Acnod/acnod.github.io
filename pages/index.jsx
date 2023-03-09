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
import GlowingButton from "@/components/GlowingButton";
import gbStyles from "@/styles/GlowingButton.module.scss";
import {useRef} from "react";
import Image from "next/image";
// import saturn from "@/public/saturn.png";

export default function Home() {
  const ref = useRef();
  const borderSize = 5,
      glowSize = "50px -10px",
      gradientSize = "400px";


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
            <div className={styles.languages}>
              <div className={"container"}>
                <h2>
                  Our tech stack for development.
                </h2>
                <ul>
                  <li>
                    C#
                  </li>
                  <li>
                    CSS
                  </li>
                  <li>
                    HTML
                  </li>
                  <li>
                    Java
                  </li>
                  <li>
                    JavaScript
                  </li>
                  <li>
                    JQuery
                  </li>
                  <li>
                    NextJS
                  </li>
                  <li>
                    SCSS
                  </li>
                </ul>
              </div>
            </div>
          </div>
        <div className={`${styles.description} ${gbStyles.container}`} ref={ref}>
          <div className={"container"}>
            <h1>What can we do<b className={"_greenText"}>?</b></h1>
            <ul>
              {/*<li>*/}
              {/*  <BsGrid1X2Fill/>*/}
              {/*  <h2>Detailed look</h2>*/}
              {/*  <p>Our web design services offer a professional, elegant, and simplistic look, while ensuring attention to detail and precision.</p>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <BsFillCalendarCheckFill/>*/}
              {/*  <h2>Delivery</h2>*/}
              {/*  <p>We are committed to delivering your product on time, and in the event of any unforeseen delays, we will promptly notify you.</p>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <BsFillChatDotsFill/>*/}
              {/*  <h2>Fast support</h2>*/}
              {/*  <p>We strive to respond to your messages within an hour, even outside of regular business hours, with the exception of overnight.</p>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <BsLayoutTextWindow/>*/}
              {/*  <h2>Responsive</h2>*/}
              {/*  <p>Our websites provide great responsiveness for mobile, tablets and desktops.</p>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <BsSpeedometer/>*/}
              {/*  <h2>Optimized</h2>*/}
              {/*  <p>Thanks to our use of Next.js, our websites are optimized for speed and performance.</p>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <BsSliders/>*/}
              {/*  <h2>Customization</h2>*/}
              {/*  <p>We offer flexible customization options to accommodate any changes you desire, ensuring that the final product meets your specifications.</p>*/}
              {/*</li>*/}
              <li>
                <GlowingButton borderSize={borderSize}  gradientSize={gradientSize} glowSize={glowSize} container={ref}>
                <BsGrid1X2Fill/>
                <h2>Detailed look</h2>
                <p>Our web design services offer a professional, elegant, and simplistic look, while ensuring attention to detail and precision.</p>
                </GlowingButton>
              </li>
              <li>
                <GlowingButton borderSize={borderSize}  gradientSize={gradientSize} glowSize={glowSize} container={ref}>
                <BsFillCalendarCheckFill/>
                <h2>Delivery</h2>
                <p>We are committed to delivering your product on time, and in the event of any unforeseen delays, we will promptly notify you.</p>
                </GlowingButton>
              </li>
              <li>
                <GlowingButton borderSize={borderSize}  gradientSize={gradientSize} glowSize={glowSize} container={ref}>
                <BsFillChatDotsFill/>
                <h2>Fast support</h2>
                <p>We strive to respond to your messages within an hour, even outside of regular business hours, with the exception of overnight.</p>
                </GlowingButton>
              </li>
              <li>
                <GlowingButton borderSize={borderSize}  gradientSize={gradientSize} glowSize={glowSize} container={ref}>
                <BsLayoutTextWindow/>
                <h2>Responsive</h2>
                <p>Our websites provide great responsiveness for mobile, tablets and desktops.</p>
                </GlowingButton>
              </li>
              <li>
                <GlowingButton borderSize={borderSize}  gradientSize={gradientSize} glowSize={glowSize} container={ref}>
                <BsSpeedometer/>
                <h2>Optimized</h2>
                <p>Thanks to our use of Next.js, our websites are optimized for speed and performance.</p>
                </GlowingButton>
              </li>
              <li>
                <GlowingButton borderSize={borderSize}  gradientSize={gradientSize} glowSize={glowSize} container={ref}>
                <BsSliders/>
                <h2>Customization</h2>
                <p>We offer flexible customization options to accommodate any changes you desire, ensuring that the final product meets your specifications.</p>
                </GlowingButton>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
