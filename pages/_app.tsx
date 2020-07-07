import React from "react"
import {ApolloProvider} from '@apollo/react-hooks'
import '../styles/global.scss'
import '../styles/slick/slick.css'
import '../styles/slick/slick.theme.css'
import Layout from "../components/layout/layout"
import {initializeApollo, useApollo} from "../libs/appolo-client"
import gql from "graphql-tag";

export default function MyApp({Component, pageProps}) {
    const apolloClient = useApollo(pageProps.initialApolloState)
    return (
        <ApolloProvider client={apolloClient}>
            <Layout navigation={pageProps.navigation}>
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    )
}

MyApp.getInitialProps = async ({Component, ctx}) => {
    const apolloClient = initializeApollo()
    const {loading, error, data} = await apolloClient.query({
        query: gql`
                       {
                         navigation {
                           id
                           name
                           link
                           items {
                             id
                             name
                             link
                           }
                         }
                       }
                   `
    });

    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
    }
    // @ts-ignore
    pageProps.navigation = data.navigation
    return {pageProps};
};