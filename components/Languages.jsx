import styles from "@/styles/Languages.module.scss";

export default function Languages (props) {
    return (
        <div className={`${styles.languages} ${props.className}`}>
            <ul>
                {
                    props.languages.map((lang) => {
                        return (<li key={lang}><p>{lang}</p></li>)
                    })
                }
            </ul>
        </div>
    )
}