import { useEffect, useState } from 'react';
import Header from './Components/Header/Header.jsx';
import "./Components/Header/Header.css"
import Card from "./Components/Card/Card.jsx";
import "./Components/Card/Card.css";
import "./App.css";
import WinAlert from './Components/WinAlert.jsx'
import { configs } from '@eslint/js';


function App() {
  const [listOfImage, setListOfImage] = useState({})
  const [shuffledImages, setShuffledImages] = useState({})
  const [clickedItems, setClickedItem] = useState([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [highestBestScore, setHighestBestScore] = useState(0)
  const [wonRound, setWonRound] = useState(false)

  useEffect(() => {  
    async function fetchData(search){
      const apiKey = "UhhzsgW43hLVVltKhh3pOUsNdCwkkwpR";
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=10`;
      const response = await fetch(url);
      const data = await response.json()
      // console.log(data)
      return data.data[0].images.original.url
    }

    const getImages = async function () {
      const images = { 
        image1: await fetchData("Naruto"),
        image2: await fetchData("sarada"),
        image3: await fetchData("sasuke"),
        image4: await fetchData("Kakashi"),
        image5: await fetchData("Hinata"),
        image6: await fetchData("Gaara"),
        image7: await fetchData("Obito"),
        image8: await fetchData("madara"),
        image9: await fetchData("might guy"),
        image10: await fetchData("neji"),
      }
  
      setListOfImage(images)
      setShuffledImages(images)
    }
    getImages()
  }, [])
  
    function shuffleCard(listOfImage) {
      const imageArr = Object.entries(listOfImage);

      let shuffledImage;
      for (let i = imageArr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [imageArr[i], imageArr[j]] = [imageArr[j], imageArr[i]]
      }
      shuffledImage = Object.fromEntries(imageArr)
      return shuffledImage;
    }
    
    function handleShuffle(){
      const newShuffledImages = shuffleCard(listOfImage)
      setShuffledImages(newShuffledImages)
    }
    function checkWin() {
      const sizeOftheCard = Object.keys(shuffledImages).length;
      if (score === sizeOftheCard - 1){
        console.log("You won")
        restartTheGame()
        setWonRound(true)
      }
    }
    function handleClick(clickedItem) {
      checkWin();
      if (clickedItems.includes(clickedItem)) {
        console.log("You clicked it again");
        if (score > highestBestScore) {
          setHighestBestScore(score);
        }
        restartTheGame();
      } else {
        setClickedItem([...clickedItems, clickedItem]);
        handleShuffle();
        setScore(prevScore => prevScore + 1);
        setBestScore(prevBestScore => prevBestScore + 1);
      }
    }
    function restartTheGame(){
      setClickedItem([])
      setScore(0)
      setWonRound(false)

    }
  
    return (
      <>
        <Header score= {score} bestScore={highestBestScore}/>
        <h4>Get points by clicking on an image but don’t click on any more than once!</h4>
        {wonRound?<WinAlert handleRestart={restartTheGame}></WinAlert>: 
          <>          
            <button className='btn1' onClick={()=> restartTheGame()}>Restart</button>
            <div className='cardWrapper'>
              {Object.entries(shuffledImages).map(([key, image]) => (
                <Card key={key} handleClick={() => handleClick(key)} cardImage={image}></Card>
              ))}
            </div>
          </>
        }
      </>
    );
  }
  

export default App
