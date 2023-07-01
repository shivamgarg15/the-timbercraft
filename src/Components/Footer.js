import React from 'react'
import { MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='Fbg1'>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-11 col-md-5 col-lg-3 mx-4 my-3">
                        <div className='fHead'>Contact Us</div>
                        <div className='fColumn'>
                            <div className='my-2'>
                                Address: SHAHDARA, DELHI
                            </div>
                            <div className='my-2'>
                                Email: djenterprises@gmail.com
                            </div>
                            <div className='my-2'>
                                Phone: +91 99713 54050
                            </div>
                        </div>
                    </div>
                    <div className="col-11 col-md-5 col-lg-3 mx-4 my-3">
                        <div className='fHead'>The TimberCraft</div>
                        <div className="fColumn">
                            <div>Step inside the doors of The TimberCraft, you'll encounter a mesmerizing exhibition of furniture and interior concepts, seamlessly combining  the finest materials, awaiting your admiration.</div>
                        </div>
                    </div>
                    <div className="col-11 col-md-11 col-lg-3 mx-4 my-3">
                        <div className='fHead'>Keep in Touch
                        </div>
                        <div className="fColumn">
                            <div>
                                <Link to='/' className='me-4 text-reset'>
                                    <MDBIcon className='facebook' size='2x' fab icon="facebook-f" />
                                </Link>
                                <Link to='/' className='me-4 text-reset'>
                                    <MDBIcon className='twitter' size='2x' fab icon="twitter" />
                                </Link>
                                <Link to='/' className='me-4 text-reset'>
                                    <MDBIcon className='insta' size='2x' fab icon="instagram" />
                                </Link>
                                <Link to='/' className='text-reset'>
                                    <MDBIcon className='linkedin' size='2x' fab icon="linkedin-in" />
                                </Link>
                            </div>
                        </div>
                    </div>
                <div className='text-center my-2'>Copyright © 2023 The TimberCraft Co. All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer