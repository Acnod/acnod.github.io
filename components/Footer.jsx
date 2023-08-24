import Image from 'next/image'
import styles from '@/styles/Footer.module.scss'
import largeLogo from "@/public/brand/large-logo.svg";
import Link from "next/link";
import {useTranslation} from "next-i18next";

export default function Footer() {
    const { t } = useTranslation('footer');
    const tc = useTranslation('common').t;
    return (
        <>
            <footer className={styles.footer}>
                <div className={"container"}>
                    <div className={styles.footerWrapper}>
                        <div className={styles.linkContent}>
                            <div>
                                <h3>{t('navigation')}</h3>
                                <ul>
                                    <li>
                                        <Link href={"/"}>{tc('home')}</Link>
                                    </li>
                                    <li>
                                        <Link href={"/portfolio"}>{tc('portfolio')}</Link>
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <h3>{t('follow_us')}</h3>
                                <ul>
                                    <li>
                                        <a href={"https://twitter.com/AcnodTeam"} target={"_blank"} rel={"noreferrer"}>Twitter</a>
                                    </li>
                                    <li>
                                        <a href={"https://discord.gg/vWkQswvdnA"} target={"_blank"} rel={"noreferrer"}>Discord</a>
                                    </li>
                                    <li>
                                        <a href={"https://instagram.com/AcnodTeam"} target={"_blank"} rel={"noreferrer"}>Instagram</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.contactContent}>
                            <div className={styles.wrapper}>
                                <h3>{t('contact_us')}</h3>
                                <a href={"mailto:hello@acnod.net"}>hello@acnod.net</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.lastFooter}>
                        <h1>
                            <Image src={largeLogo} alt={"Acnod Team"} height={50}/>
                        </h1>
                        <p>
                            &copy; 2023 Acnod Team
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
