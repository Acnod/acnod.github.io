import styles from '@/styles/Portfolio.module.scss';
import Head from '@/components/Head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from "next/image";
import { FaGlobe } from "react-icons/fa";
import { BsX } from "react-icons/bs";
import Languages from "@/components/Languages";
import $ from "jquery";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

const DEFAULT_IMAGE = "/icons/image-fill.svg";

export default function Portfolio() {
    const { t } = useTranslation('portfolio');
    const tc = useTranslation('common').t;

    let imgOpen = false;
    function fullscreenImage (e) {
        if (imgOpen){
            $(`#${styles.fullImage}`).css("display", "none");
            imgOpen = false;
        } else{
            $(`#${styles.fullImage}`).css("display", "flex");
            $(`#${styles.fullImage} img`).attr("src", $(e.target)[0].src)
            imgOpen = true;
        }
    }
    return (
        <>
            <Head title={"Acnod Team | Portfolio"} />
            <Header />
            <div id={styles.fullImage}>
                <div className={styles.imageWrapper}>
                    <Image src={DEFAULT_IMAGE} width={1920} height={1080} alt={""}/>
                </div>
                <BsX onClick={fullscreenImage} size={50}/>
            </div>
            <main>
                <div className={styles.title}>
                    <div className={"container"}>
                        <h1>{tc('portfolio')}</h1>
                    </div>
                </div>
                <div className={"container"}>
                    <div className={styles.portfolio}>
                        <section className={styles.project}>
                            <div className={styles.img}><Image onClick={fullscreenImage} src={"/portfolio/mejs.png"} width={1920} height={1080} alt={"Nagy 3D Web"} priority/></div>
                            <div className={styles.description}>
                                <div className={styles.descTitle}>
                                    <h1>Mejs</h1>
                                </div>
                                <Languages className={styles.languages} languages={["NextJS", "SCSS"]}/>
                                <p>{t('mejs.subtitle')}</p>
                                <span className={styles.links}>
                                    <a href={"https://mejs.cz"}><FaGlobe/><p>Mejs.cz</p></a>
                                </span>
                            </div>
                        </section>
                        <section className={styles.project}>
                            <div className={styles.img}><Image onClick={fullscreenImage} src={"/portfolio/nagy3d.png"} width={1920} height={1080} alt={"Nagy 3D Web"} priority/></div>
                            <div className={styles.description}>
                                <div className={styles.descTitle}>
                                    <h1>Nagy 3D</h1>
                                    <h2>{t('not_finished')}</h2>
                                </div>
                                <Languages className={styles.languages} languages={["NextJS", "SCSS"]}/>
                                <p>{t('nagy_3d.subtitle')}</p>
                                <span className={styles.links}>
                                </span>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['portfolio', 'header', 'footer', 'common'])),
        },
    }
}