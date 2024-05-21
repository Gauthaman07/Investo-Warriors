import React from 'react'
import './footer.css'

function Footer() {

    const email = "contact@investowarriors.com"

    const handleEmailClick = () => {
        window.location.href = `mailto${email}`
    }

    return (
        <>
            {/* <div className="footer">
                <div className="footercolumn">
                    <div className="left">
                        <p>INVESTO WARRIORS<br></br>
                        <br></br>
                            No.2, 4th Main, Chandra Layout<br></br>
                            Banglore-560040<br></br>
                            research@streetgains.in</p>
                    </div>
                    <div className="center">
                        <h3>Company</h3>
                        <ul>
                            <li><a>Services</a></li>
                            <li><a>Perfromace</a></li>
                            <li><a>Register</a></li>
                            <li><a>Testimonials</a></li></ul>
                    </div>
                    <section class="social">
                        <div class="social-container">

                            <a href="#" class="fa fa-facebook"></a>
                            <a href="#" class="fa fa-twitter"></a>
                            <a href="#" class="fa fa-instagram"></a>
                            <a href="#" class="fa fa-youtube"></a>
                        </div>
                        <p class="copyright">© Investo Warriors All Rights Reserved</p>
                    </section >
                </div >
            </div> */}
            <div className='footer'>
                <div className='footersec'>
                    <div >
                        <h2>INVESTO WARRIORS </h2>
                        <p>No.2, 4th Main, Chandra Layout<br></br>
                            Banglore-560040</p>
                    </div>
                    <div >
                        {/* <h2>INVESTO WARRIORS </h2> */}
                        <p>Services</p>
                        <p>Register</p>
                        <p>Testimonials</p>
                        <p>Faqs</p>
                    </div>
                    <div >
                        {/* <h2>COMPANY </h2> */}
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                        <p onClick={handleEmailClick}>contact@investowarriors.com</p>
                    </div>
                    <div >
                        <div class="social-container">
                            <a href="#" class="fa fa-facebook"></a>
                            <a href="#" class="fa fa-twitter"></a>
                            <a href="#" class="fa fa-instagram"></a>
                            <a href="#" class="fa fa-youtube"></a>
                        </div>
                    </div>
                </div >
                <hr style={{ color: "white" }}></hr>
                <p style={{ textAlign: "center", color: "white", marginBottom: "0", paddingTop: "20px" }}>Investo Warriors 2024. All Rights Reserved.</p>
            </div>

        </>
    )
}

export default Footer