import React from 'react'
import './footer.css'

function Footer() {
    return (
        <>
            <div className="footer">
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
            </div>
        </>
    )
}

export default Footer