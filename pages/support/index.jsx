import styles from '@/styles/Support.module.scss';
import Head from '@/components/Head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import $ from 'jquery';

export default function Support() {
    const webhookUrl = "https://qqqqqqqqqqqdiscord.com/api/webhooks/1090680129732235304/vKIqZ2bfdvKA7NXAGuSzfBwd9GayREB-lJNSH7FZhXWzNPTSBbnSY1es9e7H1NrrLOOW";
    function handleSubmit(e) {
        if (!checkInputs(e)) return;

        e.preventDefault();
        fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: `Name: ${e.target.name.value}\nEmail: ${e.target.email.value}\nMessage: ${e.target.message.value}`
            })
        }).then(() => {
            $(e).text("Message has been sent!");
        }).catch(() => {
            $(e).text("An error occurred while sending your message. Please try again later.");
        });
    }

    function checkInputs(e) {
        e.preventDefault()
        const inputs = $(e.target).find("input, textarea");
         let cancel = false;
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value === "") {
                inputs[i].classList.add(styles.invalid);
                $(inputs[i]).parent().find(`#${styles.invalid}`).text("This field is required");
                cancel = true;
            } else if (
                inputs[i].name === "email" &&
                (!inputs[i].value.includes("@") ||
                !inputs[i].value.includes(".") ||
                inputs[i].value.includes(" "))
                ) {
                inputs[i].classList.add(styles.invalid);
                $(inputs[i]).parent().find(`#${styles.invalid}`).text("This field must be a valid email");
                cancel = true;
            } else {
                $(inputs[i]).parent().find(`#${styles.invalid}`).text("");
            }
        }
        return !cancel;
    }

    return (
        <>
            <Head title={"Acnod Team"} />
            <Header />
            <main className={styles.main}>
                <div className={`container ${styles.container}`}>
                    <h1 className={styles.title}>Ask us anything<span className={"_greenText"}>.</span></h1>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" />
                            <p id={styles.invalid}></p>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" />
                            <p id={styles.invalid}></p>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" cols="30" rows="10"></textarea>
                            <p id={styles.invalid}></p>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}
