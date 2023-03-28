import styles from '@/styles/Support.module.scss';
import Head from '@/components/Head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Support() {

    return (
        <>
            <Head title={"Acnod Team"} />
            <main>
                <Header />
                <div className={"container"}>
                    <h1 className={styles.title}>Ask us anything<span className={"_greenText"}>.</span></h1>

                </div>
                <Footer />
            </main>
        </>
    )
}
