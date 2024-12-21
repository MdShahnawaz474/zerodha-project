import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [profitLoss, setProfitLoss] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8000/allHoldings").then((res) => {
      const holdingsData = res.data;
      setAllHoldings(holdingsData);

      const totalInvest = holdingsData.reduce((acc, stock) => acc + stock.avg * stock.qty, 0);
      const curValue = holdingsData.reduce((acc, stock) => acc + stock.price * stock.qty, 0);
      const profLoss = curValue - totalInvest;

      setTotalInvestment(totalInvest);
      setCurrentValue(curValue);
      setProfitLoss(profLoss);
    });
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: ["rgba(255, 99, 132, 0.5)","rgba(75, 192, 192, 0.5)"]
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>₹{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            ₹{totalInvestment.toFixed(2)}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            ₹{currentValue.toFixed(2)}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>₹{profitLoss.toFixed(2)} ({((profitLoss / totalInvestment) * 100).toFixed(2)}%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
