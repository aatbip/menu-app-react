import React from "react";
import { Category } from "./components/Category";
import { Items } from "./components/Items";

import item from "./data";

const categories = ["all", ...new Set(item.map((items) => items.category))];

export const App = () => {
  const [data, setData] = React.useState(item);
  const [category, setCategory] = React.useState(categories);

  const getTarget = (category) => {
    if (category === "all") {
      setData(item);
      return;
    }
    const newItems = item.filter((d) => d.category === category);
    setData(newItems);
  };
  console.log(data);
  return (
    <main>
      <section>
        <h1>Our Menu</h1>
        <Category category={category} getTarget={getTarget} />
        <Items data={data} />
      </section>
    </main>
  );
};
