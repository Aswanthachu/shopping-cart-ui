import { useEffect, useState } from "react";
import { CategoryTab, Header, MenuItem, SkeltonLoading } from "./components";
import axios from "axios";

import { data } from "./lib/data";

function App() {
  // const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/ae48aa26-86fc-41d5-88bb-9043c94bf73f"
        );
        let addSquareBracket = JSON.stringify("[\n" + response.data).replace(
          /([{,]\s*)([a-zA-Z0-9_]+)\s*:/g,
          '$1"$2":'
        );
        console.log(addSquareBracket);
        // let updated=JSON.stringify(addSquareBracket);
        // console.log(JSON.parse(addSquareBracket));
        // let J=JSON.parse(updated)
        // console.log(typeof J);
        // console.log(J?.[0]);
        // setData(JSON.parse(JSON.parse(addSquareBracket)));
      } catch (error) {
        setError(error.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // console.log(data);

  const firstCategory = data?.[0]?.table_menu_list?.[0];

  useEffect(() => {
    if (firstCategory) setSelectedCategory(firstCategory);
  }, [firstCategory]);

  if (loading) {
    return <SkeltonLoading />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <main className=" p-0 lg:p-5 font-main">
      <Header data={data[0]} cartCount={cartCount} />
      <div className=" lg:mt-4 w-full flex overflow-hidden hover:overflow-x-auto styled-scrollbar lg:pt-2">
        {data[0].table_menu_list.map((menu) => (
          <CategoryTab
            key={menu.menu_category_id}
            menu={menu}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </div>
      <div className="w-full">
        {selectedCategory.category_dishes.map((dish) => (
          <MenuItem
            key={dish.dish_id}
            setCartCount={setCartCount}
            dish={dish}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
