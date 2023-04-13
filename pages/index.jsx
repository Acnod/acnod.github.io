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
import avatarSkymmel from "@/public/skymmel.jpg";
import avatarJakooob from "@/public/jakooob.jpg";
import Image from 'next/image'
import Link from "next/link";
import Languages from "@/components/Languages";

let avatarSize = 146;
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
              <Languages languages={['C#', 'CSS', 'HTML', 'Java', 'JavaScript', 'JQuery', 'NextJS', 'SCSS']}/>
            </div>
              <Link href={"/portfolio"} className={styles.button}>Learn more</Link>
          </div>
          <div id={styles.modelContainer}><div id={styles.model}/></div>
            </div>
        </div>
      </main>
      <section className={styles.description}>
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
      </section>
      <section className={styles.aboutUs} id={"aboutUs"}>
        <div className={"container"}>
          <h1>Learn about us<span>.</span></h1>
          <div className={styles.groupMembers}>
            <div className={styles.member}>
              <div className={styles.avatarWrapper}>
                <a href={"https://skymmel.eu"} target={"_blank"} rel={"noreferrer"}>
                  <Image src={avatarSkymmel} alt={"avatar"} width={avatarSize} height={avatarSize}/>
                </a>
              </div>
              <h2>Wilhelm Skyba</h2>
              <p>Designer & Developer</p>
            </div>
            <div className={styles.member}>
              <div className={styles.avatarWrapper}>
                <a href={"https://jakooob.me"} target={"_blank"} rel={"noreferrer"}>
                  <Image src={avatarJakooob} alt={"avatar"} width={avatarSize} height={avatarSize}/>
                </a>
              </div>
              <h2>Jakub Sokol</h2>
              <p>Developer</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
