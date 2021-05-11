import { useState } from "react";
// import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
// import {
//   featuredPortfolio,
//   contentPortfolio,
//   myPortfolio
// } from "./data.js";

// THIS LINK WORKS



// TRY PUTTING IMAGES IN AN IMAGES FOLDER INSIDE OF THE PORTFOLIO FOLDER, LIKE IN INTRO.JS



// import Raspberry from "/imgs/raspberry.png";
// import Casino from "/imgs/casino.png";
// import { Card } from "../card/Card";


const myPortfolio = [
  {
    id: 1,
    title: "Casino Kings",
    img: process.env.PUBLIC_URL + "/imgs/casino.png",
    github: "https://github.com/ccsxw6/Casino_Multiplayer",
    deployed: "https://casino-multiplayer.herokuapp.com/"
  },
  {
    id: 2,
    title: "Learn Something New",
    img: process.env.PUBLIC_URL + "/imgs/flashcard.gif",
    github: "https://github.com/ccsxw6/Learn-Something-New",
    deployed: "https://still-retreat-71642.herokuapp.com/"
  },
  {
    id: 3,
    title: "Raspberry Jam Session",
    img: process.env.PUBLIC_URL + "/imgs/raspberry.png",
    github: "https://github.com/ccsxw6/Raspberry-Jam-Session",
    deployed: "https://ccsxw6.github.io/Raspberry-Jam-Session/"
  },
];

export default function Portfolio() {
  // const [selected, setSelected] = useState("projects");
  // data is going to be what's stored in the myPortfolio component
  // const [data, setData] = useState([]);


  // const list = [
  //   {
  //     id: "projects",
  //     title: "Projects",
  //   },
  //   {
  //     id: "assigments",
  //     title: "Assigments",
  //   },
  // ];

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
    // <div className="wrapper" id="portfolio">
    //   <div className="list">
    //     <h1>Portfolio</h1>
    //     <ul>
    //       {list.map((item) => (
    //         // Portfoliolist is the tabs to switch between project and assignments
    //         <PortfolioList
    //           title={item.title}
    //           active={selected === item.id}
    //           setSelected={setSelected}
    //           id={item.id}
    //           key={item.id}
    //         />
    //       ))}
    //     </ul>
    //   </div>
  <div className="grid-container">
    {myPortfolio.map((d) => (
      <div className="cardWrapper">
          <img 
          src={d.img} 
          alt="yo" 
          key={d.id}
          />
          <div className="projInfo">
            <h3>{d.title}</h3>
            
            <p>
            <a target="_blank" rel="noopener noreferrer" href={d.github}>{d.github}</a>
            </p>

            <p>
            <a target="_blank" rel="noopener noreferrer" href={d.deployed}>{d.deployed}</a>
            </p> 
          </div>
      </div>
        ))}
    </div>
  );
}
