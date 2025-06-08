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
    </div>
  )
}

export default App