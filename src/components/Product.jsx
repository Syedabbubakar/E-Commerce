import React from "react";
import { API_BASE_URL } from "../api/api";
import { useNavigate } from "react-router-dom";

const Product = ({data, id}) => {
  console.log(data);
  // console.log(id);
  const navigate = useNavigate()
  return (
    <div className="col-md-3">
      <div className="pro-card p-3" onClick={()=>navigate(`/singleProduct/${id}`)}>
        <div className="img">
          <img src={API_BASE_URL+data.attributes.image.data[0].attributes.url} alt="" />
        </div>
        <div className="">
          <p>
          {data?.attributes?.title}
          </p>
          <h6>
            ₹ <span className="ms-2">{data?.attributes?.price}</span>{" "}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Product;
