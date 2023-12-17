import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { cn } from "../lib/utils";

const MenuItem = ({ dish }) => {
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
              SAR {dish?.dish_price}
            </p>
            <p className="text-xs md:text-sm font-semibold md:mr-5 lg::mr-20">
              {dish?.dish_calories} calories
            </p>
          </div>
          <p className="text-gray-500 text-xs md:text-sm lg:text-base">
            {dish?.dish_description}
          </p>
          <div className="bg-green-600 text-white w-fit flex p-1 md:p-2 items-center rounded-full">
            <button className="p-1 pr-4 md:pr-8">
              <MinusIcon className="w-3 md:w-4" />
            </button>
            <p className="text-sm md:text-base w-fit">2</p>
            <button className="p-1 pl-4 md:pl-8">
              <PlusIcon className=" w-3 md:w-5" />
            </button>
          </div>
          <p className="text-red-500 text-xs md:text-sm">
            {dish?.dish_Availability
              ? dish?.addonCat && "customization available"
              : "Not available"}
          </p>
        </div>
      </div>
      <div className="ml-2 md:ml-10">
        <div className="w-[80px] h-[80px] md:w-[180px] md:h-[130px] bg-red-300 rounded-xl overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Rocket_lettuce%2C_Butternut_squash%2C_Beetroot%2C_Green_beans%2C_whipped_cream_salad.jpg/220px-Rocket_lettuce%2C_Butternut_squash%2C_Beetroot%2C_Green_beans%2C_whipped_cream_salad.jpg"
            className="w-full h-full rounded-xl object-cover"
            alt="menu-item"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
