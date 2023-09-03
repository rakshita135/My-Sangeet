import { Link } from 'react-router-dom';
import './navbar.css';
function NavBar() {
  return (
    <>

<nav>
        <a><img src="\logo1.webp" />Sangeet</a>
        
        <Link to={"/"}><a>Home</a></Link>
       <Link to={"/playlist"} ><a>My Playlist</a></Link>
        <input type="text" placeholder="search"></input>
    </nav>
    </>
  );
}
export default NavBar;





