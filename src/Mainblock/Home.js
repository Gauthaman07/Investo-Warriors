import React from 'react'
import './home.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Faq from './Faq'
import Faqcomponent from './Faq';
import Header from '../Header/Header';
import Contactform from '../Contactform/Contactform';
import Footer from '../Footer/Footer';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function Home() {
    return (
        <>

            <Header />
            <div>
                <div class="firstcon">
                    <div class="left">
                        <h1>Your Trusted Research Analyst</h1>
                        <h2>Pay for Profit Calls</h2>
                        <h3>Start your wealth creation journey! Know More</h3>
                    </div>
                    <img src="https://streetgains.in/assets/images/quick-investing.svg" />
                </div>
                <div id='register' class="firstcon">
                    <img src="https://streetgains.in/assets/images/quick-investing.svg" />
                    <div class="left">
                        <Contactform />
                    </div>

                </div>
                <div id='services' class="thirdcon">
                    <h2 className='thirdheader'>315500+ users trust us for their Investment and Trading</h2>
                    <h3 className='thirdsubheader'>Honest, transparent and affordable research</h3>

                    <div class="verticalblock">

                        <div class="verticalinn">
                            <img src="https://streetgains.in/assets/images/quick-investing.svg" />
                            <h3>SEBI Registered Research Analyst</h3>
                            <h4>Research from Qualified professionals</h4>
                        </div>
                        <div class="verticalinn">
                            <img src="https://streetgains.in/assets/images/quick-investing.svg" />
                            <h3>SEBI Registered Research Analyst</h3>
                            <h4>Research from Qualified professionals</h4>
                        </div>
                        <div class="verticalinn">
                            <img src="https://streetgains.in/assets/images/quick-investing.svg" />
                            <h3>SEBI Registered Research Analyst</h3>
                            <h4>Research from Qualified professionals</h4>
                        </div>
                        <div class="verticalinn">
                            <img src="https://streetgains.in/assets/images/quick-investing.svg" />
                            <h3>SEBI Registered Research Analyst</h3>
                            <h4>Research from Qualified professionals</h4>
                        </div>

                    </div>
                </div>
                <div id='reviews' class="fourthcon">
                    <h2 style={{ textAlign: "center" }}>Our users love trading and investment every single day.</h2>
                    <h4 style={{ textAlign: "center" }}>We bring transaparancy in research, along with exceptional customer support
                        that our customers admire</h4>
                    <div class="carouselblock">
                        <Carousel
                            swipeable={true}
                            draggable={false}
                            customTransition="transform 300ms ease-in-out"
                            transitionDuration={10000}
                            partialVisible={false}
                            autoPlay
                            autoPlaySpeed={1000}
                            showDots={true}
                            arrows={false}
                            infinite={true}
                            responsive={responsive}
                        >
                            <div class="verticalinn">
                                <p>You guys really work hard to support Indian retail traders, we are fortunate to have your support in my trading.</p>
                                <h3>Gautham</h3>
                            </div>
                            <div class="verticalinn">
                                <p>You guys really work hard to support Indian retail traders, we are fortunate to have your support in my trading.</p>
                                <h3>Gautham</h3>
                            </div>
                            <div class="verticalinn">
                                <p>You guys really work hard to support Indian retail traders, we are fortunate to have your support in my trading.</p>
                                <h3>Gautham</h3>
                            </div>
                            <div class="verticalinn">
                                <p>You guys really work hard to support Indian retail traders, we are fortunate to have your support in my trading.</p>
                                <h3>Gautham</h3>
                            </div>
                        </Carousel>
                    </div>

                </div>
                <div id='faqs' className="faqs">
                    <Faqcomponent />
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Home