import React, {Fragment} from 'react';
import { images } from '../Constant';


const Count = ({timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return(


   <Fragment>

    <section className='timer-container'>
    
    <img src={images.typo} alt="eid" />

        <section className='timer'>
        
            <div className='clock'>
                  
                <section>
                  <p>{timerDays}</p>
                  <small>Days</small>
                </section>{" "}
                <span>:</span>

                <section>
                  <p>{timerHours}</p>
                  <small>Hours</small>
                </section>{" "}
                <span>:</span>
                <section>
                  <p>{timerMinutes}</p>
                  <small>Minutes</small>
                </section>{" "}
                <span>:</span>
                <section>
                  <p>{timerSeconds}</p>
                  <small>Seconds</small>
                </section>{" "}



            </div>
        </section>

    </section>


    <ul class="background">
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
</ul>




  </Fragment>
    );
}
 Count.defaultProps ={
   timerDays : 10,
   timerHours: 10,
   timerMinutes: 10,
   timerSeconds: 10
 }
export default Count