import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="flex justify-between">
      <h3 className="font-semibold text-gray-700/80 text-lg md:text-xl">UNI Resto Cafe</h3>

      <div className="flex gap-2 md:gap-5 items-center">
        <p className="text-gray-700/90 text-sm md:text-base">My Orders</p>
        <div className="relative">
          <ShoppingCartIcon className="h-7 w-7 md:h-8 md:w-8 text-gray-800/60" />
          <div className="absolute rounded-full min-w-[16px] h-4 md:min-w-[20px] md:h-5 px-0.5  bg-red-600 flex items-center justify-center text-[10px] -top-1 -right-1 text-white font-semibold">270</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
