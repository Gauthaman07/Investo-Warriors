import React from 'react'
import './home.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Faq from './Faq'
import Faqcomponent from './Faq';
import Header from '../Header/Header';
import Contactform from '../Contactform/Contactform';
import Footer from '../Footer/Footer';
import Stm from '../assets/images/stm.jpg'
import FM from '../assets/images/st.jpg'
import CF from '../assets/images/cf.jpg'
import one from '../assets/images/idea.png'
import two from '../assets/images/research.png'
import three from '../assets/images/customerseg.png'
import four from '../assets/images/investment.png'



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
                        <h1>Welcome to Investo Warriors</h1>
                        <h2>Empowering your financial success</h2>
                        <h3>Start your wealth creation journey! </h3>
                    </div>
                    <img src={FM} />
                </div>
                <div id='register' class="secondcon">
                    <img src={CF} />
                    <div class="left">
                        <Contactform />
                    </div>

                </div>
                <div id='services' class="thirdcon">
                    <h2 className='thirdheader'>A vast community of users trusts us for their investment and trading needs</h2>
                    <h3 className='thirdsubheader'>Reliable, clear, and cost-effective research</h3>

                    <div class="verticalblock">

                        <div class="verticalinn">
                            <img src={one} />
                            <h3>Expert Tips & Recommendations</h3>
                            <h4>Benefit from our expertise and market insights</h4>
                        </div>
                        <div class="verticalinn">
                            <img src={two} />
                            <h3>Top-notch Research Precision</h3>
                            <h4>Consistent end-of-day performance reports</h4>
                        </div>
                        <div class="verticalinn">
                            <img src={three} />
                            <h3>Investor & Trader-Focused Research</h3>
                            <h4>Personalized services for all skill levels</h4>
                        </div>
                        <div class="verticalinn">
                            <img src={four} />
                            <h3>Your Starting Guide to Investing</h3>
                            <h4>Learn, grasp, and dive into investments</h4>
                        </div>

                    </div>
                </div>
                <div id='reviews' class="fourthcon">
                    <h2 style={{ textAlign: "center" }}>Our users enjoy trading and investing daily</h2>
                    <h4 style={{ textAlign: "center" }}>Hear what our clients have to say about us</h4>
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
                                <p>InvestoWarriors has been instrumental in helping me make informed investment decisions. Their expert advice and recommendations have significantly improved my trading outcomes.</p>
                                <h3>John D</h3>
                            </div>
                            <div class="verticalinn">
                                <p>I've been a member of InvestoWarriors for over a year now, and I can confidently say that their insights and analysis have been invaluable to my investment strategy. Highly recommended!</p>
                                <h3>Sarah M</h3>
                            </div>
                            <div class="verticalinn">
                                <p>I've tried numerous advisories, but Streetgains has been my ultimate solution. Their stock options are exactly what I needed.</p>
                                <h3>Gautham</h3>
                            </div>
                            <div class="verticalinn">
                                <p>
                                    The services are exceptional. Although no one can achieve perfect accuracy, you have helped me transform losing trades into profitable ones.</p>
                                <h3>Kannan</h3>
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