import React,{useState} from "react";
const MyImages = ({ imgs = [{url: ''}] }) => {
    const [mainImage,setMainImage] = useState(imgs[0]);
  return (
    <>
      <div className="product_images py-5">
        <section className="sc-crXcEl gGOClK d-flex justify-content-evenly align-items-center ">
          <div className="grid">
            {imgs.map((val,index) => {
                return(
                    <figure  key={index}>
                    <img
                      src={val.url}
                      alt={val.filename}
                      className="box-image--style"
                      onClick={() => setMainImage(val)}
                      style={{cursor: 'pointer'}}
                     
                    />
                  </figure>
                )
            })}
           
          </div>
          <div className="main-screen">
            <img
              src={mainImage.url}
              alt={mainImage.filename}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default MyImages;
