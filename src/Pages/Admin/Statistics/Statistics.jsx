import React, { useEffect, useState } from "react";
import useAxiosSecqure from "../../../Hooks/Axios/useAxiosSecqure";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from "recharts";

export default function Statistics() {
  const [data, setData] = useState();
  const axiosSecqure = useAxiosSecqure();
  useEffect(() => {
    axiosSecqure.get("/admin-stat").then((res) => {
      setData(res.data);
    });
  }, [axiosSecqure]);
  const datas = [
    { name: 'Reviews', value: data && data.reviews },
    { name: 'Products', value: data &&  data.products },
    { name: 'Users', value: data && data.users },
    
  ];
  //////////////////////////////////////////////////
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  /////////////////////////////////////////////////
  return (
    data && (
      <div className=" max-w-screen-lg poppin mx-auto text-center my-12">
        <div className="flex justify-between">
          <div className="border rounded-xl p-6 bg-purple-300">
            <h1 className="text-3xl font-bold text-gray-600">TOTAL USERS </h1>
            <p className="font-bold text-3xl md:text-4xl  lg:text-7xl">
              {data.users}
            </p>
          </div>
          <div className="border rounded-xl p-6 bg-orange-200">
            <h1 className="text-3xl font-bold text-gray-600">TOTAL REVIEWS</h1>
            <p className="font-bold text-3xl md:text-4xl  lg:text-7xl">
              {data.reviews}
            </p>
          </div>
          <div className="border rounded-xl p-6 bg-blue-200">
            <h1 className="text-3xl font-bold text-gray-600">TOTAL PRODUCTS</h1>
            <p className="font-bold text-3xl md:text-4xl  lg:text-7xl">
              {data.products}
            </p>
          </div>
        </div>
        <div className="border">
          <PieChart className="border" width={400} height={400}>
            <Pie
              data={datas}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {datas.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    )
  );
}
