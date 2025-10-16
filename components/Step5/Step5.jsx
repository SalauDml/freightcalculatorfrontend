import React from "react";
import { SiTicktick } from "react-icons/si";
import { MdOutlineDone } from "react-icons/md";
import { GoTrophy } from "react-icons/go";
import { BsLightningCharge, BsTruck } from "react-icons/bs";
import { GiRibbonMedal } from "react-icons/gi";
import { MdKeyboardArrowRight } from "react-icons/md";
import Achievements from "./Achievements";
import { CiStar } from "react-icons/ci";
import { LuTruck } from "react-icons/lu";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import Ratecalc from "../RateCalc/Ratecalc";



function Step5({ barvalue, setBarvalue, step, setStep }) {
  return (
    <div className="mx-auto w-[50%] ">
      <div className="shadow-sm rounded-2xl p-4 mt-4 bg-white">
        <div className="w-full h-5 flex justify-between ">
          <div className="flex items-center gap-2">
            <SiTicktick className="text-blue-600" />
            <p className="font-bold">Let's get you set up</p>
          </div>
          <p className="text-blue-600 font-bold">100% Setup Complete</p>
        </div>

        <progress
          value={barvalue}
          max="100"
          className="w-full h-2  mt-3 overflow-hidden [&::-webkit-progress-bar]:bg-gray-300
                   [&::-webkit-progress-value]:bg-blue-800 [&::-moz-progress-bar]:bg-blue-500 [&::-webkit-progress-value]:rounded-full
                   [&::-webkit-progress-bar]:rounded-full"
        ></progress>
      </div>

      <div className="bg-green-100 w-full flex flex-col items-center p-3 gap-8 mt-6 ">
        <MdOutlineDone
          size={60}
          className="rounded-full p-3 bg-black text-white bg-gradient-to-r from-green-400 to-teal-400 "
        />
        <p className="font-bold text-green-950">Setup Complete!</p>
        <p>You're all set to start calculating freight rates.</p>
        <p>Use the calculator below to get accurate rates for your loads.</p>
      </div>

      <div className="shadow-md mt-6">
        <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 p-2">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <GoTrophy size={20} className="text-white" />
              <p className="text-white font-bold">Your Trucking Journey</p>
            </div>
            <div className="flex items-center gap-3">
              <BsLightningCharge className="text-white" />
              <p className="text-white">Level 1</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-white text-sm mt-3 ">Progress to Level 2</p>
            <p className="text-white text-sm">0%</p>
          </div>
          <progress
            value="0"
            max="100"
            className="w-full h-2 overflow-hidden [&::-webkit-progress-bar]:bg-blue-900
                   [&::-webkit-progress-value]:bg-blue-800 [&::-moz-progress-bar]:bg-blue-500 [&::-webkit-progress-value]:rounded-full
                   [&::-webkit-progress-bar]:rounded-full"
          ></progress>
        </div>
        <div className="bg-white p-2">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <GiRibbonMedal size={20} className="text-yellow-400" />
              <p className="text-md font-semibold">Achievements</p>
            </div>
            <div className="flex items-center">
              <p className="text-sm text-blue-400">Show All</p>
              <MdKeyboardArrowRight className="text-blue-400" />
            </div>
          </div>
          <div className="p-3 grid grid-cols-5 gap-3">
            <Achievements text="New Trucker" Icon={CiStar} />
            <Achievements text="New Trucker" Icon={CiStar} />
            <Achievements text="New Trucker" Icon={CiStar} />
            <Achievements text="New Trucker" Icon={CiStar} />
            <Achievements text="New Trucker" Icon={CiStar} />
            <Achievements text="New Trucker" Icon={CiStar} />
            <Achievements text="New Trucker" Icon={CiStar} />
            <Achievements text="New Trucker" Icon={CiStar} />
            <Achievements text="New Trucker" Icon={CiStar} />
            <Achievements text="New Trucker" Icon={CiStar} />
          </div>
          <div>
            <div className="bg-gray-100 p-3 flex justify-between items-center hover:bg-gray-300 hover:cursor-pointer  ">
              <div className="flex gap-3">
                <div>
                  <CiStar
                    size={35}
                    className="bg-gray-200 rounded-full p-1 text-white"
                  />
                </div>
                <div className="flex flex-col ">
                  <p className="text-[15px] font-semibold">
                    Unlock more achievements
                  </p>
                  <p className="text-[10px]">8 achievements remaining</p>
                </div>
              </div>
            <MdKeyboardArrowRight/>
            </div>
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-3 flex justify-between items-center rounded-sm mt-4 ">
              <div className="flex gap-3">
                <div>
                  <CiStar
                    size={35}
                    className="bg-gray-200 rounded-full p-1 text-white"
                  />
                </div>
                <div className="flex flex-col ">
                  <p className="text-[15px] text-in font-semibold text-indigo-800">
                    Unlock Premium achievements
                  </p>
                  <p className="text-[10px] text-indigo-600">Subscribe to earn exclusive badges and level up faster</p>
                </div>
              </div>
            <button className="bg-indigo-600 p-1 text-white rounded-md"> Upgrade </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-100 mt-4">
        <div className="flex justify-between items-center p-2">
            <div className="flex gap-3 items-center">
                <LuTruck size={40} className="p-3 rounded-full text-blue-500 bg-blue-200  "/>
                <p className="font-medium">Truck Stop Preferences</p>
            </div>
            <FaArrowUp/>
        </div>

      </div>

      <Ratecalc/>


    </div>
  );
}

export default Step5;
