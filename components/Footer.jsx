import Image from 'next/image'
import styles from '@/styles/Footer.module.scss'
import largeLogo from "@/public/brand/large-logo.svg";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={"container"}>
                    <div className={styles.links}>
                        <ul>
                            <h2>Information</h2>
                            <li>
                                <Link href={"/about"}>About</Link>
                            </li>
                        </ul>
                        <ul>
                            <h2>Products</h2>
                            <li>
                                <Link href={"products#website"}>
                                    Website building
                                </Link>
                            </li>
                            <li>
                                <Link href={"products#design"}>
                                    Graphic design
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <h2>Socials</h2>
                            <li>
                                <a href={"https://twitter.com/AcnodTeam"}>
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href={""}>
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <h2>Contacts</h2>
                            <li>
                                <span>Email </span>
                                <a href="mailto:hello@acnod.net">
                                    <b>hello@acnod.net</b>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.last}>

                        <h1><Image src={largeLogo} alt="Acnod" /></h1>
                        <p>&copy; 2022 Acnod, all rights reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
