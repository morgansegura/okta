import React from 'react'
/* Components */
import GlobalStyles from '../../styles/global'
const Layout = ({children}) => {

    return (
        <div>
            <header className="">
                Header and Navigation will go here
            </header>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout
