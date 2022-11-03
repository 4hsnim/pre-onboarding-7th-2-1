import Title3 from "../atoms/Title3";
import Body2 from "../atoms/Body2";
import CarItemImage from "../atoms/CarItemImage";
import CarItemWrapper from "../atoms/CarItemWrapper";

const CarItem = ({ brand, name, segment, fuelType, amount, imageUrl }) => {
  console.log(imageUrl);
  return (
    <>
      <CarItemWrapper>
        <div>
          <Title3>{brand}</Title3>
          <Title3>{name}</Title3>
          <Body2>
            {segment} / {fuelType}
          </Body2>

          <Body2>월 {amount} 원 부터</Body2>
        </div>
        <CarItemImage src={imageUrl} />
      </CarItemWrapper>
    </>
  );
};

export default CarItem;
