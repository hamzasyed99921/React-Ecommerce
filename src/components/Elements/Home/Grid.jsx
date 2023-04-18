import React from 'react'

const Grid = () => {
  return (
    <div className='grid_sec'>
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-12">
                    <div className='left_card'>
                    <div className="image">
                        <img src="../../assets/images/g1.svg" className='img-fluid' alt=""/>
                    </div>
                    <h4>Super Fast and Free Delivery</h4>
                    </div>
                </div>
               <div className="col-md-4 d-flex flex-column justify-content-between">
               <div className="col-md-4 col-12 card_color">
                    <div className='mid_card'>
                    <div className="image">
                        <img src="../../assets/images/g2.svg" className='img-fluid' alt=""/>
                    </div>
                    <h4>Non-contact Shipping</h4>
                    </div>
                </div>
                <div className="col-md-4 col-12 card_color">
                    <div className='mid_card'>
                    <div className="image">
                        <img src="../../assets/images/g3.svg" className='img-fluid' alt=""/>
                    </div>
                    <h4>Money-back Guaranteed</h4>
                    </div>
                </div>
               </div>
               <div className="col-md-4 col-12">
                    <div className='left_card'>
                    <div className="image">
                        <img src="../../assets/images/g4.svg" className='img-fluid' alt=""/>
                    </div>
                    <h4>Super Secure Payment System</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Grid