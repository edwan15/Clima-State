import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ClimaThunk } from "./ClimaSlice.js/ClimaSlice";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import {
  WiHumidity
} from "react-icons/wi";
import axios from "axios";
import CardFore from "./CardFore";



function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { clima } = state.ClimaReducer;
  console.log(state);
  
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    dispatch(() => ClimaThunk(""));
    
  }, []);

 
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + "/" + month + "/" + year;

  const URL = ` https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=25d21a264f7dcdfb5be61655b423da67`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    axios.get(URL).then((response) => {
      setForecast(response.data);
      console.log(response.data);
      dispatch(ClimaThunk(city));
      setloading(false);
    });
  };

  return (

    <div className="flex flex-col ">
      
    <div
      className="p-6 h-screen bg-[url('https://get.wallhere.com/photo/sky-lightning-storm-atmosphere-dusk-thunder-cloud-weather-dawn-thunderstorm-darkness-1366x768-px-meteorological-phenomenon-cumulus-phenomenon-551681.jpg')] bg-cover "
    >
      <h1 className="text-white font-extrabold text-center text-3xl mb-6">App de Clima</h1>

      <p className="text-white flex justify-center items-center ">NOTA :  La app esta en Version de Prueba puedes ingresar el nombre de una cuidad y Previsualizar el estado del Tiempo. </p>

      <div className="lg:grid lg:grid-cols-2 lg:gap-2 justify-center items-center">
      <div className="gap-5 flex  mt-10   ">
        <div className="border-solid border-2 bg-cardOverlay p-4 mx-auto rounded-lg shadow-md w-[600px] sm:max-w-md md:max-w-full  ">
          <div className=" text-2xl font-extrabold text-black text-center  ">
            <h1>Clima Creado Con Redux CreateAsyncThunk</h1>
            <p>{date}</p>
            <input
              type="text"
              className="border-2 rounded-md gap-5 mt-5"
              placeholder="Ciudad"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />{" "}
            <button
              onClick={handleSubmit}
              className="p-1 px-2 rounded-lg bg-boton mt-3 "
            >
              Buscar
            </button>
          </div>
          <div className="mt-5">
            <p className="text-center font-bold text-xl mb-8 ">
              {clima?.weather[0]?.description}
            </p>
            <div className="grid grid-cols-3">
              <div>
                {" "}
                <h1 className="text-black font-extrabold text-2xl justify-center items-center flex">
                  <span className="text-7xl">
                    {" "}
                    {Math.round(clima?.main?.temp - 273.15)}&deg;C
                  </span>
                </h1>
              </div>
              <div className="flex justify-center items-center ">
                <img
                  src={`https://openweathermap.org/img/wn/${clima?.weather[0].icon}.png `}
                  alt="imagen"
                  width={80}
                />
              </div>
              <div className="">
                <h1 className="text-black font-extrabold text-xl flex">
                  <FaTemperatureHigh />
                  Temp MAX : {Math.round(clima?.main?.temp_max - 273.15)}&deg;C
                </h1>
                <h1 className="text-black font-extrabold text-xl flex">
                  <FaTemperatureLow />
                  Temp MIN : {Math.round(clima?.main?.temp_min - 273.15)}&deg;C
                </h1>
                <h1 className="text-black font-extrabold text-xl flex">
                  <WiHumidity /> Humedad : {clima?.main?.humidity} %
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <CardFore forecast={forecast} />
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
