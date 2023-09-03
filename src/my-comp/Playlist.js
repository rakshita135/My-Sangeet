import './Playlist.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
function Playlist(){
    return(
        <>
          <div class="container">
<div id="playlist">
    <h3>Doreamon Theme Song</h3>
    <div class="num1">
<img src="" alt="" id="img1"/>
        <span class="songName">Zindagi Sawar Du</span>
        <span id="song1"><span>02:00</span><PlayArrowIcon/></span>
    </div>
    <div class="num1">

        <img src="" alt="" id="img1"/>
        <span class="songName">Aasmaa Mai Udeke</span>
        <span id="song1"><span>02:30</span><i class="fa songItemPlay fa-play" id="2" style={{fontSize:'24px', color:'black'}}></i></span>
    </div>
    <div class="num1">

        <img src="" alt="" id="img1"/>
        <span class="songName">Mai Hu Jiyaan</span>
        <span id="song1"><span>01:50</span><i class="fa songItemPlay fa-play" id="3" style={{fontSize:'24px', color:'black'}}></i></span>
    </div>
    <div class="num1">

        <img src="" alt="" id="img1"/>
        <span class="songName">Jeena Ka Sahi Dhang</span>
        <span id="song1"><span>02:45</span><i class="fa songItemPlay fa-play" id="4" style={{fontSize:'24px', color:'black'}}></i></span>
    </div>
    <div class="num1">

        <img src="" alt="" id="img1"/>
        <span class="songName">Sabse Pehle Hai Pyaar</span>
        <span id="song1"><span>02:00</span><i class="fa songItemPlay fa-play" id="5" style={{fontSize:'24px', color:'black'}}></i></span>
    </div>
</div>
<div id="banner">
    <img src="doreamon3.jpg" alt="" id="coverimage" style={{height: '300px', width: '300px'}} />
</div>
</div>
<div id="footer">
    <input type="range" name="range" id="myprogress" value="0"/>
    <div id="icons">
        <i class="fa fa-backward" id="previous" style={{fontSize:'24px',color:'white'}}></i>
        <i class="fa fa-play" id="play" style={{fontSize:'24px',color:'white'}}></i>
        <i class="fa fa-forward" id="next" style={{fontSize:'24px',color:'white'}}></i>
    </div>

</div>
        </>
    );
}
export default Playlist;