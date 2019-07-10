import React from 'react'; 
import './css/liste.css';   
import Etoile from './etoile'
function Itemcountries(props) {

    return (
        <div className="item">
            <div className="card" style={{width : '18rem'  }}>
                <img className="card-img-top" src={props.item.img} style={{ width: '285px', height:'300px' }} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.item.name}  <Etoile  onChangeRating ={()=>{}} x={props.item.etoile} /></h5>
                    <p className="card-text">{props.item.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

 

function Liste({ donnes, movies = [], onAddMovie = () => { } }) {
    return (
        <div className="cadre">
            <div className="Liste">
                
                {donnes.map((el, index) => <Itemcountries item={el} key={el.id} />)}
                <div className="card" style={{ width: '18rem' }}>
                    <center>
                        <div onClick={() => 
                        {onAddMovie ({
                            id: 'newmov', 
                            etoile: prompt("etoile ="),
                            img: prompt("img ="),
                            name: prompt("name ="),
                            description: prompt("Description =")})
                        }
                        } > 
                            <img src="https://img.icons8.com/bubbles/100/000000/plus.png"/>
                        </div>
                    </center>
                </div>
            </div>
            
        </div>
    );
}

export default Liste;