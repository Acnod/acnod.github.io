import styles from '@/styles/Products.module.scss';
import Head from '@/components/Head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from "next/link";
import { AiFillClockCircle } from 'react-icons/ai';
import Image from "next/image";

export default function Products() {

  return (
    <>
      <Head title={"Acnod Team"} />
      <main>
        <Header />
        <div className={"container"}>
          <h1 className={styles.title}>What do we offer<span className={"_greenText"}>?</span></h1>
            <ul className={styles.products}>
              <li className={styles.__product}>
                <h2>Websites</h2>
                {/*<p>A simple website with a main page and one other page.</p>*/}
                <ul>
                  <li>
                    <div>
                      <h3>One page website</h3>
                      <h3>€100</h3>
                    </div>
                    <p>A website with one page, a header and a footer.</p>
                    <p><AiFillClockCircle/> 7 Days Delivery *</p>
                  </li>
                  <li>
                    <div>
                      <h3>+ 1 page</h3>
                      <h3>€65</h3>
                    </div>
                    <p>Another page of your choice. You can add this how many times you want.</p>
                    <p><AiFillClockCircle/> 5 Days Delivery *</p>
                  </li>
                </ul>
              </li>
              <li className={styles.__product}>
                <h2>Graphic design</h2>
                {/*<p>A simple website with a logo, a main page and one other page.</p>*/}
                <ul>
                  <li>
                    <div>
                      <h3>Logo</h3>
                      <h3>€120</h3>
                    </div>
                    <p>A simplistic logo.</p>
                    <p><AiFillClockCircle/> 14 Days Delivery *</p>
                  </li>
                  <li>
                    <div>
                      <h3>Banner</h3>
                      <h3>€60</h3>
                    </div>
                    <p>A simplistic banner.</p>
                    <p><AiFillClockCircle/> 10 Days Delivery *</p>
                  </li>
                </ul>
              </li>
              <li className={styles.__product}>
                <h2>Minecraft modding</h2>
                <ul>
                  <li>
                    <div>
                      <h3>Simple mod</h3>
                      <h3>€30</h3>
                    </div>
                    <p>A simple mod with basic features.</p>
                    <p><AiFillClockCircle/> 7 Days Delivery *</p>
                  </li>
                  <li>
                    <div>
                      <h3>Advanced mod</h3>
                      <h3>€65</h3>
                    </div>
                    <p>A medium sized mod with a more advanced functionality.</p>
                    <p><AiFillClockCircle/> 14 Days Delivery *</p>
                  </li>
                </ul>
              </li>
            </ul>
          <ul className={styles.addition}>
            <li>Web-hosting is not included. You will need to put it on a web-host yourself.</li>
            <li>The website will be made with <Link href={"https://nextjs.org/"}>Next JS</Link>. This is because Next JS is faster and more performant over basic HTML and we can make the website faster. <br/>If you really want to we can make the website in basic HTML for you.</li>
            <li>* Delivery times may be adjusted due to our schedule.</li>
          </ul>
        </div>
        <Footer />
      </main>
    </>
  )
}
