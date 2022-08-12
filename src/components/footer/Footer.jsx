import React from 'react';

const Footer = () => {
    return (
        <div style={{ position: 'absolute', bottom: 0, right: 0, left: 0, padding: 5, background: 'black' }}>
            <div style={{ textAlign: 'center', fontSize: 8 }}>
                <p>Designed and Coded by</p>
                <p style={{ color: 'lightblue' }}>Alexis Senga</p>
            </div>
        </div>
    )
}

export default Footer;