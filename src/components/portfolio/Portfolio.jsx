import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
// import {
//   featuredPortfolio,
//   contentPortfolio,
//   myPortfolio
// } from "./data.js";

// THIS LINK WORKS



// TRY PUTTING IMAGES IN AN IMAGES FOLDER INSIDE OF THE PORTFOLIO FOLDER, LIKE IN INTRO.JS



import Raspberry from "./raspberry.PNG";
import Casino from "./casino.PNG";
// import { Card } from "../card/Card";

const myPortfolio = [
  {
    id: 1,
    title: "Casino Kings",
    img: {Raspberry},
    github: "https://github.com/ccsxw6/Casino_Multiplayer",
    deployed: "https://casino-multiplayer.herokuapp.com/"
  },
  {
    id: 1,
    title: "Raspberry Jam Session",
    img: {Casino},
    github: "https://github.com/ccsxw6/Raspberry-Jam-Session",
    deployed: "https://ccsxw6.github.io/Raspberry-Jam-Session/"
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState("projects");
  // data is going to be what's stored in the myPortfolio component
  // const [data, setData] = useState([]);

  const list = [
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "assigments",
      title: "Assigments",
    },
  ];

  // useEffect(() => {
  //   switch (selected) {
  //     case "projects":
  //       setData(myPortfolio);
  //       console.log(myPortfolio);
  //       break;
  //     case "assigments":
  //       setData(myPortfolio);
  //       break;
  //     default:
  //       setData(myPortfolio);
  //   }
  // }, [selected]);


  return (
    <div className="wrapper" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          // Portfoliolist is the tabs to switch between project and assignments
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            key={item.id}
          />
        ))}
      </ul>

    {myPortfolio.map((d) => (
      <main className="card">
        <article>
          <img src="assets/right-arrow.png" className="wherethefuckisthisimage" alt="yo" key={d.id}/>
          <div className="text">
            <h3>{d.title}</h3>
            <p>{d.github}</p>
            <p>{d.deployed}</p>
          </div>
        </article>
      </main>

        ))}
    </div>
  );
}
