import React from "react";
import { FaAirFreshener, FaCarAlt} from "react-icons/fa";
import { MdWaterDrop } from "react-icons/md";
import { GiDustCloud } from "react-icons/gi";
import { TiWeatherShower } from "react-icons/ti";

const section = () => {
  return (
    <div className="my-20">
      <h1 className="text-4xl text-center my-10 font-serif font-bold">
        استكشف تصنيفات
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:w-4/5 mg:w-4/5 w-full mx-auto gap-11">
        <div
          className="card card-side bg-base-100 shadow-xl"
          style={{ backgroundColor: "#B8EBEF" }}
        >
          <FaAirFreshener
            className="text-4xl my-auto ml-4"
            style={{ color: "#1A7D9B" }}
          ></FaAirFreshener>
          <div
            style={{ borderRight: "1px solid black", height: "50px" }}
            className="my-auto ml-7"
          ></div>
          <div className="card-body">
            <h2 className="card-title">أنظمة تنقية الهواء</h2>
            <p>1200</p>
          </div>
        </div>

        <div
          className="card card-side bg-base-100 shadow-xl"
          style={{ backgroundColor: "#B8EBEF" }}
        >
          <MdWaterDrop 
            className="text-4xl my-auto ml-4"
            style={{ color: "#1A7D9B" }}
          />
          <div
            style={{ borderRight: "1px solid black", height: "50px" }}
            className="my-auto ml-7"
          ></div>
          <div className="card-body">
            <h2 className="card-title">أنظمة ترطيب الهواء</h2>
            <p>980</p>
          </div>
        </div>

        <div
          className="card card-side bg-base-100 shadow-xl"
          style={{ backgroundColor: "#B8EBEF" }}
        >
          <MdWaterDrop
            className="text-4xl my-auto ml-4"
            style={{ color: "#1A7D9B" }}
          />
          <div
            style={{ borderRight: "1px solid black", height: "50px" }}
            className="my-auto ml-7"
          ></div>
          <div className="card-body">
            <h2 className="card-title">أنظمة تنقية الماء</h2>
            <p>640</p>
          </div>
        </div>

        <div
          className="card card-side bg-base-100 shadow-xl"
          style={{ backgroundColor: "#B8EBEF" }}
        >
          <GiDustCloud
            className="text-4xl my-auto ml-4"
            style={{ color: "#1A7D9B" }}
          ></GiDustCloud>
          <div
            style={{ borderRight: "1px solid black", height: "50px" }}
            className="my-auto ml-7"
          ></div>
          <div className="card-body">
            <h2 className="card-title">أنظمة تنقية الغبار</h2>
            <p>750</p>
          </div>
        </div>

        <div
          className="card card-side bg-base-100 shadow-xl"
          style={{ backgroundColor: "#B8EBEF" }}
        >
          <TiWeatherShower 
            className="text-4xl my-auto ml-4"
            style={{ color: "#1A7D9B" }}
          ></TiWeatherShower >
          <div
            style={{ borderRight: "1px solid black", height: "50px" }}
            className="my-auto ml-7"
          ></div>
          <div className="card-body">
            <h2 className="card-title">أنظمة تنقية الروائح</h2>
            <p>340</p>
          </div>
        </div>

        <div
          className="card card-side bg-base-100 shadow-xl"
          style={{ backgroundColor: "#B8EBEF" }}
        >
          <FaCarAlt 
            className="text-4xl my-auto ml-4"
            style={{ color: "#1A7D9B" }}
          ></FaCarAlt >
          <div
            style={{ borderRight: "1px solid black", height: "50px" }}
            className="my-auto ml-7"
          ></div>
          <div className="card-body">
            <h2 className="text-sm font-bold">
              أنظمة تنقية الهواء في السيارات
            </h2>
            <p>450</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default section;
