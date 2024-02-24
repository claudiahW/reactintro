import './App.css'

function App() {

  function handleClick(e) {
    console.log("Button clicked")
   }

  function handleSubmit(e){
    e.preventDefault()
    console.log("Form Submitted")
  }

   function handleTextChange(e) {
    console.log(e.target.value)
   }


  return (
    <div className="App">

     <button onClick={handleClick}>Do something</button>

    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleTextChange} />
      <button type="submit">Submit</button>

    </form>
    </div>
  )
}

export default App