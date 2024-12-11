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
import avatarJakooob from "@/public/jakooob.jpeg";
import avatarSlynx from "@/public/michallogo.png"
import Image from 'next/image'
import Link from "next/link";
import Languages from "@/components/Languages";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

let avatarSize = 146;
export default function Home() {
  const { t } = useTranslation('home');
  Acnod3DLogo();

  return (
    <>
      <Head title={"Acnod Team"} />
      <Header />
      <main className={styles.main}>
        <div className={"container"}>
            <div className={styles.grid}>
          <div>
            <h1>{t('main_title')}<span>.</span></h1>
            <div className={styles.languages}>
              <Languages languages={['C#', 'CSS', 'HTML', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'JQuery', 'NextJS', 'SCSS']}/>
            </div>
              <Link href={"/portfolio"} className={styles.button}>{t('learn_more')}</Link>
          </div>
          <div id={styles.modelContainer}><div id={styles.model}/></div>
            </div>
        </div>
      </main>
      <section className={styles.description}>
        <div className={"container"}>
          <h1>{t('what_can_we_do')}<b className={"_greenText"}>?</b></h1>
          <ul>
            <li>
              <BsGrid1X2Fill/>
              <h2>{t('detailed_look')}</h2>
              <p>{t('detailed_look.subtitle')}</p>
            </li>
            <li>
              <BsFillCalendarCheckFill/>
              <h2>{t('delivery')}</h2>
              <p>{t('delivery.subtitle')}</p>
            </li>
            <li>
              <BsFillChatDotsFill/>
              <h2>{t('fast_support')}</h2>
              <p>{t('fast_support.subtitle')}</p>
            </li>
            <li>
              <BsLayoutTextWindow/>
              <h2>{t('responsiveness')}</h2>
              <p>{t('responsiveness.subtitle')}</p>
            </li>
            <li>
              <BsSpeedometer/>
              <h2>{t('optimization')}</h2>
              <p>{t('optimization.subtitle')}</p>
            </li>
            <li>
              <BsSliders/>
              <h2>{t('customization')}</h2>
              <p>{t('customization.subtitle')}</p>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.aboutUs} id={"aboutUs"}>
        <div className={"container"}>
          <h1>{t('about_us.title')}<span>.</span></h1>
          <div className={styles.groupMembers}>
            <div className={styles.member}>
              <div className={styles.avatarWrapper}>
                <a href={"https://skymmel.eu"} target={"_blank"} rel={"noreferrer"}>
                  <Image src={avatarSkymmel} alt={"avatar"} width={avatarSize} height={avatarSize}/>
                </a>
              </div>
              <h2>Wilhelm Skyba</h2>
              <p>{t('about_us.skyba.subtitle')}</p>
            </div>
            <div className={styles.member}>
              <div className={styles.avatarWrapper}>
                <a href={"https://slynxdev.cz"} target={"_blank"} rel={"noreferrer"}>
                  <Image src={avatarSlynx} alt={"avatar"} width={avatarSize} height={avatarSize}/>
                </a>
              </div>
              <h2>Michal Přikryl</h2>
              <p>{t('about_us.prikryl.subtitle')}</p>
            </div>
            <div className={styles.member}>
              <div className={styles.avatarWrapper}>
                <a href={"https://jakooob.dev"} target={"_blank"} rel={"noreferrer"}>
                  <Image src={avatarJakooob} alt={"avatar"} width={avatarSize} height={avatarSize}/>
                </a>
              </div>
              <h2>Jakub Sokol</h2>
              <p>{t('about_us.sokol.subtitle')}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'header', 'footer', 'common'])),
    },
  }
}
