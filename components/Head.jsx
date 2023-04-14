import Head from "next/head"

export default function DHead({ title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="/brand/favicon.svg" type="image/x-icon" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/brand/small-logo.png" />
                <meta name="description" content="Acnod Team is a team of 2 developers that build sites." />
            </Head>
        </>
    )
}
