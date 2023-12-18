import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { cn } from "../lib/utils";
import { useState } from "react";

const MenuItem = ({ dish,setCartCount }) => {
  const [count,setCount]=useState(0);

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
    if(count > 0) setCartCount(prevCount=>prevCount - 1);
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    setCartCount(prevCount=>prevCount + 1);
  };

  return (
    <div className="w-full flex justify-between px-2 py-3 border-b-2 ">
      <div className="w-full flex gap-2">
        <div
          className={cn(
            dish?.dish_Type === 2 ? "border-green-600" : "border-red-600",
            "p-0.5 w-fit h-fit border  mt-1"
          )}
        >
          <div
            className={cn(
              dish?.dish_Type === 2 ? "bg-green-600" : "bg-red-600",
              "w-3 h-3 rounded-full"
            )}
          />
        </div>
        <div className="space-y-2 grow">
          <h2 className="text-base md:text-lg lg:text-xl font-bold text-black/75">
            {dish?.dish_name}
          </h2>
          <div className="w-full flex justify-between items-center">
            <p className="text-xs md:text-base font-bold text-black/75">
              {dish?.dish_currency} {dish?.dish_price}
            </p>
            <p className="text-xs md:text-sm font-semibold md:mr-5 lg::mr-20">
              {dish?.dish_calories} calories
            </p>
          </div>
          <p className="text-gray-500 text-xs md:text-sm lg:text-base">
            {dish?.dish_description}
          </p>
          <div className="bg-green-600 text-white w-fit  flex p-1 md:p-2 items-center rounded-full">
            <div className="p-1 pr-4 md:pr-8" onClick={handleDecrement}>
              <MinusIcon className="w-3 md:w-4" />
            </div>
            <p className="text-sm md:text-base w-fit">{count}</p>
            <div className="p-1 pl-4 md:pl-8" onClick={handleIncrement}>
              <PlusIcon className=" w-3 md:w-5" />
            </div>
          </div>
          <p className="text-red-500 text-xs md:text-sm">
            {dish?.dish_Availability
              ? dish?.addonCat?.length > 0 ? "customization available" :""
              : "Not available"}
          </p>
        </div>
      </div>
      <div className="ml-2 md:ml-10">
        <div className="w-[80px] h-[80px] md:w-[180px] md:h-[130px] rounded-xl overflow-hidden">
          <img
            src={dish?.dish_image}
            className="w-full h-full rounded-xl object-cover"
            alt="menu-item"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
