import React from 'react';
import './style.css';
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';

const TopSection = (props) => { 
    return (
        <>
            <div>
                <h3>25 + 5 Clock</h3>
            </div>
            <div className='length-displayer'>
                <div className='break-length'>
                    <p>Break Length</p>
                    <p>
                        <a href='#down' className='arrow' onClick={() => props.handleBreak('decrease')}><FaArrowDown /></a>
                        &nbsp; {props.breakSession} &nbsp;
                        <a href='#up' className='arrow' onClick={() => props.handleBreak('increase')}><FaArrowUp /></a>
                    </p>
                </div>
                <div className='session-length'>
                    <p>Session Length</p>
                    <p>
                        <a href='#down' className='arrow' onClick={() => props.handleSession('decrease')}><FaArrowDown /></a>
                        &nbsp; {props.session} &nbsp;
                        <a href='#up' className='arrow' onClick={() => props.handleSession('increase')}><FaArrowUp /></a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default TopSection