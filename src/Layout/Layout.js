import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Helmet } from "react-helmet";
import Home from '../Mainblock/Home';

function Layout({ children }) {
    return (
        <>
            <Helmet htmlAttributes={{ lang: 'en-GB' }}>
                <meta http-equiv="cache-control" content="no-cache" lang="en" />
                <meta http-equiv="expires" content="0" lang="en" />
                <meta http-equiv="pragma" content="no-cache" lang="en" />
                <meta http-equiv="content-language" content="en" />
            </Helmet>
            <Header />
            <Home path="/" />
            <Footer />
        </>
    )
}

export default Layout