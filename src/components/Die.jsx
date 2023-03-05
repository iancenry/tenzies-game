
const Die = (props) => {
  const styles = {
    backgroundColor: props.held ? '#59E391': '#FFFFFF'
  }
  return (
    <div style={styles} className='die' onClick={props.hold}>{props.value}</div>
  )
}

export default Die