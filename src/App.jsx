import { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'

function App() {

  const actressesApi = 'https://lanciweb.github.io/demo/api/actresses/'
  const actorsApi = 'https://lanciweb.github.io/demo/api/actors/'

  const [actresses, setActresses] = useState([])
  const [actors, setActors] = useState([])
  const [actorsActresses, setActorsActresses] = useState([])

  function loadAct(urlApi, setFunction) {
    fetch(urlApi)
      .then(res => res.json())
      .then(data => {
        setFunction(data)
      })
  }

  useEffect(() => { loadAct(actressesApi, setActresses) }, [])
  useEffect(() => { loadAct(actorsApi, setActors) }, [])

  useEffect(() => { setActorsActresses([...actresses, ...actors]) }, [actors, actresses])

  // console.log(actorsActresses)


  return (
    <main>
      <section>
        <div className="container py-5">

          <h2>Actresses</h2>
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
                      <p className="small text-secondary">{actress.nationality}, born in {actress.birth_year}  </p>
                      <p className="small">{actress.biography}</p>
                    </div>
                    <div class="card-footer">
                      <h3 className="h6 text-secondary mb-1">Awards</h3>
                      <ul className="small list-unstyled text-secondary">
                        {
                          actress.awards.map((award, i) => (
                            <li key={i} className="">{award}</li>
                          ))
                        }
                      </ul>
                      <h3 className="h6 text-secondary mb-1">Most famous movies</h3>
                      <ul className="small list-unstyled text-secondary">
                        {
                          actress.most_famous_movies.map((item, i) => (
                            <li key={i} className="">{item}</li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

          <h2>Actors</h2>
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

          <h2>Actresses & actors</h2>
          <div className="row g-2">
            {
              actorsActresses.map(actress => (
                <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2" key={`${actress.birth_year}-${actress.id}`}>
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
