import Document, {Html, Head, Main, NextScript} from 'next/document'
import React from "react";
import theme from "../styles/theme";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,600&amp;subset=cyrillic"
                    />
                </Head>
                <body>
                <Main />
                <NextScript/>
                <style jsx global>{`
                    /*
                     Reusable classes for all components; 
                     * not move them to scss because use dynamic properties from the theme
                     */
                    .container_limit_max-width {
                        max-width: ${theme.sizes.laptopL};
                        width: 100%;
                        margin: 0 auto; 
                    }
                    .container_flex {
                        display: flex;
                    }  
                    .container_flex-center {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }  
                    .container_disable_select {
                        user-select: none !important;
                        outline: none !important;
                    }
                `}</style>
                </body>
            </Html>
        )
    }
}

export default MyDocument