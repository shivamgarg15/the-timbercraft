import React, { useEffect } from 'react'

function BgBanner(props) {

  const changeText = (element)=>{
    let a = document.querySelector('.nameAnimation div');
    // console.log(element.elapsedTime);
    if(element.elapsedTime%10===0)
    {
        a.innerText = props.txt[0];
      }
      else if(element.elapsedTime%5===0)
      {
        a.innerText = props.txt[1];
      }
  }

  
  useEffect(() => {
    let x = setTimeout(() => {
      // let control =  document.getElementById('next');
      let control = document.querySelectorAll('.carousel-control-next');
      try{
      control.forEach(element => {
        element.click();
      });
      // control.click();
      }
      catch(e){
        console.log(e);
      }
    }, 6000);
    return () => {
      clearTimeout(x);
    }
  }, [])
  

  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" pause="false">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="4900">
          <img src={props.img[0]} className="d-block w-100 brightness-mid" alt="..." style={{height: "calc(100vh - 110px)", objectFit: "cover"}}/>
        </div>
        <div className="carousel-item" data-bs-interval="4900">
          <img src={props.img[1]} className="d-block w-100 brightness-mid" alt="..." style={{height: "calc(100vh - 110px)", objectFit: "cover"}}/>
        </div>
        <div className="carousel-item" data-bs-interval="4900">
          <img src={props.img[2]} className="d-block w-100 brightness-mid" alt="..." style={{height: "calc(100vh - 110px)", objectFit: "cover"}}/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" id='next' type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
        <span className="visually-hidden">Next</span>
      </button>
      <div className="nameAnimation" onAnimationIteration={(element)=>{changeText(element)}}> <div>{props.txt[0]}</div>
      {/* <div>Design your dreamfuu7</div> */}
      </div>
    </div>
  )
}

export default BgBanner