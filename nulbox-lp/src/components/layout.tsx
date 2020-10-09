import React from "react"
import '../styles/main.scss'

/*
 * This component englobes every page with the layout structure
 */

const footer = (
    <div id="footer">
        <div className="container medium">

            <header className="major last">
                <h2>Dúvidas ou comentários?</h2>
            </header>

            <p>Entre em contato com a gente pelas redes sociais</p>

            <ul className="icons">
                <li><a href="https://fb.com/Nulbox-109991807541810" target="blank" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                <li><a href="https://instagram.com/nulbox" target="blank" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
            </ul>

            <ul className="copyright">
                <li>&copy; {new Date().getFullYear()} <a href="https://nulbox.com/">nulbox.com</a>. All rights reserved.</li>
            </ul>

        </div>
    </div>
);

const Layout = ({ children }) => {
    return (
        <>
            {children}
            {footer}
        </>
    );
}

export default Layout
