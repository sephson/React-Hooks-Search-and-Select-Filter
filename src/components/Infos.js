import React, { useState } from "react";
import data from "./MOCK_DATA.json";
function Infos() {
  const [search, setSearch] = useState("");
  console.log(search);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSelect = (e) => {
    setSearch(e.target.value);
    console.log("chnage");
  };

  const getUnique = (items = [], value) => {
    return [...new Set(items.map((item) => item[value]))];
  };

  let types = getUnique(data, "gender");
  types = [...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={handleChange} />
      <select value={search} onChange={handleSelect}>
        {types}
      </select>

      {data
        .filter((item) => {
          if (search === "") return item;
          else if (
            item.first_name.toLowerCase().includes(search.toLowerCase())
          ) {
            return item;
          } else if (
            item.last_name.toLowerCase().includes(search.toLowerCase())
          )
            return item;
          else if (item.gender.toLowerCase().includes(search.toLowerCase()))
            return item;
        })
        .map((item, key) => {
          return (
            <div className="infos">
              <h4 key={key.id}>First Name: {item.first_name}</h4>
              <p key={key.id}>Last Name: {item.last_name}</p>
              <p key={key.id}>Gender: {item.gender}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Infos;
