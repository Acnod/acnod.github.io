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
import Acnod3DLogo from "@/components/Acnod3DLogo";
import Link from "next/link";


export default function Home() {

  Acnod3DLogo();

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
                <li><p>C#</p></li>
                <li><p>CSS</p></li>
                <li><p>HTML</p></li>
                <li><p>Java</p></li>
                <li><p>JavaScript</p></li>
                <li><p>JQuery</p></li>
                <li><p>NextJS</p></li>
                <li><p>SCSS</p></li>
              </ul>
            </div>
              <Link href={"/products"} className={styles.button}>Learn more</Link>
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
