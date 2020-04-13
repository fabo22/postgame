import React, {Component} from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import PostListPage from '../PostListPage/PostListPage';
import PostDetailPage from '../PostDetailPage/PostDetailPage';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink exact to="/">Posts</NavLink>
            <NavLink exact to="/profile">Profile</NavLink>
          </nav>
        </header>
        <main>
          <Route exact path="/" render={() => 
            <PostListPage/>
          } />
          <Route exact path="/detail/:id" render={({match}) => 
            <PostDetailPage
              match={match}
            />
          } />
        </main>
      </div>
    );
  }
}