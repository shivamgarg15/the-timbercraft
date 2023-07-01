import React from 'react'
import CountUp from 'react-countup';


function CounterUp() {
    return (
        <div className='container d-flex' style={{justifyContent: "space-evenly", flexWrap: "wrap", minHeight: "200px", alignItems: "center"}}>
            <div className='countUp m-4'>
                <CountUp enableScrollSpy={true} start={0} end={200} duration={2.75} separator="," useIndianSeparators={true} suffix='+' useEasing={true}/>
                <div>Designs</div>
            </div>
            <div className='countUp m-4'>
                <CountUp enableScrollSpy={true} start={0} end={500} duration={2.75} separator="," useIndianSeparators={true} useEasing={true}/>
                <div>Clients</div>
            </div>
            <div className='countUp m-4'>
                <CountUp enableScrollSpy={true} start={0} end={100} duration={2.75} separator="," useIndianSeparators={true} suffix='+' useEasing={true}/>
                <div>Deliveries</div>
            </div>
            <div className='countUp m-4'>
                <CountUp enableScrollSpy={true} start={0} end={5} duration={2.75} separator="," useIndianSeparators={true} useEasing={true}/>
                <div>Awards</div>
            </div>
        </div>
    )
}

export default CounterUp