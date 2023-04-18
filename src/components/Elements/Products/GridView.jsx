import React from 'react' 
import Product from '../../Product';

const GridView = ({filter_products}) => {
  return (
    <>
        <div className="row">
      {filter_products.map((val,index) => {{}
            return (
              
                <div className="col-md-4"  key={index} >
                  <div className="card my-2">
                   <Product val={val}/>
                  </div>
                </div>

            );
          })}
      </div>
    </>
  )
}

export default GridView