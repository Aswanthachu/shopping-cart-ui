import { useEffect, useState } from "react";
import { CategoryTab, Header, MenuItem } from "./components";
import axios from "axios";

import { data } from "./lib/data";

function App() {
  // const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/ae48aa26-86fc-41d5-88bb-9043c94bf73f"
        );
        let addSquareBracket = "[" + response.data;
        let removeSemiColon = addSquareBracket.replace(/;$/, "");

        // setData(JSON.parse(removeSemiColon))
      } catch (error) {
        setError(error.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const firstCategory = data?.[0]?.table_menu_list?.[0];

  useEffect(() => {
    if (firstCategory) setSelectedCategory(firstCategory);
  }, [firstCategory]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <main className=" p-0 lg:p-5 font-main">
      <Header data={data[0]} />
      <ul className=" lg:mt-4 w-full flex overflow-x-auto styled-scrollbar lg:pt-2">
        {data[0].table_menu_list.map((menu) => (
          <li key={menu.menu_category_id}>
            <CategoryTab
              menu={menu}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </li>
        ))}
      </ul>
      <ul className="w-full">
        {selectedCategory.category_dishes.map((dish) => (
          <li key={dish.dish_id}>
            <MenuItem dish={dish}/>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
