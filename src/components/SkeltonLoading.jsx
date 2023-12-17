import Skeleton from "./Skelton";
import { ShoppingCartIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

const SkeltonLoading = () => {
  return (
    <main className=" p-0 lg:p-5 font-main">
      <div className="p-3 md:p-5 lg:p-0 flex justify-between">
        <div className="flex gap-2 items-center">
          <span className="hover:border rounded-full p-0.5 hover:bg-gray-200 hover:border-gray-300 md:hidden">
            <ArrowLeftIcon className="w-4 text-black/75 font-semibold" />
          </span>
          <Skeleton className="w-32 md:w-44 h-8" />
        </div>

        <div className="flex gap-2 md:gap-5 items-center">
          <p className="text-gray-700/90 text-sm md:text-base font-semibold">
            My Orders
          </p>
          <div className="relative">
            <ShoppingCartIcon className="h-7 w-7 md:h-8 md:w-8 text-gray-800/60" />
            <Skeleton className="absolute rounded-full min-w-[16px] h-4 md:min-w-[20px] md:h-5 px-0.5  bg-red-600 flex items-center justify-center text-[10px] -top-1 -right-1 text-white font-semibold" />
          </div>
        </div>
      </div>

      <div className=" lg:mt-4 w-full flex overflow-hidden hover:overflow-x-auto styled-scrollbar lg:pt-2">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            className="border-gray-300/90 min-w-[150px] md:min-w-[250px] lg:min-w-[400px]  h-10 flex items-center text-center justify-center  border-b-[4px] mb-[2px]"
            key={item}
          >
            <Skeleton className="w-28 md:w-40 lg:w-48 h-5" />
          </div>
        ))}
      </div>
      <div className="w-full">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            className="w-full flex justify-between px-2 py-3 border-b-2 "
            key={item}
          >
            <div className="w-full flex gap-2">
              <div className="p-0.5 w-fit h-fit border  mt-1 border-slate-200">
                <div className="w-3 h-3 rounded-full bg-slate-200" />
              </div>
              <div className="space-y-2 md:space-y-3 grow">
                <Skeleton className="w-28 md:w-36 lg:w-40 h-6" />

                <div className="w-full flex justify-between items-center">
                  <div className="flex gap-1">
                    <Skeleton className="w-7 h-4 md:w-9 md:h-5" />
                    <Skeleton className="w-7 h-4 md:w-9 md:h-5" />
                  </div>
                  <Skeleton className="w-20 md:w-28 h-4" />
                </div>
                <div className="space-y-1">
                  <Skeleton className="w-full h-3" />
                  <Skeleton className="w-1/2 h-3" />
                </div>
                <Skeleton className="bg-slate-200 text-white w-20 h-7 md:w-36 md:h-12 flex p-1 md:p-2 items-center rounded-full" />

                <Skeleton className="w-36 md:w-40 h-3" />
              </div>
            </div>
            <div className="ml-2 md:ml-10">
              <Skeleton className="bg-slate-200 w-[80px] h-[80px] md:w-[180px] md:h-[130px] rounded-xl overflow-hidden" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default SkeltonLoading;
