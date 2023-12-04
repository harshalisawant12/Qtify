import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Section from './Components/Section';
import FilterSection from './Components/FilterSection';
function App() {
  const[topAlbums,setTopAlbums]=useState([]);
  const[newAlbums,setNewAlbums]=useState([]);
  const[songs, setSongs]=useState([]);
  const[genres, setGenres]=useState([]);
  const [FilteredSongs, setFilteredSongs]=useState([]);


  const ENDPOINT='https://qtify-backend-labs.crio.do/'
  useEffect(()=>{
   axios.get(`${ENDPOINT}albums/top`)
   .then(({data})=>{
    setTopAlbums(data);
   })
   axios.get(`${ENDPOINT}albums/new`)
   .then(({data})=>{
    setNewAlbums(data);
   })
   axios.get(`${ENDPOINT}songs`)
   .then(({data})=>{
    setSongs(data);
   })
   axios.get(`${ENDPOINT}songs`)
   .then(({data})=>{
    setFilteredSongs(data);
   })
 
   axios.get(`${ENDPOINT}genres`)
   .then(({data})=>{
    setGenres([{key: "All", label: "All"},...data.data]);
   })
  },[])
 
  return (
    <>
       <Navbar/>

       <HeroSection/>
       <Section navId='tal' title='Top Albums' data={topAlbums} />
       <Section navId='newal' title='New Albums' data={newAlbums} />
       <FilterSection title='Songs' data={FilteredSongs} filters={genres}
       executeFilter={(genres)=>{
        if(genres==='all'){
          setFilteredSongs(songs);
        } else{
          setFilteredSongs(songs.filter(song=>song.genre.key===genres))
        }
       }
       }/>
        {/* <FilterSection title='Songs' data={FilteredSongsByMood} filters={moods}
       executeFilter={(mood)=>{
        if(mood==='all'){
          setFilteredSongs(songs);
        } else{
          setFilteredSongs(songs.filter(song=>song.mood.key===mood))
        }
       }
       }/> */}
       </>
  );
}

export default App;
