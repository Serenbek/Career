import React from 'react';
import scss from './Footer.module.scss'
import logo from '../../assets/images/footerImg/Logo.svg'
import email from '../../assets/images/footerImg/Message.svg'
import map from '../../assets/images/footerImg/Map marker.svg'
import inn from '../../assets/images/footerImg/in.svg'
import inst from '../../assets/images/footerImg/inst.svg'
import fc from '../../assets/images/footerImg/fc.svg'
import twitter from '../../assets/images/footerImg/twitter.svg'
import arrow from '../../assets/images/footerImg/arrow.svg'


function Footer(props) {
    return (
        <div className='container'>
            <div className={scss.wrapper}>
                <img src={logo} alt="" className={scss.wrapper__logo} />
                <div className={scss.top}>
                    <p className={scss.top__p}>The starting point for your next project 
                        based on easy-to-customize Material-UI 
                        © helps you build apps faster and better.</p>
                        <div className={scss.icons}>
                        <img src={fc} alt="icon" />
                        <img src={inst} alt="icon" />
                        <img src={inn} alt="icon" />
                        <img src={twitter} alt="icon" />
                    </div>

                    <div className={scss.top__center}>
                        <div>
                            <img src={email} alt="" />
                            <p>info@example.com</p>
                        </div>
                        <div>
                            <img src={map} alt="" />
                            <p>655 Schaefer Dale</p>
                        </div>
                    </div>
                    <div className={scss.input}>
                        <input type="text" placeholder='Email address' />
                        <button><img src={arrow} alt="" /></button>
                    </div>
                    <div className={scss.inputP}>
                        <input type="text" placeholder="Email address" />
                        <button>
                            <img src={arrow} alt="" />
                        </button>
                    </div>

                </div>
                <div className={scss.icons}>
                    <img src={fc} alt="icon" />
                    <img src={inst} alt="icon" />
                    <img src={inn} alt="icon" />
                    <img src={twitter} alt="icon" />
                </div>
                <div className={scss.bottom}>
                    <p>© 2021. All rights reserved</p>
                    <div>
                        <p>Help Center</p>
                        <p>Terms of Service</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;