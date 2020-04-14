import React from 'react';
import 'materialize-css';
// import { Link } from 'react-router-dom';
import './GameListPage.css';

export default function GameListPage(props) {
    return (
      <div>
        <h1>Games</h1>
        {props.games.results.map(game =>
         <div className="row">
         <div className="col s12 m6">
           <div className="card">
             <div className="card-image">
             <img id="images" src={game.background_image}/>
               <span className="card-title">{game.name}</span>
               <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">thumb_up</i></a>
             </div>
             <div className="card-content">
              <p>Release Date: {game.released}</p>
              <p>Rating: {game.rating}/5</p>
             </div>
           </div>
         </div>
       </div>
        )}
      </div>
    );
  }