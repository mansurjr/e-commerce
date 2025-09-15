import { memo, type FC } from "react";
import type { IProduct } from "../../types";
import RightArrow from "../RightArrow";
import Star from "../Star";
import UnderlineLink from "../Underline";
import { FaRegHeart } from "react-icons/fa6";

interface IProps {
  data?: IProduct[];
}

const ProductView: FC<IProps> = ({ data }) => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between items-end mb-8">
          <h3 className="font-bold text-3xl">New Arrivals</h3>
          <UnderlineLink>
            <div className="flex items-center gap-2 cursor-pointer">
              <span>More Products</span>
              <RightArrow />
            </div>
          </UnderlineLink>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              <div className="relative w-full bg-[#F3F5F7] group overflow-hidden py-15">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />

                <button
                  className="absolute bottom-4 left-1/2 -translate-x-1/2
             w-[80%] max-w-[230px] py-3 
             bg-[#141718] text-white rounded-xl
             opacity-0 group-hover:opacity-100 
             translate-y-4 group-hover:translate-y-0
             transition-all duration-300 hover:cursor-pointer">
                  Add to cart
                </button>

                <div className="absolute top-4 left-4 flex flex-col items-center gap-2">
                  <span className="bg-white  font-semibold px-5 py-1">NEW</span>
                  {item.discountPercentage && (
                    <span className="bg-[#38CB89] text-white  font-semibold px-5 py-1 rounded">
                      -{item.discountPercentage.toFixed(0)}%
                    </span>
                  )}
                </div>

                <button
                  className="absolute top-2 right-2 bg-white p-2 rounded-full shadow text-gray-600 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaRegHeart size={14} />
                </button>
              </div>

              <div className="flex flex-col gap-1 px-1">
                <Star rating={item.rating ?? 0} />
                <span className="font-medium text-sm line-clamp-1">
                  {item.title}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">
                    $
                    {(
                      item.price! -
                      (item.price! * (item.discountPercentage ?? 0)) / 100
                    ).toFixed(2)}
                  </span>
                  <span className="text-lg text-[#6C7275] line-through">
                    ${item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-[3px] bg-[#343839] rounded my-15" />
      </div>
    </section>
  );
};

export default memo(ProductView);
