const CareerCard = ({ img, title }) => {
  return (
    <div className="w-full bg-white rounded-xl overflow-hidden">
      <h1 className="text-center text-xl lg:text-2xl font-semibold py-4 px-2">
        {title}
      </h1>
      <img src={img} alt="card_img" className="w-full h-full brightness-75" />
    </div>
  );
};

export default CareerCard;
