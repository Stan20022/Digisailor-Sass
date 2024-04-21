"use client";
import { useAuth } from "@/app/providers/AuthContextProvider";
import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { FaUsers, FaShoppingCart, FaMoneyBillAlt } from "react-icons/fa";
import { FC } from "react";

Chart.register(...registerables);

const Dashboard: FC = () => {
  const { userDetails } = useAuth();
  const totalUsers = 10;
  const totalOrders = 35;
  const totalPlans = 5;
  const recentOrderData = {
    labels: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
    datasets: [
      {
        label: "Orders",
        data: [25, 40, 55, 80, 95, 135],
        fill: false,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        tension: 0.4,
      },
    ],
  };
  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [15000, 22000, 18000, 27000, 20000, 30000],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  if (!userDetails) {
    return (
      <div className="fixed top-1/2 left-1/2 bg-white border border-red-600 text-red-600 p-8 rounded-xl">
        You have to&nbsp;<a href="/sign-in">sign in first</a>
      </div>
    );
  }

  return (
    <section className="px-8 mt-8">
      <h1 className="text-2xl font-bold mb-4"></h1>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-green-100 rounded-lg p-4 flex items-center">
          <FaUsers className="text-green-800 mr-2" />
          <div>
            <p className="text-green-800 font-bold">Total Users</p>
            <p className="text-2xl font-bold">{totalUsers}</p>
            <p className="text-green-800">PAID USERS</p>
          </div>
        </div>
        <div className="bg-orange-100 rounded-lg p-4 flex items-center">
          <FaShoppingCart className="text-orange-800 mr-2" />
          <div>
            <p className="text-orange-800 font-bold">Total Orders</p>
            <p className="text-2xl font-bold">{totalOrders}</p>
            <p className="text-orange-800">Total Order Amount</p>
          </div>
        </div>
        <div className="bg-green-100 rounded-lg p-4 flex items-center">
          <FaMoneyBillAlt className="text-green-800 mr-2" />
          <div>
            <p className="text-green-800 font-bold">Total Plans</p>
            <p className="text-2xl font-bold">{totalPlans}</p>
            <p className="text-green-800">Purchase Plan</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-xl font-bold mb-3">Recent Order</h2>
          <Line data={recentOrderData} />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3">Sales Data</h2>
          <Bar data={salesData} />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;