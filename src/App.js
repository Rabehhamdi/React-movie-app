import React , {Component} from 'react'; 
import './App.css';
import Index from './component/recherche'
import Liste from './component/liste'

let tab = [
  {
    id:"worlds end",
    name: "worlds end",
    img: "https://bloody-disgusting.com/wp-content/uploads/2013/07/worlds_end_ver13_xlg.jpg",
    etoile: 4,
    description: "sdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdgsdgsdfgsdfs"
  },
  { 
    name: "filme 2",
    img: "http://fr.web.img6.acsta.net/pictures/18/08/30/16/26/3768663.jpg",
    etoile: 2,
    description: "sdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdgsdgsdfgsdfs"
  },
  { 
    name: "filme 3",
    img: "https://m.media-amazon.com/images/M/MV5BMTg5Mjk2NDMtZTk0Ny00YTQ0LWIzYWEtMWI5MGQ0Mjg1OTNkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    etoile: 3,
    description: "sdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdgsdgsdfgsdfs"
  },
  { 
    name: "filme 4",
    img: "http://fr.web.img2.acsta.net/pictures/19/04/04/09/04/0472053.jpg",
    etoile: 5,
    description: "sdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdgsdgsdfgsdfs"
  },
]

class App extends Component {
  constructor(propos){
    super(propos)
    this.state={
      minimumEtoile :1,
      movies:tab,
      titrefilter:''
    }
  }

  addNewMovie(newMovie) {
    this.setState({
      movies: this.state.movies.concat(newMovie)
    })
  }

  render()
  {
    return (
      <div className="App">
        <Index 
            count= {this.state.minimumEtoile}
              onChange={(newRating) => { 
                this.setState({
                  minimumEtoile: newRating
                })
              }} 
            value={this.state.titrefilter}
            change={(newtitreFilter)=>{
                this.setState({
                  titrefilter: newtitreFilter
                })
            }
            }
        />
        <Liste 
          donnes={this.state.movies.filter(el => el.etoile>= this.state.minimumEtoile && el.name.toLocaleLowerCase().includes(this.state.titrefilter.toLocaleLowerCase().trim()))}
          onAddMovie={(ch) => this.addNewMovie(ch)}  />
      </div>
    )
  }
}

export default App;
