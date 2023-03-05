import { useState } from "react"
import Header from "./components/Header"
import Die from "./components/Die"
import Button from "./components/Button"
import {nanoid} from 'nanoid'

const App = () => {
  const [die, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  function randomDieValue(){
    return  Math.ceil(Math.random() * 6)
  }

  // create an array of 10 objects that will be mapped to dice
  function allNewDice(){
    const newArray = []
    for(let i = 0; i < 10; i++ ){
      const newDie = {
        value : randomDieValue(), 
        held : false,
        id: nanoid()
      }
      newArray.push(newDie)
    }
    return newArray;
  }

  //an array of die components
  const diceElements = die.map(die => <Die key={die.id} {...die} hold={holdDice} />)


  function rollUnheldDice(){
    if(!tenzies){
      setDice(oldDice => oldDice.map((die, i) => (
        die.held ? die: {...die, value : randomDieValue(), held: false }
      )))
    }else{
      setDice(allNewDice())
      setTenzies(false)
    }
  }

  //change 'held' value of die onclick
  function holdDice(id){
    setDice(prevDice => prevDice.map(die => {
      return die.id === id? {...die, held: !die.held} : die
    }))
  }
  

  return (
    <div className="container">
      {/* {tenzies && <Confetti/>} */}
      <Header />
      <div className="boxes">
        {diceElements}
      </div>
      <Button tenzies={tenzies} rollUnheldDice={rollUnheldDice} />
    </div>
  )
}

export default App