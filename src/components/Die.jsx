
const Die = ({id, num, color, freeze, freezeDie}) => {
  return (
    <div className='die' onClick={()=> freezeDie()}>{num}</div>
  )
}

export default Die