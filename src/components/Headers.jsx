import React from 'react'
import Logo from './Logo'

import { FaRegEnvelope } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import Contact from './Contact';

const Headers = () => {
    return (
        <header>

            <Logo />
            <div className="contact">
                <Contact text='(888) 753-4910' comp=<FiPhoneCall style={{ color: '#48A398', fontSize: '.875rem', marginRight: '.5rem' }} /> />
                <Contact text='contact@octavio.com' comp=<FaRegEnvelope style={{ color: '#48A398', fontSize: '.875rem', marginRight: '.5rem' }} /> />
                <Contact text='Log In' />
            </div>

        </header>
    )
}

export default Headers