import axios from "axios";
import { useEffect, useState } from "react"
import "./sidebar.css"
import {Link} from "react-router-dom"

export default function Sidebar() {
  const [cats, setCats] = useState ([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories")
      setCats(res.data)
    };
    getCats();
  },[]);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://images.pexels.com/photos/2923672/pexels-photo-2923672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="" 
        />
        <p> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tenetur accusantium labore adipisci excepturi veritatis pariatur quia, 
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATAGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem"> {c.name} </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook-square"></i>
            <i className="sidebarIcon fa-brands fa-twitter-square"></i>
            <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
            <i className="sidebarIcon fa-brands fa-instagram-square"></i>
          </div>
      </div>
    </div>
  )
}
