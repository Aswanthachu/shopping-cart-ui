import { cn } from "../lib/utils";

const CategoryTab = ({ menu, selectedCategory, setSelectedCategory }) => {
  return (
    <div
      className={cn(
        menu.menu_category_id === selectedCategory.menu_category_id
          ? "border-red-500"
          : "border-gray-300/90",
        "min-w-[170px] md:min-w-[250px] lg:min-w-[400px] h-10 flex items-center text-center justify-center  border-b-[4px] mb-[2px]"
      )}
    >
      <p
        className={cn(
          menu.menu_category_id === selectedCategory.menu_category_id && "text-red-500",
          "text-sm md:text-lg font-semibold hover:cursor-pointer"
        )}
        onClick={() => setSelectedCategory(menu)}
      >
        {menu.menu_category}
      </p>
    </div>
  );
};

export default CategoryTab;
