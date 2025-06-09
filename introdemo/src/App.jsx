import { useState } from 'react'


// const Hello = ({ name, age }) => {
//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

//Passing state - to child components
const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

//Conditional rendering
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}




const App = () => {

  //Page re-rendering and Stateful component
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)
  // const handleClick = () => {
  //   console.log('clicked')
  // }


  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  // console.log('rendering...', counter)

  
  

  //Event Handler
  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }
  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }


  //Complex state
//  const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

  // const handleLeftClick = () =>
  // setClicks({ ...clicks, left: clicks.left + 1 })

  // const handleRightClick = () =>
  // setClicks({ ...clicks, right: clicks.right + 1 })

  //Handling Array and asynchronous
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right) 
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right +1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  return (
    <div>
      {/* <Hello name='Maya' age={26 + 10} /> */}
      <Display counter={counter}/>
     <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />     
      <Button
        onClick={decreaseByOne}
        text='minus'
      />
      {/* Complex State 
      <div>
        {clicks.left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {clicks.right}
      </div> */}

      {/* Handling arrays and asynchronous */}
      <div>
        {left}
        {/* <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button> */}
        <Button onClick={handleLeftClick} text='left' />
        <Button onClick={handleRightClick} text='right' />
        {right}
        <p>{allClicks.join(' ')}</p>
        <p>total {total}</p>
        {/* Conditional rendering */}
        <History allClicks={allClicks} /> 
      </div>
    </div>
  )
}

export default App