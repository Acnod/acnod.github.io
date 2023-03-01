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

export default function Home() {
  let imageSize = 32;

  return (
    <>
      <Head title={"Acnod Team"} />
      <main className={styles.main}>
        <div className={`${styles.background} container`}>
          <span/>
          <span/>
          <span/>
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
                <h2>Responsibility</h2>
                <p>Our websites provide a full responsibility for mobile, tablets and desktops.</p>
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
