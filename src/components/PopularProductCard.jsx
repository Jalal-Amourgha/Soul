const PopularProductCard = ({ imgURL, rate, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full  max-sm:w-full cursor-pointer">
      <img src={imgURL} className="w-[282px] h-[282px]" alt="product image" />
      <div className="mt-8 flex justify-start items-center gap-2.5">
        <i className="fa-solid fa-star text-color-red text-xl"></i>
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          ({rate})
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-color-red leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
