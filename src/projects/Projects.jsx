import "./projects.css";
import clothingImg from "../assets/clothingAPI.png";
const Projects = () => {
  const items = [
    {
      id: 1,
      title: "ClothingAPI",
      subtitle: "The more Fast API",
      img: clothingImg,
      link: "https://clothingapi.netlify.app",
      github: "https://github.com/Mateo-Alvarez1/ClothingApi",
    },
  ];

  return (
    <div className="projectContainer" id="projects">
      <h1>Projects</h1>
      <div className="containerCard">
        {items.map((item) => (
          <div key={item.id} className="card">
            <div className="itemCard" key={item.id}>
              <h1 style={{ color: "#fff" }}>{item.title}</h1>
              <h2>{item.subtitle}</h2>
              <img src={item.img} alt={item.title} />
              <div className="button">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <button className="buttons design">Demo</button>
                </a>
                <a href={item.github} target="_blank" rel="noopener noreferrer">
                  <button className="buttons design">Repo</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
