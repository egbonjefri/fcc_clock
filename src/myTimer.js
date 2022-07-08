import React, { useEffect, useState } from 'react';
import { useTimer } from  "reactjs-countdown-hook";
import './materialize.css'
let x = 5
let y = 1500
const audio = new Audio('https://quicksounds.com/uploads/tracks/757321949_328513806_1318628065.mp3')

export default function MyTimer() {
    const [num, setNum] = useState(y);
    const [truthy, setTruthy] = useState(false);
    const [session, setSession] = useState(true);
    const [play, setPlay] = useState([]);
        let {
        // eslint-disable-next-line
        isActive,
         // eslint-disable-next-line
        counter,
        seconds,
        minutes,
          // eslint-disable-next-line
        hours,
          // eslint-disable-next-line
        days,
        pause,
        resume,
        reset,
        } = useTimer(num, handleTimerFinish);
      
        function  handleTimerFinish() {
            
            audio.load();
            audio.play();
            if (!session) {
            setNum(y*60)
            setSession(true);
            }
            else {
            setNum(x*60)
            setSession(false)
            } 
        }


      useEffect(() => {
        // eslint-disable-next-line
        isActive = reset();
           setTimeout(() => {
               if (typeof play === 'object') {
                isActive = pause();
               }
               else {
                isActive = resume()
               }
           
           }, 1000);
      }, [session, num]);

       useEffect(()=> {
        const button = document.getElementsByClassName('timer')[0];
                     if (minutes < 1 && seconds === '00'){
                        button.classList.add('active');
                    }
                    else if (minutes < 1 && seconds > 0) {
                        button.classList.add('active2');
                    }
                    else {
                    button.classList.remove('active'); 
                    button.classList.remove('active2');
            }   
       }, [minutes,seconds]) 

        function handleIncrement() {
        const el = document.getElementsByTagName('input')[0];
        if (el.value >= 0 && el.value < 60) {
            let a = Number(el.value);
            a += 1;
            el.value = a
            x = a
        }
        }
        function handleDecrement() {    
        const el = document.getElementsByTagName('input')[0];
        if (el.value > 0 && el.value < 60) {
            let a = Number(el.value);
            a -= 1;
            el.value = a;
            x = a
        }
        }
        return (
            <div className='center body'>
                <h1 className='center'>Countdown Timer</h1>
        <div className='row'>
        
        <div className='break col s5'>
            <h4>Break Length (min):</h4>
            <div className='field'>
            <i onClick={handleIncrement} className='material-icons'>arrow_upwards</i>
            <input disabled defaultValue={x} />
            <i onClick={handleDecrement} className=' material-icons'>arrow_downwards</i>
            </div>
            </div>
            <div className='break col s6'>
                <h4>Session Length (min):</h4>
                <div className='field'>
            <i onClick={()=> {
                 
        const el = document.getElementsByTagName('input')[1];
        if (el.value >= 0 && el.value < 60) {
            let a = Number(el.value);
            a += 1;
            el.value = a;
            y = a
            setNum(el.value*60)
        }
            }} className='field material-icons'>arrow_upwards</i>
            <input className='field' disabled  defaultValue={num/60} />
            <i onClick={()=> {
                 
                 const el = document.getElementsByTagName('input')[1];
                 if (el.value > 0 && el.value < 60) {
                     let a = Number(el.value);
                     a -= 1;
                     el.value = a;
                     y = a;
                     setNum(el.value*60)
                 }
                     }}  className='field material-icons'>arrow_downwards</i>
            </div>
            </div>
            <div className='button'>
            <i className="material-icons" onClick={()=> {
                setPlay(1)
                if (!truthy) {
                    isActive = resume();
                   
                }
                else {
                    isActive = reset(); 
                    setTruthy(false);
                }
                
                
            }}>play_arrow</i>
                <i className="material-icons" onClick={()=> {
                isActive = pause(); 
                
            }}>pause</i>
            <i className="material-icons" onClick={()=> {
                setTruthy(false);
                audio.pause();
                setNum(1500);
                x = 5;
                isActive = reset(); 
                const el = document.getElementsByTagName('input')[1];
                const el2 = document.getElementsByTagName('input')[0];
                el2.value = 5;
                el.value = 25;

            }}>restore</i>
            </div>
        </div>
        <div className='clock-body col s12'>
            <div className='timer'>
               {session ? <h2 className='center'> Session:</h2> : <h2 className='center'> Break:</h2>}
                <h2 className='center'>{`${minutes} : ${seconds}`}</h2></div>
            </div>
            <p className='center'>Created by <a rel='noreferrer' href='https://egbonjefri.github.io/' target='_blank'>@egbonjefri</a> for freeCodeCamp</p>
        </div>
        );
        
       
  }