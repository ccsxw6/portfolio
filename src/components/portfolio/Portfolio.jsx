import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
// import {
//   featuredPortfolio,
//   contentPortfolio,
//   myPortfolio
// } from "./data.js";

// THIS LINK WORKS
import Raspberry from "./raspberry.PNG"
import Casino from "./CasinoMultiplayer.PNG"

const myPortfolio = [
  {
    id: 1,
    // title: "Casino Kings",
    img: {Casino},
    // github: "https://github.com/ccsxw6/Casino_Multiplayer",
    // deployed: "https://casino-multiplayer.herokuapp.com/"
  }, 
  {
    id: 1,
    // title: "Raspberry Jam Session",
    img: {Raspberry},
    // github: "https://github.com/ccsxw6/Raspberry-Jam-Session",
    // deployed: "https://ccsxw6.github.io/Raspberry-Jam-Session/"
  }
]

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
        console.log(myPortfolio)
        break;
      // case "content":
      //   setData(contentPortfolio);
      //   break;
      default:
        setData(myPortfolio);
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
      {/* HAS SOMETHING TO DO WITH CSS */}
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              // src= {Raspberry}
              alt="Project"
            />
            {/* <h3>{d.title}</h3> */}
            {/* <p>{d.github}</p> */}
            {/* <p>{d.deployed}</p>  */}
          </div>
        ))}
      </div>
      {/* <img src={Raspberry} alt="YOOOOOOOOOO"/> */}
    </div>
  );
}
