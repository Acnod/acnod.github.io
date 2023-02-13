import Image from 'next/image'
import styles from '@/styles/Header.module.scss'
import $ from 'jquery'
import smallLogo from '@/public/brand/small-logo.svg'
import navigationImage from '@/public/navigation.svg'
import Link from "next/link";

export default function Header() {
    function openMenu(){
        let navigationBar = $("#navigationBar");
        if (navigationBar.hasClass(styles.open)) {
            navigationBar.removeClass(styles.open);
        } else {
            navigationBar.addClass(styles.open);
        }
    }

    return (
        <>
            <header className={`${styles.header} container`}>
                <Link className={styles.brandLogo} href="/">
                    <Image src={smallLogo} alt="Acnod Logo" priority />
                </Link>
                <button onClick={openMenu}><Image src={navigationImage}  alt={"Menu button"}/></button>
                <ul id={"navigationBar"}>
                    <li>
                        <Link href={""}>Home</Link>
                    </li>
                    <li>
                        <Link href={""}>About</Link>
                    </li>
                    <li>
                        <Link href={""}>Support</Link>
                    </li>
                </ul>
            </header>
        </>
    )
}