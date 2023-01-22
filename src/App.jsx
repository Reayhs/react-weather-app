import axios from "axios";
import React, { useEffect, useState } from "react";
import City from "./components/City";

function App() {
  const key = "f7561d95f15925e0d16fefaf8ea215a5";
  const [search, setSearch] = useState();
  const [city, setCity] = useState("");

  useEffect(() => {
    const getApi = async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
      );
      setSearch(response.data);
      console.log(search);
    };

    getApi();
  }, [city]);

  return (
    <>
      <div className="flex justify-center items-center">
        <input
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="Search"
          className="text-black my-5 px-3 w-[250px] py-3 placeholder-blueGray-300 text-blueGray-600   bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring flex justify-center items-center "
        />
      </div>
      {search && <City city={search} />}
    </>
  );
}

export default App;
