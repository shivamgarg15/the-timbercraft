import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import cross from '../Images/cross.svg'
import logo from '../Images/favicon3.0.png'
import scrollTop from '../Images/scrollTop.png'

function Navbar(props) {

    window.addEventListener('scroll', (e) => {
        let scrollTopButton = document.querySelector('.scrollTop');
        if (window.scrollY === 0) {
            scrollTopButton.style.animation = 'hide 0.5s forwards ease-in-out';
        }
        else {
            scrollTopButton.style.animation = 'show 0.5s forwards ease-in-out';
        }
    })

    const [menuVisible, setMenuVisible] = useState(false);

    const slidingMenu = () => {
        console.log(location)
        let menu = document.querySelector('.slidingMenu');
        if (menuVisible === false) {
            menu.style.transform = `translatex(-250px)`;
            setMenuVisible(true);
        }
        else {
            menu.style.transform = `translatex(250px)`;
            setMenuVisible(false);
        }
    }


    const location = useLocation().pathname;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [location]);

    return (
        <>
            <nav className="navbar navbar-expand-lg stickyNav custom-navbar" data-bs-theme="dark">
                <div className="container-fluid custom-Fluid">
                    <Link className="navbar-brand custom-Brand" to="/" style={{ textShadow: "3px 3px 2px black", fontSize: "25px", zIndex: "1" }}>
                        <img src={logo} alt="" width={120} />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item hoverNavbar">
                                <Link className="nav-link custom-Link" aria-current="page" to="/home" style={{ color: location === '/home' || location === '/' ? "#21ff01" : "" }}>Home</Link>
                            </li>
                            <li className="nav-item hoverNavbar">
                                <Link className="nav-link custom-Link" to="/about" style={{ color: location === '/about' ? "#21ff01" : "" }}>About</Link>
                            </li>
                            <li className="nav-item hoverNavbar">
                                <Link className="nav-link custom-Link" to="/services" style={{ color: location === '/services' ? "#21ff01" : "" }}>Services</Link>
                            </li>
                            <li className="nav-item hoverNavbar">
                                <Link className="nav-link custom-Link" to="/contact" style={{ color: location === '/contact' ? "#21ff01" : "" }}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-100 d-flex justify-content-end' style={{ position: "absolute", padding: "0px 10px" }}>
                    <button className="navbar-toggler" type="button" onClick={slidingMenu}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='slidingMenu text-center boxShadow' style={{ borderRadius: "0px" }}>
                        <button className="navbar-toggler" type="button" onClick={slidingMenu} style={{ position: "relative", border: "none", right: "-40%", top: "5px", filter: "invert(1)", zIndex: "2" }}>
                            {/* <span className="navbar-toggler-icon"></span> */}
                            <img src={cross} alt="" height={20} />
                        </button>
                        <Link className="navbar-brand custom-Brand primary-font d-block m-0 py-2" to="/" onClick={() => { slidingMenu() }} style={{ position: "relative", top: "-10px", width: "fit-content", left: "31%" }}> <img src={logo} alt="" width={100} /></Link>
                        <hr className="border border-white border-1 opacity-100 m-0" />
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-3">
                            <li className="nav-item hoverNavbar">
                                <Link className="nav-link custom-Link" aria-current="page" to="/home" style={{ color: location === '/home' || location === '/' ? "#21ff01" : "" }} onClick={() => { slidingMenu() }}>Home</Link>
                            </li>
                            <li className="nav-item hoverNavbar">
                                <Link className="nav-link custom-Link" to="/about" style={{ color: location === '/about' ? "#21ff01" : "" }} onClick={() => { slidingMenu() }}>About</Link>
                            </li>
                            <li className="nav-item hoverNavbar">
                                <Link className="nav-link custom-Link" to="/services" style={{ color: location === '/services' ? "#21ff01" : "" }} onClick={() => { slidingMenu() }}>Services</Link>
                            </li>
                            <li className="nav-item hoverNavbar">
                                <Link className="nav-link custom-Link" to="/contact" style={{ color: location === '/contact' ? "#21ff01" : "" }} onClick={() => { slidingMenu() }}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show w-100`} role="alert" style={{position: "fixed", zIndex: "2"}}>
                <strong>{props.alert.message}</strong>
            </div>}
            <img src={scrollTop} alt='' className='scrollTop' onClick={props.scrollToTop}></img>
        </>
    )
}

export default Navbar