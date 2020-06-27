import React from "react"
import '../styles/global.scss'
import Layout from "../components/layout/layout"

export default function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}