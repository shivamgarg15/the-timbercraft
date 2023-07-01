import React from 'react'
import Fade from 'react-reveal/Fade';
import design1 from '../Images/about-grid/aboutgrid-1.jpg'
import design2 from '../Images/about-grid/aboutgrid-2.jpg'
import design3 from '../Images/about-grid/aboutgrid-3.jpg'
import design4 from '../Images/about-grid/aboutgrid-4.jpg'
import design5 from '../Images/about-grid/aboutgrid-5.jpg'
import design6 from '../Images/about-grid/aboutgrid-6.jpg'



function About() {
  return (
    <div style={{ backgroundColor: "white" }}>
      
      <div className='py-5'>
        <Fade left delay={200} duration={1500}>
          <div className='container boxShadow body1Column' style={{ width: "90%" }}>
            <h1 className='text-center'>About Us</h1>
            <p>
              <p>Welcome to our store <b>The TimberCraft!</b> We are passionate about helping people create beautiful and functional homes with our wide range of furniture and interior designs.</p>

              We offer a wide variety of styles and designs, from classic to modern, to fit every taste and budget.

              Our team is made up of designers and furniture experts who are dedicated to helping you find the perfect pieces for your home. We believe that every space has its unique needs and character, and we strive to provide personalized recommendations and advice to help you make the most of your living space well furnished and designed.

              Our commitment to quality is also reflected in our product selection. We only work with trusted manufacturers and brands that share our values of quality, durability, and sustainability. Whether you're looking for a new sofa, bedroom furniture, or interior of your home you can rest assured that every piece has been carefully selected for its quality and craftsmanship.

             <p> Thank you for choosing our store for your pleasing needs. We are excited to be a part of your home decor journey!</p>
            </p>
          </div>
        </Fade>

        <Fade right duration={1500}>
          <div className='container boxShadow body1Column my-5' style={{ width: "90%" }} >
          
            <h1 className='text-center'>Brand Story</h1>
            <p>
             <p>In the heart of our workshop, where creativity thrives, <b>The TimberCraft</b> was born. With a passion for exceptional furniture and breathtaking interior design, we set out to redefine the way people experience their living spaces.</p>
            <p>Drawing inspiration from the beauty of nature, we meticulously handcraft each piece with love and attention to detail. From the sturdy structure to the smallest finishing touches, our artisans pour their heart and soul into every creation.</p>

            <p><b>The TimberCraft</b> is more than just furniture; it's a journey. We believe that your home should be a reflection of your unique style and personality. Our collections, carefully curated and thoughtfully designed, offer a harmonious blend of elegance, functionality, and comfort.</p>
            <p>Step into the world of <b>The TimberCraft</b>, where dreams take shape and spaces come alive. Let us help you transform your home into a sanctuary that evokes joy, relaxation, and inspiration. Discover the artistry and craftsmanship that make The TimberCraft a symbol of excellence in furniture and interior design. Welcome to <b>The TimberCraft</b>, where your vision becomes a masterpiece.</p>
            </p>
          </div>
        </Fade>


        <div className="container text-center height-inherit primary-font" style={{ width: "90%" }}>
          <div className="row justify-content-center height-inherit py-4">
            <Fade left delay={100}>
              <div className="col-10 col-md-5 col-xl-3 boxShadow my-3 mx-4 p-3" style={{ minHeight: "400px" }}>
                <h3 style={{ textDecoration: "underline" }}>DESIGN PHILOSOPHY</h3>
                <img className="gridbox-img" src={design6} alt="" />
                <p><b>The TimberCraft</b> enables us to bring the design of your dreams to life!</p>
                </div>

              <div className="col-10 col-md-5 col-xl-3 boxShadow my-3 mx-4 p-3" style={{ minHeight: "400px" }}>
                <h3 style={{ textDecoration: "underline" }}>QUALITY AND CRAFTSMANSHIP</h3>
                <img className="gridbox-img" src={design3} alt="" />
                <p>We construct with the same care and attention as if it were our own home. </p>
              </div>

              <div className="col-10 col-md-5 col-xl-3 boxShadow my-3 mx-4 p-3" style={{ minHeight: "400px" }}>
                <h3 style={{ textDecoration: "underline" }}>EXTERIOR</h3>
                <img className="gridbox-img" src={design5} alt="" />
                <p>Create an enchanting oasis with our exquisite furniture collection, transforming your space beautifully.</p>
               </div>

              <div className="col-10 col-md-5 col-xl-3 boxShadow my-3 mx-4 p-3" style={{ minHeight: "400px" }}>
                <h3 style={{ textDecoration: "underline" }}>DECORATION</h3>
                <img className="gridbox-img" src={design4} alt="" />
                <p>Enhance your space with our unmatched, stylish decor selection.</p>
                </div>

              <div className="col-10 col-md-5 col-xl-3 boxShadow my-3 mx-4 p-3" style={{ minHeight: "400px" }}>
                <h3 style={{ textDecoration: "underline" }}>INTERIOR PLANNING</h3>
                <img className="gridbox-img" src={design2} alt="" />
                <p>Unleash the potential of interior planning and exceptional furniture with <b>The TimberCraft!</b></p>
                 </div>

              <div className="col-10 col-md-5 col-xl-3 boxShadow my-3 mx-4 p-3" style={{ minHeight: "400px" }}>
                <h3 style={{ textDecoration: "underline" }}>STYLE SELECTION</h3>
                <img className="gridbox-img" src={design1} alt="" />
                <p>Craft a distinct and harmonious atmosphere in your home with our exceptional furniture choices.</p>
                </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About