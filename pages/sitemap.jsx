import Head from "@/components/Head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import xml2js from "xml2js";
import { useEffect, useState } from "react";
import styles from "@/styles/Sitemap.module.scss";
import Link from "next/link";

export default function Sitemap(){
    const [sitemap, setSitemap] = useState([]);

    useEffect(() => {
        const fetchSitemap = async () => {
            const response = await fetch('/sitemap.xml');
            const xml = await response.text();
            const result = await xml2js.parseStringPromise(xml);
            setSitemap(result.urlset.url);
        };
        fetchSitemap();
    }, []);
    return(
        <>
            <Head title={"Acnod Team | Sitemap"}/>
            <Header/>
            <main className={`${styles.main} container`}>
                <div className={styles.sitemap}>
                    {sitemap.map((url) => (
                        <span key={url.loc}><Link href={url.loc}>{url.title}</Link></span>
                    ))}
                </div>
            </main>
            <Footer/>
        </>
    )
}