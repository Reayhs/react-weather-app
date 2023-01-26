import axios from "axios";
import React, { useEffect, useState } from "react";
import City from "./components/City";

function App() {
  const key = "f7561d95f15925e0d16fefaf8ea215a5";
  const [search, setSearch] = useState();
  const [city, setCity] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
        );
        setSearch(response.data);
        console.log(search);
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, [city]);
 

  useEffect(() => {
    
  !search ? setText("Lütfen Arayınız!") : setText("");
  console.log("blabla")
  },[text])

  const input = (e) => {
    if (e.target.value.length) {
      setCity(e.target.value);
    } else {
      setSearch();
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <input
          onChange={input}
          type="text"
          placeholder="Search"
          className="text-black my-5 px-3 w-[250px] py-3 placeholder-blueGray-300 text-blueGray-600   bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring flex justify-center items-center "
        />
      </div>

      {!search && <h1 className="text-center">{text}</h1>}

      {search && <City city={search} />}
    </>
  );
}

export default App;
