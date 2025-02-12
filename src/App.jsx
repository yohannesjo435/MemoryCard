import { useState } from 'react';
import Header from './Components/Header/Header.jsx';
import "./Components/Header/Header.css"
import Card from "./Components/Card/Card.jsx";
import "./Components/Card/Card.css";
import "./App.css";
import { configs } from '@eslint/js';

async function fetchData(search){
  const apiKey = "bIknBceXqgAZpI5o8CmN8WEd5WQdP0Cz";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=10`;
  const response = await fetch(url);
  const data = await response.json()
  // console.log(data)
  return data.data[0].images.original.url
}
// const image1 = await fetchData("Naruto");
// const image2 = await fetchData("sakura");
// const image3 = await fetchData("sasuke");
// const image4 = await fetchData("Kakashi");
// const image5 = await fetchData("Hinata");
// const image6 = await fetchData("Gaara");
// const image7 = await fetchData("Obito");
// const image8 = await fetchData("madara");
// const image9 = await fetchData("might guy");
// console.log("img", image1)
const  listOfImage = {
  image1: await fetchData("Naruto"),
  image2: await fetchData("sakura"),
  image3: await fetchData("sasuke"),
  image4: await fetchData("Kakashi"),
  image5: await fetchData("Hinata"),
  image6: await fetchData("Gaara"),
  image7: await fetchData("Obito"),
  image8: await fetchData("madara"),
  image9: await fetchData("might guy")
}
function App() {

  return (
    <>
    <Header></Header>
      <h4>Get points by clicking on an image but don`t click on any more than once!
      </h4>
      <div className='cardWrapper'>
        <Card cardImage={listOfImage.image1}></Card>
        <Card cardImage={listOfImage.image2}></Card>
        <Card cardImage={listOfImage.image3}></Card>
        <Card cardImage={listOfImage.image4}></Card>
        <Card cardImage={listOfImage.image5}></Card>
        <Card cardImage={listOfImage.image6}></Card>
        <Card cardImage={listOfImage.image7}></Card>
        <Card cardImage={listOfImage.image8}></Card>
        <Card cardImage={listOfImage.image9}></Card>
      </div>
    </>
  )
}

export default App
