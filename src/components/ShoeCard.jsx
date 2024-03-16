const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handelClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? "border-color-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handelClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:mp-4">
        <img
          src={imgURL.thumbnail}
          alt="Shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
