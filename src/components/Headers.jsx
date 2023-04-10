import React from 'react'
import Logo from './Logo'
import Buttons from './Buttons'

const Headers = () => {
    return (
        <header>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Logo />
                <nav>
                    <a href="#">About</a>
                    <a href="#">Lessons</a>
                    <a href="#">Blog</a>
                    <a href="#">Resources</a>
                </nav>
            </div>
            <Buttons text='Get Started' />
        </header>
    )
}

export default Headers