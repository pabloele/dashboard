import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { data } from "@/data/data";

const Orders = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between px-4 pt-4">
        <h2>Órdenes</h2>
        <h2>Bienvenido de nuevo, Pablo</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer ">
            <span>Órden</span>
            <span className="sm:text-left text-right hidden sm:flex">
              Estado
            </span>
            <span className="hidden md:grid">Última órden</span>
            <span className="hidden sm:grid">Método</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-100 rouded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols2 items-center justify-between cursor-pointer"
              >
                <div className="flex flex-row">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <FaShoppingBag className="text-purple-800 " />
                  </div>
                  <div className="pl-4 ">
                    <p className="text-gray-800 font-bold">
                      ${order.total.toLocaleString()}
                    </p>
                    <p className="text-gray-800 text-sm">{order.name.first}</p>
                  </div>
                </div>
                <p className="text-gray-600 sm:text-left text-right flex ">
                  <span
                    className={
                      order.status === "Procesando"
                        ? "bg-blue-200 p-2 rounded-lg pt-4"
                        : order.status === "Completado"
                        ? "bg-green-200 p-2 rounded-lg"
                        : "bg-yellow-200 p-2 rounded-lg"
                    }
                  >
                    {order.status}
                  </span>
                </p>
                <p className="hidden md:flex">{order.date}</p>
                <div className="sm:flex hidden justify-between items-center">
                  <p>{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Orders;
