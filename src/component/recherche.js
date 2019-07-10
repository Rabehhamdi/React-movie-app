import React from 'react'; 
import './css/recherche.css';
import Etoile from './etoile'
 
function Index({ onChange,count,value = '',change=()=>{}}) {
  return (
    <div className="contenaire" >
    <form className="recherche">
        <input type="text" name="search" placeholder="Search.." onChange={(event) => { change(event.target.value)}} value={value}  />
      <button type="submit">Submit</button>
    </form>
    <div>
      <spam>  Minimum rating</spam>
      <div> 
          <Etoile  
            x={count}
            onChangeRating={(newRating) => {
              onChange(newRating)
            }}
            />
      </div>
    </div>
  </div>
     
  );
}

export default Index;
