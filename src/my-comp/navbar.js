import { Link } from "react-router-dom";
import './navbar.css';
function NavBar() {
  return (
    <>

<nav>
        <a><img src="\logo1.webp" />Sangeet</a>
        
        <a Link to="/">Home</a>
        <a Link to="/search">Search</a>
        <a Link to="/playlist">My Playlist</a>
    </nav>
    </>
  );
}
export default NavBar;





