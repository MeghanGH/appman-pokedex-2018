import React, { Component } from 'react'
import './App.css'
import BottomBar from './component/bottomBar'
import cardData from './cards.json'
import Cards from './component/card'

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}

class App extends Component {
  state = {
    cardData: null,
  }

  render() {
    console.log(cardData);
    return (
      <div className="App">
        <div className="head">My Pokedex</div>
        <div className="body">
          {cardData.cards.map((item) => {
            return <Cards cardData={item}></Cards>;
          })}
          
        </div>
        <BottomBar className="bottomBar">BottomBar</BottomBar>
      </div>
    )
  }
}

export default App
