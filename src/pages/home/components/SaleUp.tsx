import { memo } from "react";
import image from "../../../assets/Image Placeholder.png";
import RightArrow from "../../../components/RightArrow";
import UnderlineLink from "../../../components/Underline";

const SaleUp = () => {
  return (
    <section className="bg-py">
      <div className="flex flex-col lg:flex-row gap-18">
        <div className="w-full lg:w-1/2">
          <img
            src={image}
            alt="imgwe"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-4 py-35 self-center text-left">
          <div className="flex flex-col gap-4">
            <p className="font-bold text-[16px] leading-[16px] uppercase text-[#377DFF]">
              SALE UP TO 35% OFF
            </p>
            <h4 className="font-medium text-[40px] leading-[44px] tracking-[-0.4px] max-w-113">
              HUNDREDS of <br />
              New lower prices!
            </h4>
            <p className="max-w-113 font-normal text-xl leading-8">
              It’s more affordable than ever to give every room in your home a
              stylish makeover
            </p>
          </div>
          <UnderlineLink>
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-[16px] leading-[28px] tracking-[-0.4px]">
                Shop Now
              </span>
              <RightArrow />
            </div>
          </UnderlineLink>
        </div>
      </div>
    </section>
  );
};

export default memo(SaleUp);
