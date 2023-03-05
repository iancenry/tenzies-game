import { useState, useEffect } from "react"
import Header from "./components/Header"
import Die from "./components/Die"
import Button from "./components/Button"
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

const App = () => {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  
  useEffect(()=>{
    //check if all dice are held and have same value
    if(dice.every(die => die.value === dice[0].value && die.held)){
      setTenzies(prevValue => !prevValue)
    }
  }, [dice])

  //generate random num for die face
  function randomDieValue(){
    return  Math.ceil(Math.random() * 6)
  }
  //generate new die
  function generateNewDie(){
    return {
        value : randomDieValue(), 
        held : false,
        id: nanoid()      
    }
  }

  // create an array of 10 objects that will be mapped to create dice
  function allNewDice(){
    const newArray = []
    for(let i = 0; i < 10; i++ ){
      newArray.push(generateNewDie())
    }
    return newArray;
  }

  

  function rollUnheldDice(){

    setDice(oldDice => oldDice.map((die, i) => (
      die.held ? die : generateNewDie()
    )))

    /*
    if(!tenzies){
      //only roll unheld dice; if held keep the die as part of our array else create new die
      setDice(oldDice => oldDice.map((die, i) => (
        die.held ? die : generateNewDie
      )))
    }else{
      setDice(allNewDice())
      setTenzies(false)
    }*/
  }

  //flip 'held' property of die onclick
  function holdDice(id){
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? {...die, held: !die.held} : die
    }))
  }

  //an array of die components
  const diceElements = dice.map(die => <Die key={die.id} {...die} hold={()=> holdDice(die.id)} />)

  

  return (
    <div className="container">
      {tenzies && <Confetti/>}
      <Header />
      <div className="boxes">
        {diceElements}
      </div>
      <Button tenzies={tenzies} rollUnheldDice={rollUnheldDice} />
    </div>
  )
}

export default App
