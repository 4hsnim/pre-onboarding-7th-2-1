import React, { useState, useEffect } from "react";
import carListService from "../../utils/services/carList.service";

import CarItem from "../molecules/CarItem";
import Template from "../templates/Template";

const MainPage = () => {
  const [carList, setCarList] = useState([]);
  const getCarsList = async () => {
    try {
      const response = await carListService.getCarList();
      console.log(response.data.payload);
      setCarList(response.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCarsList();
  }, []);

  return (
    <>
      <Template>
        {carList.map(
          ({
            id,
            amount,
            attribute: { brand, name, segment, fuelType, imageUrl },
          }) => {
            return (
              <CarItem
                key={id}
                brand={brand}
                name={name}
                segment={segment}
                fuelType={fuelType}
                amount={amount}
                imageUrl={imageUrl}
              />
            );
          }
        )}
      </Template>
    </>
  );
};

export default MainPage;
