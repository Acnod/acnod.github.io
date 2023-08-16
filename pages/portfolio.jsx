import styles from '@/styles/Portfolio.module.scss';
import Head from '@/components/Head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from "next/image";
import { FaGlobe } from "react-icons/fa";
import { BsX } from "react-icons/bs";
import Languages from "@/components/Languages";
import $ from "jquery";

const DEFAULT_IMAGE = "/icons/image-fill.svg";

export default function Portfolio() {
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
                        <h1>Portfolio</h1>
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
                                <p>Mejs is a Czech website dedicated to the Minecraft server of the same name. Built with NextJS, it offers a great user experience with its modern design. The website is designed with a clean and minimalist layout.</p>
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
                                    <h2>Not finished</h2>
                                </div>
                                <Languages className={styles.languages} languages={["NextJS", "SCSS"]}/>
                                <p>This website is for a company named Nagy 3D that offers 3D printing and scanning in the northwestern region of the Czech Republic. It offers a minimalistic and clean look so the user can have a good experience.</p>
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
