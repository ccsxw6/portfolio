import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  contentPortfolio,
  myPortfolio
} from "../../data";

import Raspberry from "../../Assets/raspberry"

export default function Portfolio() {
  const [selected, setSelected] = useState("projects");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "assigments",
      title: "Assigments",
    }, 
    {
      id: "content", 
      title: "Content"
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "projects":
        setData(myPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt="Project"
            />
            {/* <h3>{d.title}</h3>
            <p>{d.github}</p>
            <p>{d.deployed}</p> */}
          </div>
        ))}
      </div>

    <img src={Raspberry} alt=""/>
    </div>
  );
}
