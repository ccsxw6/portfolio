import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";


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
    title: "Reading List App",
    img: process.env.PUBLIC_URL + "/imgs/reading.gif",
    github: "https://github.com/ccsxw6/reading-list-app",
    deployed: "https://hidden-fortress-30219.herokuapp.com/"
  },
];

const hmwkAssignments = [
  {
    id: 4,
    title: "Budget-Tracker",
    img: process.env.PUBLIC_URL + "/imgs/budget_tracker.gif",
    github: "https://github.com/ccsxw6/Budget-Tracker",
    deployed: "https://shrouded-dusk-43560.herokuapp.com/"
  },
  {
    id: 5,
    title: "Workout-Tracker",
    img: process.env.PUBLIC_URL + "/imgs/workout.gif",
    github: "https://github.com/ccsxw6/Workout_Tracker",
    deployed: "https://sleepy-shelf-44227.herokuapp.com/?id=60579defdfa690001543b029"
  },
  {
    id: 6,
    title: "Burger-Logger",
    img: process.env.PUBLIC_URL + "/imgs/burger.gif",
    github: "https://github.com/ccsxw6/Burger-Logger",
    deployed: "https://polar-ridge-96912.herokuapp.com/burgers"
  },
];

const inProgress = [
  {
    id: 7,
    title: "Reading List App",
    img: process.env.PUBLIC_URL + "/imgs/reading.gif",
    github: "https://github.com/ccsxw6/reading-list-app",
    deployed: "https://reading-app-list.herokuapp.com/"
  }, 
]

export default function Portfolio() {
  const [selected, setSelected] = useState("projects");
  // data is going to be what's stored in the myPortfolio component
  const [data, setData] = useState([]);

  const list = [
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "assignments",
      title: "Assignments",
    },
    {
      id: "inProgress",
      title: "In Progress",
    },
  ];

  useEffect(() => {
    // if selected = etc...
    switch (selected) {
      case "projects":
        setData(myPortfolio);
        console.log(myPortfolio);
        break;
      case "assignments":
        setData(hmwkAssignments);
        break;
      case "inProgress":
        setData(inProgress);
        break;
      default:
        setData(myPortfolio);
    }
  }, [selected]);


  return (
    <div className="aboutWrapper" id="portfolio">
      <div className="list">
        <h1>Portfolio</h1>
        <ul>
          {list.map((item) => (
            // Portfoliolist = the tabs to switch between project and assignments
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
              key={item.id}
            />
          ))}
        </ul>
      </div>

  <div className="grid-container">
    {data.map((d) => (
      <div className="cardWrapper">
          <img 
          src={d.img} 
          alt="project" 
          key={d.id}
          />
          <div className="projInfo">
            <h3>{d.title}</h3>
            <p>
            <a target="_blank" rel="noopener noreferrer" href={d.github}>GitHub Repo</a>
            </p>
            <p>
            <a target="_blank" rel="noopener noreferrer" href={d.deployed}>Deployed Link</a>
            </p> 
          </div>
      </div>
        ))}
    </div>
    </div>
  );
}
