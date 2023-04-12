import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Statistics = () => {
  const assigementChart = [
    {
      id: 1,
      assigementNo: "A1",
      mark: 53,
    },
    {
      id: 2,
      assigementNo: "A2",
      mark: 60,
    },
    {
      id: 3,
      assigementNo: "A3",
      mark: 50,
    },
    {
      id: 4,
      assigementNo: "A4",
      mark: 60,
    },
    {
      id: 5,
      assigementNo: "A5",
      mark: 60,
    },
    {
      id: 6,
      assigementNo: "A6",
      mark: 60,
    },
    {
      id: 7,
      assigementNo: "A7",
      mark: 60,
    },
    {
      id: 8,
      assigementNo: "A8",
      mark: 60,
    },
  ];
  return (
    <div className="mb-32">
      <div className="text-center pt-12 pb-32 navbar-background mb-20 md:mb-32">
        <h2 className="font-extrabold text-3xl relative">Statistics</h2>
        <img
          className="absolute top-0 right-0  "
          src="https://i.ibb.co/tm2f1FH/Vector-1.png"
          alt=""
        />
        <img
          style={{ top: "126px" }}
          className="absolute left-0"
          src="https://i.ibb.co/k1qf53Y/Vector.png"
          alt=""
        />
      </div>
      <div className="mx-4 md:mx-40">
        <h1 className="font-extrabold text-3xl mb-14">Assignment Analytics:</h1>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={assigementChart}>
            <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
            <XAxis dataKey="assigementNo" />
            <YAxis />
            <Tooltip />
            <Legend/>
            <Area
              type="monotone"
              dataKey="mark"
              fill="#8884d8"
              stroke="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
