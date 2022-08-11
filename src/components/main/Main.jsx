import React, { useState } from 'react';
import BottomSection from '../bottom-section/BottomSection';
import TopSection from '../top-section/TopSection';
import './style.css';

const Main = () => {
    const [breakSession, setBreakSession] = useState(5);
    const [session, setSession] = useState(10);

    const handleBreak = (action) => {
        switch (action) {
            case 'increase':
                setBreakSession(breakSession + 1)
                break;
            case 'decrease':
                if (breakSession > 0) {
                    setBreakSession(breakSession - 1)
                }
                break;
            default:
                alert('unexpected case');
                break;
        }
    }

    const handleSession = (action) => {
        switch (action) {
            case 'increase':
                setSession(session + 1)
                break;
            case 'decrease':
                if (session > 0) {
                    setSession(session - 1)
                }
                break;
            default:
                alert('unexpected case');
                break;
        }
    }


    return (
        <>
            <TopSection session={session} breakSession={breakSession} handleSession={handleSession} handleBreak={handleBreak} />
            <div className='session-counter'>
                <p>
                    Session {session} :00
                </p>
            </div>
            <BottomSection />
        </>
    )
}

export default Main