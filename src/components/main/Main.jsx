import React, { useState } from 'react';
import ButtonSection from '../botton-section/ButtonSection';
import TopSection from '../top-section/TopSection';
import './style.css';

let counter;
const Main = () => {
    let [breakSession, setBreakSession] = useState(5);
    let [time, setTime] = useState({ seconde: 0, minute: 25 });

    let updatedSeconde = time.seconde, updatedMinute = time.minute;

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
                setTime({ ...time, minute: time.minute + 1 })
                break;
            case 'decrease':
                if (time.minute > 0) {
                    setTime({ ...time, minute: time.minute - 1 })
                }
                break;
            default:
                alert('unexpected case');
                break;
        }
    }

    const run = () => {
        if (updatedSeconde <= 0) {
            updatedMinute--;
            updatedSeconde = 59;
        }
        updatedSeconde--;
        return setTime({ seconde: updatedSeconde, minute: updatedMinute });
    }

    const play = () => {
        run();
        if (updatedMinute >= 0) {
            counter = setInterval(run, 1000);
        }
        else {
            clearInterval(counter);
            setTime({...time, minute: 0, seconde: 0})
        }
    };

    const pause = () => {
        clearInterval(counter);
    }

    const reset = () => {
        clearInterval(counter);
        setTime({ ...time, seconde: 0, minute: 25 });
    }


    return (
        <>
            <TopSection minute={time.minute} breakSession={breakSession} handleSession={handleSession} handleBreak={handleBreak} />
            <div className='session-counter'>
                <p>
                    Session &nbsp;&nbsp;
                    <span>{(time.minute >= 10) ? time.minute : "0" + time.minute}</span>&nbsp;:&nbsp;
                    <span>{(time.seconde >= 10) ? time.seconde : "0" + time.seconde}</span>&nbsp;&nbsp;
                </p>
            </div>
            <ButtonSection play={play} start={play} pause={pause} reset={reset} />
        </>
    )
}

export default Main