import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Count from './Count_Down/Count';

const App = () => {

  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  

let interval;

const startTimer = () => {
  const countDownDate = new Date("July 9,2022").getTime();
    
    interval =setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor((distance / (24*60*60*1000)));
      const hours = Math.floor((distance % (24*60*60*1000))/(1000*60*60));
      const minutes = Math.floor((distance % (60*60*1000))/(60*1000));
      const seconds = Math.floor((distance % (60*1000))/1000);
      
      if(distance < 0 ){
        // stop Timer

        clearInterval(interval.current);

      }
      else{
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    })



}
useEffect(() =>{
  startTimer();
})

  return (
    <div className='app'>
   
      
      {/* <Header />
      <Content />
      <Footer /> */}
      <Header />
      <Count 
      timerDays={timerDays} 
      timerHours={timerHours} 
      timerMinutes={timerMinutes} 
      timerSeconds={timerSeconds} 
      />
     <Footer /> 
    </div>
  )
}

export default App