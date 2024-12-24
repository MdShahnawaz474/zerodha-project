import React, { useState, useEffect } from "react";
import axios from "axios";
// import '../index.css'; 

const Summary = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [profitLoss, setProfitLoss] = useState(0);

  useEffect(() => {
    axios.get("https://zerodha-project-cr0x.onrender.com/allHoldings").then((res) => {
      const holdingsData = res.data;
      setAllHoldings(holdingsData);

      // Calculate total investment, current value, and profit/loss
      const totalInvest = holdingsData.reduce((acc, stock) => acc + stock.avg * stock.qty, 0);
      const curValue = holdingsData.reduce((acc, stock) => acc + stock.price * stock.qty, 0);
      const profLoss = curValue - totalInvest;

      setTotalInvestment(totalInvest);
      setCurrentValue(curValue);
      setProfitLoss(profLoss);
    });
  }, []);

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <h1 style={{ margin: 0 }}>Welcome to Kite!</h1>
      </div>

      <div style={{ marginBottom: "20px", padding: "10px" }}></div>

      {/* Equity Section */}
      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">  
        <h2>Margin available</h2>

          <h3>₹{totalInvestment.toLocaleString()}</h3>
        </div>

        <div className="second">
          <h2>
            Margins used: <span>₹{(currentValue - totalInvestment).toFixed(2)}</span>
          </h2>
          <p>
            Opening balance: <span>₹{totalInvestment.toLocaleString()}</span>
          </p>
        </div>
      </div>

      {/* Holdings and Profit/Loss Section */}
      <div className="section">
        <p>Holdings ({allHoldings.length})</p>
        <div className="first">
          <h3>
            ₹{profitLoss.toFixed(2)}
            <small>
              {totalInvestment !== 0
                ? ` (${((profitLoss / totalInvestment) * 100).toFixed(2)}%)`
                : " 0%"}
            </small>
          </h3>
          <p>P&L</p>
          <p>
            Current Value: <span>₹{currentValue.toLocaleString()}</span>
          </p>
          <p>
            Investment: <span>₹{totalInvestment.toLocaleString()}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Summary;
