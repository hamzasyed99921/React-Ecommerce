import React,{useEffect,useContext} from "react";
import { useParams,  } from "react-router-dom";
import { AppContext } from "../../context/ProductContext";
import AddToCart from "../../Helpers/AddToCart";
import FormatPrice from "../../Helpers/FormatPrice";
import MyImages from "../../Helpers/MyImages";
import PageNavigation from "../../Helpers/PageNavigation";
import Stars from "../../Helpers/Stars";

const SingleProduct = () => {
  const {id} = useParams();
  const {getSingleProduct,isSingleLoading,singleProduct } = useContext(AppContext)
  const {id: alias, name,company,price, description,stock,stars,reviews,image} = singleProduct;
  // const [color, setColor] = useState(colors[0]);

    const API = "https://api.pujakaitem.com/api/products";
    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`)
    }, []);

    if(isSingleLoading){
        return <div className="loading">Loading ...</div>
    }
    // console.log(colors[0],"hi");
  return (
    <>
        <PageNavigation title={name}/>
    <div className="singel_product">
      <div className="container ">
        <div className="row d-flex justify-content-between">
          <div className="col-md-6 col-12">
            <MyImages imgs={image}/>
          </div>
          <div className="col-md-6 col-12">
            <h4 style={{fontSize: '28px',}} className="mb-3">{name}</h4>
            <section className="d-flex align-items-center ">
              <div className="icon-style">
                <Stars stars={stars} reviews={reviews} />
              </div>
              
            </section>
            <h5 className="my-4" style={{fontSize: '16px'}}>MRP:<del><FormatPrice price={price}/></del></h5>
            <h4 className="my-4" style={{fontSize: '18px', color: '#5138ee'}}>Deal of the Day: <FormatPrice price={price}/></h4>
            <p>
              {description}
            </p>
            <div className="product-data-warranty pb-2 mt-4 d-flex justify-content-evenly align-items-center">
              <div className="product-warranty-data">
                <div className="image">
                  <img
                    src="../../assets/images/g1.svg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <p>Free Delivery</p>
              </div>
              <div className="product-warranty-data">
                <div className="image">
                  <img
                    src="../../assets/images/g5.svg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <p>30 Days Replacement</p>
              </div>
              <div className="product-warranty-data">
                <div className="image">
                  <img
                    src="../../assets/images/g1.svg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <p>Thapa Delivered </p>
              </div>
              <div className="product-warranty-data">
                <div className="image">
                  <img
                    src="../../assets/images/g2.svg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <p>2 Year Warranty </p>
              </div>
            </div>
            <div
              className="product-data-info pb-3 my-4"
            
            >
              <p>
                Available: <span> {stock > 0 ? 'In Stock' : 'Not Avaliable' }</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>
            <div className="">
            {/* <div className="colors d-flex align-items-center">
         <p>
          Color:
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}
                >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div> */}
              <AddToCart product={singleProduct}/>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SingleProduct;
