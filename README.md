# Tenzies Web Application
- The tenzies game replicated in react.

![ten](https://user-images.githubusercontent.com/77986239/222986337-b3edfea5-eeec-45a4-b618-be5a16fe8be7.PNG)

- On winning when you match all dice there is a confetti.
![tenwin](https://user-images.githubusercontent.com/77986239/222986342-264a8add-8520-4571-a701-8d335abf1ac8.PNG)


## Quick Setup
1. Fork then clone the project into local machine 🍴
1. run 'npm install' in the root folder to install all the necessary packages 👩‍💻
1. Might have to run **npm install react-mde --force**  since it refuses to install
1. Happy coding 💻

* Dependencies used: nanoid, react-confetti

**NB:**
- Better management of data to avoid derived state -  We can embed id to a function that helps manage state that is in parent  from child component to make it easier instead of accessing id props in child then passing it to the function that was passed down
```js
//Prev
//In parent
<Die key={die.id} {...die} hold={holdDice} />
//In Child
<div style={styles} className='die' onClick={() => props.hold(props.id)}>{props.value}</div>

//Better
//In Parent  - the anonymus function calls holdDice with id as parameter
<Die key={die.id} {...die} hold={()=> holdDice(die.id)} />
//In Child
<div style={styles} className='die' onClick={props.hold}>{props.value}</div>
```

- Managing several internal states -  Use useEffect to keep two or more pieces of internal state in sync with each other; useEffect is not just for side effects
```js
  useEffect(()=>{
    //check if all dice are held and have same value
    const allHeld = dice.every(die => die.held)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if(allHeld && allSameValue) setTenzies(true)
  }, [dice])

```

TODO: 
1. Add real dots - CSS
2. Track number of rolls it took to win
3. Track the time it took to win
4. Save best time to localStorgae

> Side note - add routes and combine both the guessing game and this game

