import styles from '@/styles/Home.module.scss'
import Head from '@/components/Head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from "next/image"
import boxIcon from "@/public/icons/box-fill.svg"
import calendarIcon from "@/public/icons/calendar-check-fill.svg"
import chatIcon from "@/public/icons/chat-dots-fill.svg"
import layoutIcon from "@/public/icons/layout-text-window.svg"
import speedIcon from "@/public/icons/speedometer.svg"
import slidersIcon from "@/public/icons/sliders2.svg"
import smallLogo from "@/public/brand/small-logo.svg"

export default function Home() {
  let imageSize = 32;

  return (
    <>
      <Head title={"Acnod Team"} />
      <main className={styles.main}>
        <Header />
        <main className={styles.mainPage}>
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
          </div>
        </main>
        <div className={styles.description}>
          <div className={"container"}>
            <h1>What can we do<b className={"_greenText"}>?</b></h1>
            <ul>
              <li>
                <Image src={boxIcon} alt={"Lorem"} height={imageSize} />
                <h2>Detailed look</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus posuere dui ut commodo.</p>
              </li>
              <li>
                <Image src={calendarIcon} alt={"Lorem"} height={imageSize} />
                <h2>Delivery</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus posuere dui ut commodo.</p>
              </li>
              <li>
                <Image src={chatIcon} alt={"Lorem"} height={imageSize} />
                <h2>Fast support</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus posuere dui ut commodo.</p>
              </li>
              <li>
                <Image src={layoutIcon} alt={"Lorem"} height={imageSize} />
                <h2>Responsibility</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus posuere dui ut commodo.</p>
              </li>
              <li>
                <Image src={speedIcon} alt={"Lorem"} height={imageSize} />
                <h2>Optimized</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus posuere dui ut commodo.</p>
              </li>
              <li>
                <Image src={slidersIcon} alt={"Lorem"} height={imageSize} />
                <h2>Customization</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus posuere dui ut commodo.</p>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
