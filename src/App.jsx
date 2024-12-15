import React, { useState, useEffect} from "react";
import "./App.css";
import starcity from "./assets/starcity.jpg";
import fish from "./assets/fish.jpg";
import highway from "./assets/highway.jpg";
import greenland from "./assets/greenland.jpg";
import bulb from "./assets/bulb.jpg";

const App = () => {
  const [items, setItems] = useState([
    {
      img: starcity,
      company: "Demigod",
      topic: "Star City",
      description:
        "A vibrant hub of endless possibilities, it blends innovation, culture, and community. With dazzling lights and dynamic energy, it’s a place where dreams thrive and aspirations come to life.",
    },
    {
      img: fish,
      company: "Demigod",
      topic: "Fish",
      description:
        "Gliding gracefully through water, these aquatic creatures captivate with their vibrant colors and diverse forms. They symbolize tranquility, adapt to varied habitats, and play a vital role in marine ecosystems.",
    },
    {
      img: highway,
      company: "Demigod",
      topic: "Highway",
      description:
        "Stretching endlessly across the landscape, it connects distant places, enabling journeys filled with adventure. A symbol of freedom and progress, it serves as a lifeline for trade, travel, and exploration.",
    },
    {
      img: greenland,
      company: "Demigod",
      topic: "Mountain",
      description:
        "Rising majestically into the sky, this natural giant offers breathtaking views and rugged beauty. It challenges climbers, shelters diverse wildlife, and inspires awe with its towering presence and timeless strength.",
    },
    {
      img: bulb,
      company: "Demigod",
      topic: "Bulb",
      description:
        "Emitting a warm glow, this ingenious invention brightens spaces and lives. A symbol of ideas and innovation, it transforms darkness into light, illuminating paths and fostering productivity and comfort.",
    },
  ]);

  const [posterItems, setPosterItems] = useState([
    {
      img: fish,
      company: "Demigod",
      topic: "Fish",
      description:
        "Gliding gracefully through water, these aquatic creatures captivate with their vibrant colors and diverse forms. They symbolize tranquility, adapt to varied habitats, and play a vital role in marine ecosystems.",
    },
    {
      img: highway,
      company: "Demigod",
      topic: "Highway",
      description:
        "Stretching endlessly across the landscape, it connects distant places, enabling journeys filled with adventure. A symbol of freedom and progress, it serves as a lifeline for trade, travel, and exploration.",
    },
    {
      img: greenland,
      company: "Demigod",
      topic: "Mountain",
      description:
        "Rising majestically into the sky, this natural giant offers breathtaking views and rugged beauty. It challenges climbers, shelters diverse wildlife, and inspires awe with its towering presence and timeless strength.",
    },
    {
      img: bulb,
      company: "Demigod",
      topic: "Bulb",
      description:
        "Emitting a warm glow, this ingenious invention brightens spaces and lives. A symbol of ideas and innovation, it transforms darkness into light, illuminating paths and fostering productivity and comfort.",
    },
    {
      img: starcity,
      company: "Demigod",
      topic: "Star City",
      description:
        "A vibrant hub of endless possibilities, it blends innovation, culture, and community. With dazzling lights and dynamic energy, it’s a place where dreams thrive and aspirations come to life.",
    }
  ]);

  // For animation class
  const [carouselClass, setCarouselClass] = useState(""); 




  const showSlider = (type) => {
    const updatedItems = [...items];
    const updatedPosterItems = [...posterItems];

    // Adding animation class
    setCarouselClass(type);

    if (type === "next") {
      updatedItems.push(updatedItems.shift());
      updatedPosterItems.push(updatedPosterItems.shift());
    } else {
      updatedItems.unshift(updatedItems.pop());
      updatedPosterItems.unshift(updatedPosterItems.pop());
    }

    setItems(updatedItems);
    setPosterItems(updatedPosterItems);
    
    //removing animation class
    setTimeout(() => setCarouselClass(""), 1500);
  };

  return (
    <div className={`carousel ${carouselClass}`}>
      {/* List of items */}
      <div className="list">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.img} alt={item.topic} />
    
            <div className="content">
              <h2 className="company">{item.company}</h2>
              <h1 className="topic">{item.topic}</h1>
              <p className="description">{item.description}</p>
            </div>
            <button>See More</button>
          </div>
        ))}
      </div>

      {/*posters*/}
      <div className="poster">
        {posterItems.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.img} alt={item.topic} />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="arrows">
        <button id="prev" onClick={() => showSlider("prev")}>
          &lt;
        </button>
        <button id="next" onClick={() => showSlider("next")}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default App;
