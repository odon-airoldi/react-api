import { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'

function App() {

  const actressesApi = 'https://lanciweb.github.io/demo/api/actresses/'

  const [actresses, setActresses] = useState([])



  function loadActresses() {
    fetch(actressesApi)
      .then(res => res.json())
      .then(data => {
        setActresses(data)
      })
  }

  useEffect(() => { loadActresses() }, [])


  return (
    <>

      {
        actresses.map(actress => (
          <div>{actress.name}</div>
        ))
      }

    </>
  )
}

export default App
