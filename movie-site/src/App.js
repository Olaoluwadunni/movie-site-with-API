import Header from "./components/header.js"
import {useState, useEffect} from 'react'
import './App.css';
import  axios from 'axios'
import MovieCard from "./components/movieCard.js";
const APIKEY = '6815cc82',BASEURL = 'http://www.omdbapi.com/';


function App() {

  const [state,setState] = useState([])
  const [search,setSearch] = useState('')

  //on page load
useEffect(()=>{
  setState()
},[])

//whenever a state value changes
// useEffect(()=>{
//   alert('state updated')
//   console.log(state)
// },[state])
 
const onChange =(e)=>{
  setSearch(e.target.value)
}
const _searchFunction = async (value = search)=>{
  try {
    
  
  if(!value)return alert('no value')
 const res = await axios.get(`${BASEURL}?s=${value}&apikey=${APIKEY}`) 
 console.log(res.data,' success')
 if(res.data.Response === "True"){

 setState(res.data.Search)
}else{
   setState([])
   alert('Movie not Found')
 }
//alert(value)
} catch (error) {
  console.log(error, ' error')
}
}

  return (
    <div className="App">
     <Header value={search} searchFunction={_searchFunction} onChangeFunction={onChange}/>
     <div className="wrapper">
     {(state && state.length > 0) ? 
     
      state.map(movie=>(
      <MovieCard title={movie.Title} year={movie.Year} img={movie.Poster} />
      ))
    :<p>Please search for a movie</p>}
        </div>
    </div>
  );
}

export default App;
