import React from 'react'
import {Link} from 'gatsby'
/* Components */
import GlobalStyles from '../../styles/global'
const Layout = ({children, className}) => {

    return (
        <div className={className}>
            <GlobalStyles />
            <header className="header container">
                <Link className="logo" to={'/'}>oktane<span>20</span></Link>
                <nav className="header-nav">
                    <Link to={'/sponsors'}>Sponsors</Link>
                    <Link to={'/posts'}>Posts</Link>
                    <Link to={'/contact'}>Contact</Link>
                </nav>
            </header>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout
