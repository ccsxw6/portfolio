// import { useState } from "react";
import "./works.scss";

export default function Works() {
  // const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      img:
        "/imgs/Vixen.jpg",
    },
    {
      id: "2",
      img:
        "/imgs/Pirates.jpg",
    },
  ];
  
  return (
    <div className="works" id="works">
        {data.map((d) => (
          <div className="container">
                <img
                  src={d.img}
                  alt=""
                />
            </div>
        ))}
      </div>
  );
}
