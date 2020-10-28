import React from 'react'
/* Components */


const Layout = props => {

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
