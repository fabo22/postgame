import React, {Component} from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import PostListPage from '../PostListPage/PostListPage';
import PostDetailPage from '../PostDetailPage/PostDetailPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../services/userService';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user:userService.getUser()
    }
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
            <NavLink exact to="/profile">Profile</NavLink>
            <NavLink exact to="/signup">Sign Up</NavLink>
            <NavLink exact to="/login">Log In</NavLink>
            <NavLink to="" onClick={handleLogout}>Log Out</NavLink>
          </nav>
          {this.user ?
        <p>Logged in as {this.user.nickname}</p>
        :
        <p>Not logged in.</p>
        }
        </header>
        <main>
          <Route exact path="/" render={() => 
            <PostListPage
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