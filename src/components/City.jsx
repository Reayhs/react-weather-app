import React from "react";
import clear from "../img/açık.png"
import cloud from "../img/bulut.png"
import rain from  "../img/yağmur.png"
import snow from "../img/kar.png"

function City({ city }) {
  return (
    <>
      <div className="wrapper ">
        <div className="w-[350px] rounded-md shadow mx-auto h-auto bg-[#444] p-6 text-center flex flex-col justify-center items-center gap-6">
          <h1 className="text-4xl font-semibold">{city.name}</h1>
          <h1 className="text-4xl font-bold">{city.main.temp} °C</h1>
          <h1 className="text-2xl">{city.weather[0].main}</h1>
          {city.weather[0].main == "Clear" && <img src={clear} alt="" /> }
          {city.weather[0].main == "Clouds" && <img src={cloud} alt="" /> }
          {city.weather[0].main == "Rain" && <img src={rain} alt="" /> }
          {city.weather[0].main == "Snow" && <img src={snow} alt="" />}
        </div>
      </div>
    </>
  );
}

export default City;
