import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import PostListPage from '../PostListPage/PostListPage';
import PostDetailPage from '../PostDetailPage/PostDetailPage';
import GamesListPage from '../GameListPage/GameListPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../services/userService';
import * as gamesAPI from '../../services/gameapiService';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      games: []
    }
  }

  async componentDidMount() {
    const games = await gamesAPI.getAllGames();
    console.log(games)
    this.setState({games});
  }

  render() {

    const handleLogout = () => {
      userService.logout();
      this.setState({user: null});
    }
  
    const handleSignupOrLogin = () => {
      this.setState({user: userService.getUser()});
    }

    return (
      <div className="App">
        <header>
          <nav>
            <NavLink exact to="/">Posts</NavLink>
            <NavLink exact to="/games">Games</NavLink>
            <NavLink exact to="/profile">Profile</NavLink>
            <NavLink exact to="/signup">Sign Up</NavLink>
            <NavLink exact to="/login">Log In</NavLink>
            <NavLink to="" onClick={handleLogout}>Log Out</NavLink>
          </nav>
          {this.user ?
        <p>Logged in as {this.user.name}</p>
        :
        <p>Not logged in.</p>
        }
        </header>
        <main>
          <Route exact path="/" render={() => 
            <PostListPage
            />
          } />
          <Route exact path="/games" render={() => 
            <GamesListPage
            games={this.state.games}
            />
          } />
          <Route exact path="/detail/:id" render={({ match }) => 
            <PostDetailPage
              match={match}
            />
          } />
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          } />
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          } />
        </main>
      </div>
    );
  }
}