import "./topbar.css"
import{ Link } from "react-router-dom";
import {useContext} from "react";
import {Context} from "../../context/Context";



export default function TopBar() {

const {user,dispatch} = useContext(Context);
const PF = "http://localhost:8080/images/"

const handleLogout=()=>{
  dispatch({type:"LOGOUT"})
};

  return (
    <div className="top">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-square-x-twitter"></i>
          <i className="topIcon fa-brands fa-square-pinterest"></i>
          <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        
        
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
             <Link className="link" to="/" >HOME</Link>
              </li>

            <li className="topListItem"><Link className="link" to="/" >ABOUT</Link></li>

            <li className="topListItem"><Link className="link" to="/" >CONTACT</Link></li>

            <li className="topListItem"><Link className="link" to="/write" >WRITE</Link></li>

            <li className="topListItem"><Link className="link" to="/settings" >SETTINGS</Link></li>

            <li className="topListItem" onClick={handleLogout}>{user&&"LOGOUT"}</li>

          </ul>
        </div>
        <div className="topRight">
          <Link to="/settings">
          {user ? (
          
              <img 
               className="topImg"
                src={PF + user.profilePic}
                 alt="" 
                />
          ):(
            
          
              <ul className="topList">
                <li className="topListItem">
                <Link className="link" to="/login" >LOGIN</Link>
                 </li>
                 
                 <ul className="topList">
                <li className="topListItem">
                <Link className="link" to="/login" >REGISTER</Link>
                 </li>
              
              </ul>
              </ul>
              
            
          )}
          
          </Link>
         <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    
    </div>
  );
}
