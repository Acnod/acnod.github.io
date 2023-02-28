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
            <h1>What do you want to create<span>?</span></h1>
            <div>
              <div>
                <h2>Simple website</h2>
                <p>A simple website with a logo, a main page and one other page.</p>
                <ul>
                  <li>
                    <div>
                      <h3>Base</h3>
                      <span>100€</span>
                    </div>
                    <p>A fully fledged main page.</p>
                  </li>
                  <li>
                    <div>
                      <h3>+ 1 page</h3>
                      <span>65€</span>
                    </div>
                    <p>Another page of your choice. You can add this how many times you want.</p>
                  </li>
                  <li>
                    <div>
                      <h3>Logo</h3>
                      <span>60€</span>
                    </div>
                    <p>A full logo. If you already have a logo this can be removed.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </main>
    </>
  )
}
