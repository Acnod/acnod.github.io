import Image from 'next/image';
import styles from '@/styles/Header.module.scss';
import smallLogo from '@/public/brand/small-logo.svg';
import navigationImage from '@/public/navigation.svg';
import $ from "jquery";
import Link from "next/link";
import {useTranslation} from "next-i18next";

export default function Header() {
    const tc = useTranslation('common').t;

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
                    <Image src={smallLogo} height={48} alt="Acnod Logo" priority />
                </Link>
                <button onClick={openMenu}><Image src={navigationImage} height={48}  alt={"Menu button"}/></button>
                <ul id={"navigationBar"}>
                    <li>
                        <Link href={"/"}>{tc('home')}</Link>
                    </li>
                    <li>
                        <Link href={"/portfolio"}>{tc('portfolio')}</Link>
                    </li>
                    <li>
                        <Link href={""} locale={"en"}>EN</Link>
                        <span>|</span>
                        <Link href={""} locale={"cs"}>CZ</Link>
                    </li>
                </ul>
            </header>
        </>
    )
}
