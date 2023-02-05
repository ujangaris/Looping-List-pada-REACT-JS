import "./App.css"
import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props)
    const fruit1 = "mangga"
    const fruit2 = "apple"
    const fruit3 = "delima"
    // console.log(fruits[1])
  }
  render() {
    const fruits = ["mangga", "apple", "delima", "nanas"]
    const fruit = fruits.map((f, index) => <li key={index}>{f}</li>)
    return (
      <div>
        <h1>Daftar Buah</h1>
        <ul>{fruit}</ul>
      </div>
    )
  }
}

export default App
