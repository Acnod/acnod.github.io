import Head from "next/head"

export default function DHead({ title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Acnod Team" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="/brand/favicon.svg" type="image/x-icon" />
            </Head>
        </>
    )
}
