import "./App.css"
import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props)
    // const fruit1 = "mangga"
    // const fruit2 = "apple"
    // const fruit3 = "delima"
    // const fruits = ["mangga", "apple", "delima", "nanas"]
    // cara pemanggilan
    // console.log(fruits[1])
  }
  render() {
    const fruits = ["mangga", "apple", "delima", "nanas"]
    const fruit = fruits.map((f, index) => <li key={index}>{f}</li>)
    const numbers = [1, 3, 5, 9, 2, 10]
    const number = numbers.filter((n) => n < 6)
    const num = number.map((n) => <li key={n.toString()}>{n}</li>)
    console.log(number)
    return (
      <div>
        <h1>Daftar Buah</h1>
        <ul>{fruit}</ul>
        <ul>{num}</ul>
      </div>
    )
  }
}

export default App
