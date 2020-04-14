import React from 'react';
// import { Link } from 'react-router-dom';
import './GameListPage.css';

export default function GameListPage(props) {
    return (
      <div>
        <h1>Games</h1>
        {props.games.results.map(game =>
        <div>
          <a>{game.name}</a>
          <img id="images" src={game.background_image}/>
        </div>
        )}
      </div>
    );
  }