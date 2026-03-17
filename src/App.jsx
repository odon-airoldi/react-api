import { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'

function App() {

  const actressesApi = 'https://lanciweb.github.io/demo/api/actresses/'
  const actorsApi = 'https://lanciweb.github.io/demo/api/actors/'

  const [actresses, setActresses] = useState([])
  const [actors, setActors] = useState([])

  function loadAct(urlApi, setFunction) {
    fetch(urlApi)
      .then(res => res.json())
      .then(data => {
        setFunction(data)
      })
  }

  useEffect(() => { loadAct(actressesApi, setActresses) }, [])
  useEffect(() => { loadAct(actorsApi, setActors) }, [])



  return (
    <main>
      <section>
        <div className="container py-5">
          <div className="row g-2">
            {
              actresses.map(actress => (
                <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2" key={actress.id}>
                  <div className="card h-100">
                    <div className="ratio ratio-1x1">
                      <img className="card-img-top object-fit-cover" src={actress.image} alt={actress.name} />
                    </div>
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
          <div className="row g-2">
            {
              actors.map(actress => (
                <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2" key={actress.id}>
                  <div className="card h-100">
                    <div className="ratio ratio-1x1">
                      <img className="card-img-top object-fit-cover" src={actress.image} alt={actress.name} />
                    </div>
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
