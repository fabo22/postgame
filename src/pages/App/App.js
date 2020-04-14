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
          <nav className="blue-grey darken-4">
            <NavLink className="links" exact to="/">Posts</NavLink>
            <NavLink className="links"  exact to="/profile">Profile</NavLink>
            <NavLink className="links"  exact to="/games">Games</NavLink>
            <NavLink className="auth"  exact to="/signup">Sign Up</NavLink>
            <NavLink className="auth"  exact to="/login">Log In</NavLink>
            <NavLink className="auth"  to="" onClick={handleLogout}>Log Out</NavLink>
          </nav>
          {this.state.user ?
            <p>Welcome {this.state.user.name}!</p>
            :
            <p>Login or Signup today!</p>
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
          <Route exact path="/detail/:id" render={() => 
            <PostDetailPage
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