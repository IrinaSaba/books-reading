import { useState } from "react";
import Results from "../Results/Results";
import Statistics from "../Statistics/Statistics";
import "./StatisticsResultsStyle.css";
import React from "react";
import { getTheme } from "../../../redux/theme/themeSelector";
import { useSelector } from "react-redux";

const StatisticsResults = () => {
  const theme = useSelector(getTheme);
  const [arr, setArr] = useState([]);
  return (
    <div
      className="div_all"
      style={{
        backgroundColor: theme === "light" ? "white" : "white",
        //   color: theme === "light" ? "black" : "white",
        // height: "100vh",
      }}
    >
      <h3 className="result_text">Результати</h3>
      <Results arr={arr} setArr={setArr} />
      <div className="stat_block">
        <div className="stat_block_before"></div>
        <h3 className="stat_text">СТАТИСТИКА</h3>
        <div className="stat_block_after"></div>
      </div>
      <div className="scroll_block">
        <ul className="stat_list">
          <Statistics arr={arr} />
        </ul>
      </div>
    </div>
  );
};

export default StatisticsResults;

{
  /* <StatisticsResults/> */
}
