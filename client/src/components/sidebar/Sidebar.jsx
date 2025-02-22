import { useEffect,useState } from "react";
import axios from "axios";
import "./sidebar.css"
import { Link } from "react-router-dom";

export default function Sidebar() {

  const[cats,setCats]=useState([]);

  useEffect(()=>{

    const getCats= async()=>
      {
      const res= await axios.get("/categories")
      setCats(res.data)
    };
    getCats();

},[])
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://i.pinimg.com/736x/0f/b2/9d/0fb29d83c7632d7c19da491a704b4d2c.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique autem culpa commodi quidem, aperiam dolorem quaerat, vitae obcaecati consequuntur animi consequatur magnam corrupti omnis incidunt. Quaerat quas alias placeat et.</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            {cats.map((c, index)=>(
              <Link key ={index} to ={`/?cat=${c.name}`} className="link">
               <li className="sidebarListItem">{c.name}</li>
              </Link>
              

            ))}
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-x-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>

        </div>
    </div>
  )
}
