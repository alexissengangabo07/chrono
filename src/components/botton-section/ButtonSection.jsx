import React from 'react';
import './style.css';
import { FaPlay } from 'react-icons/fa';
import { ImPause2 } from 'react-icons/im';
import { BiReset } from 'react-icons/bi';

const ButtonSection = (props) => {
    return (
        <div className='bottom-section'>
            <a href='#play' className='control-btn btn-green' onClick={props.start}><FaPlay /></a>
            <a href='#pause' className='control-btn btn-blue' onClick={props.pause}><ImPause2 /></a>
            <a href='#reset' className='control-btn btn-red' onClick={props.reset}><BiReset /></a>
        </div>
    )
}

export default ButtonSection;
