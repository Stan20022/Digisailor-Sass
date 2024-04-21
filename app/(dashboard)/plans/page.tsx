"use client";
import { FC } from "react";

// Icons
import { LuCrown, LuSailboat } from "react-icons/lu";
import { GiShipWheel } from "react-icons/gi";
import { Button } from "@/components/ui/button";

const Plans: FC = () => {
  return (
    <section className="p-8 h-[90vh] overflow-y-scroll">
      <div className="px-8 flex justify-between items-center gap-8">
        {/* Base Plan */}
        <div className="relative h-[70vh] w-full p-4 border border-green-600 text-green-600 rounded-lg shadow-md shadow-green-600 hover:scale-110 transition-all duration-500 ease-in-out">
          <div className="flex justify-center items-center gap-2">
            <h1 className="text-center font-bold text-xs">Base Plan</h1>
            <GiShipWheel className="text-2xl" />
          </div>

          <div className="w-full h-[1px] bg-green-600 my-4"></div>

          <div className="px-8 my-4">
            <ul className="list-disc">
              <li>Admin Access</li>
              <li>Access Dashboard</li>
              <li>Access Business</li>
              <li>Access Staff</li>
              <li>Access Appointments</li>
              <li>Access Contacts</li>
              <li>Access Calendar</li>
              <li>Minimum Storage</li>
            </ul>
          </div>

          <div className="absolute bottom-10 left-10">
            <Button
              className="bg-green-600 border-green-600 text-white hover:text-green-600 hover:bg-white"
              variant={"outline"}
            >
              Edit
            </Button>

            <Button
              className="ml-4 bg-green-600 border-green-600 text-white hover:text-green-600 hover:bg-white"
              variant={"outline"}
            >
              See Requests
            </Button>
          </div>
        </div>

        {/* Base Plan + Pro */}
        <div className="h-[70vh] w-full p-4 border border-blue-600 text-blue-600 rounded-lg shadow-md shadow-blue-600 hover:scale-110 transition-all duration-500 ease-in-out">
          <div className="flex justify-center items-center gap-2">
            <h1 className="text-center font-bold text-xs">BP + Pro</h1>
            <LuSailboat className="text-lg" />
          </div>

          <div className="w-full h-[1px] bg-blue-600 my-4"></div>

          <div className="px-8 my-4">
            <ul className="list-disc">
              <li>Admin Access</li>
              <li>Access Dashboard</li>
              <li>Access Business</li>
              <li>Access Staff</li>
              <li>Access Appointments</li>
              <li>Access Contacts</li>
              <li>Access Calendar</li>
              <li>Access Email Templates</li>
              <li>Customizable Settings</li>
              <li>Maximum 1TB Of Storage</li>
            </ul>
          </div>
        </div>

        {/* Base Plan + Pro + Premium */}
        <div className="h-[70vh] w-full p-4 border border-yellow-600 text-yellow-600 rounded-lg shadow-md shadow-yellow-600 hover:scale-110 transition-all duration-500 ease-in-out">
          <div className="flex justify-center items-center gap-2">
            <h1 className="text-center font-bold text-xs">BP + Pro + Premium</h1>
            <LuCrown className="text-lg" />
          </div>

          <div className="w-full h-[1px] bg-yellow-600 my-4"></div>

          <div className="px-8 my-4">
            <ul className="list-disc">
              <li>Admin Access</li>
              <li>Access Dashboard</li>
              <li>Access Business</li>
              <li>Access Staff</li>
              <li>Access Appointments</li>
              <li>Access Contacts</li>
              <li>Access Calendar</li>
              <li>Access Email Templates</li>
              <li>Customizable Settings</li>
              <li>Maximum 1TB Of Storage</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
