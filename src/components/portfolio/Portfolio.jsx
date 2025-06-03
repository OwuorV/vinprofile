import React from "react";
import "./portfolio.css";
import IMG from "../../assets/portfolio5.png";
import IMG_1 from "../../assets/portfolio2.jpg";
import IMG_2 from "../../assets/portfolio3.jpg";
import IMG_3 from "../../assets/portfolio4.jpg";
const data = [
  {
    tar: 1,
    image: IMG,
    title: "some Title",
    github: "https://#",
    demo: "https://#",
  },
  {
    tar: 2,
    image: IMG_1,
    title: "some Title",
    github: "https://#",
    demo: "https://#",
  },
  {
    tar: 3,
    image: IMG_2,
    title: "some Title",
    github: "https://#",
    demo: "https://#",
  },
  {
    tar: 4,
    image: IMG_3,
    title: "some Title",
    github: "https://#",
    demo: "https://#",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>my recent Work</h5>
      <h1>Projects</h1>
      <div className="container portfolio_container">
        {data.map(({ tar, image, title, github, demo }) => {
          return (
            <article className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_cta">
                <a href={github} className="btn">
                  tarus
                </a>
                <a href={demo} className="btn btn_primary">
                  Live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
