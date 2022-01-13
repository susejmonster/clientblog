import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img className = "image"
          src="https://scontent.fdel29-1.fna.fbcdn.net/v/t1.6435-9/67136951_10158173098973475_2684914636620300288_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=giIaS1bgj6YAX-Wjpno&_nc_ht=scontent.fdel29-1.fna&oh=00_AT-qVAyjFxvIlX3X7CloBYF4qQM9Kf_AdeplrHNoPc8Snw&oe=61E8FAA9"
          alt=""
        />
        <p>
          HI! My name is nandini gupta. I work as a professor and like travelling
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Learn more</span>
        <div className="sidebarSocial">
          <a href = "https://www.facebook.com/nandini.iitk/photos"><i className="sidebarIcon fab fa-facebook-square" ></i></a>
          <i className="sidebarIcon fab fa-twitter-square" ></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
