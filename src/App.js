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
    // menambahkan array manula
    // fruits[4] = "pisang"
    // menambahkan nialai array dengan push
    // fruits.push("semangka")
    // menghapus data dari belakang dengan pop()
    // fruits.pop()
    // menghapus data dari depan dengan shift()
    // fruits.shift()
    // menghapus data pada index tertentu dengan splice
    // fruits.splice(0, 2) //0 artinya dimulai dari, 2 artinya 2 nilai dari 0
    // mengecek sebuat data ada didalam array atau tidak includes()
    console.log(` Data yang dicari : ${fruits.includes("semangka")}`)

    const fruit = fruits.map((f, index) => <li key={index}>{f}</li>)
    const numbers = [1, 3, 5, 9, 2, 10]
    const number = numbers.filter((n) => n < 6)
    const num = number.map((n) => <li key={n.toString()}>{n}</li>)
    console.log(number)
    const total = numbers.reduce((value, acc) => value + acc)
    console.log(total)
    return (
      <div>
        <h1>Daftar Buah</h1>
        <ul>{fruit}</ul>
        <h1>Daftar Numbers</h1>
        <ul>{num}</ul>
        <h2>total numbers : {total}</h2>
      </div>
    )
  }
}

export default App
