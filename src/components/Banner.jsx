import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { API_BASE_URL, fetchDataFromApi } from "../api/api";

const Banner = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetchDataFromApi("/api/banners?populate=*").then((res) => {
      console.log(res);
      setData(res.data);
    });
  };

  return (
    <div>
      <Carousel>
        {data.map((items) => (
            <Carousel.Item>
              <img src={API_BASE_URL+items.attributes.image.data[0].attributes.url} alt="" className="banner-img" />
              <Carousel.Caption>
                <h3>{items.attributes.title}</h3>
                <p>
                 {items.attributes.title}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
