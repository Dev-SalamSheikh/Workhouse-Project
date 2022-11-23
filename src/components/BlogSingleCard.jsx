const BlogSingleCard = ({ img, title, author }) => {
  return (
    <div className="mb-4 md:mb-0 w-full border border-slate-400 px-2 py-2 md:pt-5 md:pb-5">
      <div className="flex gap-2 md:gap-10 flex-col md:flex-row">
        {/* Left */}
        <div>
          <img src={img} alt="" className="rounded-xl brightness-90 w-full" />
        </div>

        {/* Right */}
        <div className="w-full flex flex-col justify-around">
          {/* Heading */}
          <div>
            <h1 className="text-lg md:text-2xl font-semibold">{title}</h1>
          </div>

          {/* Service Provider */}
          <div className="my-1">
            <h5 className="font-semibold md:text-lg text-sm">Name: {author}</h5>
          </div>

          {/* Ratings */}
          <div className="flex items-center flex-wrap justify-between gap-1">
            <h5 className="font-semibold md:text-lg text-sm">Year: 2022</h5>
            <div className="text-sm text-buttonRed flex gap-1">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSingleCard;
