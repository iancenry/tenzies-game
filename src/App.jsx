import { useState } from "react"
import Header from "./components/Header"
import Die from "./components/Die"
import Button from "./components/Button"

const App = () => {
  const [die, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  function randomDieValue(){
    return  Math.floor(Math.random() * 6) + 1
  }

  function allNewDice(){
    const newArray = []
    for(let i = 0; i < 10; i++ ){
      const newDie = {
        value : randomDieValue(),
        held : false,
        id: i + 1
      }
      newArray.push(newDie)
    }
    return newArray;
  }

  function rollUnheldDice(){
    if(!tenzies){
      setDice(oldDice => oldDice.map((die, i) => (
        die.held ? die: {value : randomDieValue(), held: false }
      )))
    }else{
      setDice(allNewDice())
      setTenzies(false)
    }
  }

  function holdDice(id){
    setDice(prevDice => prevDice.map(die => {
      return die.id === id? {...die, held: !die.held} : die
    }))
  }

  const diceElements = die.map(die => <Die key={die.id} {...die} hold={()=> holdDice()} />)
  

  return (
    <div className="container">
      {/* {tenzies && <Confetti/>} */}
      <Header />
      <div className="boxes">
        {diceElements}
      </div>
      <Button />
    </div>
  )
}

export default App