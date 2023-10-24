import './App.css'
let a=5;
function App() {

  function handleChange(){
   alert("Hello")
  }

  // if(1){
  // return (<div>pranav</div>)
  // }else{
  // return (<div>verma</div>)
  // }

  //OR

  return (
  <>
  
    {a==5?
    <>
    <div onClick={handleChange}>Ravi</div><div>xxxxxxxxx</div>
    </> : <div>Verma</div>
    }
        
  </>
  )
  
    
}

export default App
