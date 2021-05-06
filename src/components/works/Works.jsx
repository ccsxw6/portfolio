import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      img:
        "assets/Vixen.jpg",
    },
    {
      id: "2",
      img:
        "assets/Pirates.jpg",
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
