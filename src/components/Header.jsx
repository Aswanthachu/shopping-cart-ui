import { ShoppingCartIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

const Header = ({data,cartCount}) => {

  return (
    <div className="p-3 md:p-5 lg:p-0 flex justify-between">
      <div className="flex gap-2 items-center">
        <span className="hover:border rounded-full p-0.5 hover:bg-gray-200 hover:border-gray-300 md:hidden">
          <ArrowLeftIcon className="w-4 text-black/75 font-semibold" />
        </span>
        <h3 className="font-semibold text-gray-700/80 text-lg md:text-2xl">
          {data?.restaurant_name}
        </h3>
      </div>

      <div className="flex gap-2 md:gap-5 items-center">
        <p className="text-gray-700/90 text-sm md:text-base font-semibold">
          My Orders
        </p>
        <div className="relative">
          <ShoppingCartIcon className="h-7 w-7 md:h-8 md:w-8 text-gray-800/60" />
          <div className="absolute rounded-full min-w-[16px] h-4 md:min-w-[20px] md:h-5 px-0.5  bg-red-600 flex items-center justify-center text-[10px] -top-1 -right-1 text-white font-semibold">
            {cartCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
