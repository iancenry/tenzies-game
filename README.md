# Notes Web Application

- We can embed id to a function that helps manage state that is in parent  from child component to make it easier instead of accessing id props in child then passing it to the function that was passed down
```jsx
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