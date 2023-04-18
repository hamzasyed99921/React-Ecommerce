import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { FilterContext } from '../../../context/FilterContext';
import FormatPrice from '../../../Helpers/FormatPrice';

const ListView = () => {
  const { filter_products } = useContext(FilterContext);
  return (
    <div className='list_view'>
      {filter_products.map((val) => {
        return (
          <div className="row my-3 list_border">
          <div className="col-md-6 col-12 d-flex justify-content-center">
            <div className="image ">
              <img src={val.image} className='img-fluid' alt="" />
            </div>
          </div>
          <div className="col-md-6 col-12">
           <div className='card_right'>
           <p className='list_name'>{val.name}</p>
           <p className='list_price'>{<FormatPrice price={val.price}/>}</p>
           <p className='list_desc'>{val.description.slice(0, 170)}...</p>
           <Link className='list_btn' to={`/singleproduct/${val.id}`}>Read More</Link>
           </div>
          </div>
        </div>
        )
      })}
        
    </div>
  )
}

export default ListView