const TrendingBlogCard = ({ img, writter, title, read }) => {
  return (
    <div className="w-full md:w-max cursor-pointer">
      {/* Top */}
      <div className="flex items-center gap-2">
        {/* Image */}
        <img src={img} alt="avatar" className="w-8 h-8 rounded-full" />
        {/* Publisher */}
        <span className="text-xs font-semibold">{writter}</span>
      </div>

      {/* Middle */}
      <div className="my-1">
        <span className="text-[17px] font-semibold">{title}</span>
      </div>

      {/* Bottom */}
      <div className="flex items-center gap-1">
        {/* Stars */}
        <div className="text-freelancerOrange text-xs">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>.
        </div>

        {/* Read Counter */}
        <div>
          <span className="text-sm font-semibold">{read} min read</span>
        </div>
      </div>
    </div>
  );
};

export default TrendingBlogCard;
