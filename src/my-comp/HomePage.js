import SongData from '../constants/songdata';
import './HomePage.css';
import MediaCard from './card';
import { Grid } from '@mui/material';

function HomePage() {
    return (
        <>
<div class="scroll-container">
  <img src="\concert1.jpg" alt="Cinque Terre" className='image' width="600" height="400"/>
  <img src="\concert2.jpeg" alt="Forest" className='image' width="600" height="400"/>
  <img src="\concert3.jpeg" alt="Northern Lights" className='image' width="600" height="400"/>
  <img src="\logo1.webp" alt="Northern Lights" className='image' width="600" height="400"/>
</div>
  
        <div className='backimage'>
<div className='text2'>Music is the Medicine of Mind.</div>
<div id='buttons'>
<button type="button" class="btn btn-outline-warning">Melodies</button>
<button type="button" class="btn btn-outline-warning">90's HIts</button>
<button type="button" class="btn btn-outline-warning">Energetic</button>
<button type="button" class="btn btn-outline-warning">Bhakti</button>
</div>
</div>
<div id='diy-cards' className=''>

<Grid container>
        {SongData.map((song,index)=>{
                return <>
                <Grid item xs={6} md={6}>
                <MediaCard song={song.songname}
                singer={song.singer}
                image={song.coverimg}/>
                </Grid>
                </>
        })}
        </Grid>

</div>





        </>
    );
}
export default HomePage;
