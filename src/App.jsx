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
    <main>
      <section>
        <div className="container py-5">
          <div className="row g-2">
            {
              actresses.map(actress => (
                <div className="col-4" key={actress.id}>
                  <div className="card">
                    <img className="card-img-top" src={actress.image} alt={actress.name} />
                    <div className="card-body">
                      <h5 className="card-title">{actress.name}</h5>
                      <ul className="small list-unstyled">
                        <li>{actress.birth_year}</li>
                        <li>{actress.nationality}</li>
                        {
                          actress.awards.map((award, i) => (
                            <li key={i}>{award}</li>
                          ))
                        }
                      </ul>
                      <p className="small">{actress.biography}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
