import React from 'react'
import {
  WiTime9,
  WiTime12,
  WiTime6,
  WiTime3,
} from "react-icons/wi";

const CardFore = ({forecast}) => {
  return (
    <div className=" flex justify-center items-center">
      <div className="p-4 flex flex-col  bg-cardOverlay border-solid border-2 rounded-lg shadow-md   ">
        <h1 className="text-2xl font-extrabold text-black  text-center ">
          Forecast Traido Desde Una Api En El App Sin Redux
        </h1>
        <div className="mt-10 ">
          {forecast.length === 0 ? (
            <div>Sin datos</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:grid-4 md:gap-2  lg:grid-cols-4 max-w-lg ">
              <div className="border-solid border-2 rounded-md w-[100px] p-2 shadow-lg">
                <p className="font-extrabold text-2xl text-center flex gap-2">
                  {(forecast?.list[0]?.dt_txt).substring(11, 16)}{" "}
                  <WiTime9 className="mt-1" />
                </p>
                <div className="flex justify-center">
                  <img
                    src={`https://openweathermap.org/img/wn/${forecast?.list[0]?.weather[0]?.icon}.png `}
                    alt="imagen"
                    width={60}
                  />
                </div>
                <p className="text-center font-extrabold text-2xl">
                  {Math.round(forecast?.list[0]?.main?.temp - 273.15)}&deg;C
                </p>
                <p className="text-center">
                  {forecast?.list[0]?.weather[0]?.description}
                </p>
              </div>
              <div className="border-solid border-2 rounded-md w-[100px] p-2 shadow-lg">
                <p className="font-extrabold text-2xl text-center flex gap-2">
                  {(forecast?.list[1]?.dt_txt).substring(11, 16)}{" "}
                  <WiTime12 className="mt-1" />
                </p>
                <div className="flex justify-center">
                  <img
                    src={`https://openweathermap.org/img/wn/${forecast?.list[1]?.weather[0]?.icon}.png `}
                    alt="imagen"
                    width={60}
                  />
                </div>
                <p className="text-center font-extrabold text-2xl">
                  {Math.round(forecast?.list[1]?.main?.temp - 273.15)}&deg;C
                </p>
                <p className="text-center">
                  {forecast?.list[1]?.weather[0]?.description}
                </p>
              </div>
              <div className="border-solid border-2 rounded-md w-[100px] p-2 shadow-lg">
                <p className="font-extrabold text-2xl text-center flex gap-2">
                  {(forecast?.list[2]?.dt_txt).substring(11, 16)}{" "}
                  <WiTime3 className="mt-1" />
                </p>
                <div className="flex justify-center">
                  <img
                    src={`https://openweathermap.org/img/wn/${forecast?.list[2]?.weather[0]?.icon}.png `}
                    alt="imagen"
                    width={60}
                  />
                </div>
                <p className="text-center font-extrabold text-2xl">
                  {Math.round(forecast?.list[2]?.main?.temp - 273.15)}&deg;C
                </p>
                <p className="text-center">
                  {forecast?.list[2]?.weather[0]?.description}
                </p>
              </div>
              <div className="border-solid border-2 rounded-md w-[100px] p-2 shadow-lg">
                <p className="font-extrabold text-2xl text-center flex gap-2">
                  {(forecast?.list[3]?.dt_txt).substring(11, 16)}{" "}
                  <WiTime6 className="mt-1" />
                </p>
                <div className="flex justify-center">
                  <img
                    src={`https://openweathermap.org/img/wn/${forecast?.list[3]?.weather[0]?.icon}.png `}
                    alt="imagen"
                    width={60}
                  />
                </div>
                <p className="text-center font-extrabold text-2xl">
                  {Math.round(forecast?.list[3]?.main?.temp - 273.15)}&deg;C
                </p>
                <p className="text-center">
                  {forecast?.list[3]?.weather[0]?.description}
                </p>
              </div>
              <div className="border-solid border-2 rounded-md w-[100px] p-2 shadow-lg">
                <p className="font-extrabold text-2xl text-center flex gap-2">
                  {(forecast?.list[4]?.dt_txt).substring(11, 16)}{" "}
                  <WiTime9 className="mt-1" />
                </p>
                <div className="flex justify-center">
                  <img
                    src={`https://openweathermap.org/img/wn/${forecast?.list[4]?.weather[0]?.icon}.png `}
                    alt="imagen"
                    width={60}
                  />
                </div>
                <p className="text-center font-extrabold text-2xl">
                  {Math.round(forecast?.list[4]?.main?.temp - 273.15)}&deg;C
                </p>
                <p className="text-center">
                  {forecast?.list[4]?.weather[0]?.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardFore