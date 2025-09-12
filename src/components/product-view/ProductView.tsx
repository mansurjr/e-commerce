import { memo, type FC } from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import type { IProduct } from "../../types";

interface IProps {
  data: IProduct[] | undefined;
}

const ProductView: FC<IProps> = (props) => {
  const { data } = props;

  return (
    <div className="grid grid-cols-4 gap-6">
      {data?.map((item: IProduct) => (
        <div key={item.id}>
          <div>
            <img src={item.thumbnail} alt="" />
          </div>
          <div>
            <p>{item.rating}</p>
            <div className="flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
            </div>
            <h3 className="font-bold">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(ProductView);
