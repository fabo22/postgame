import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import userService from '../../services/userService';
import * as gamesAPI from '../../services/gameapiService';
import postsAPI from '../../services/postsapiService';
import PostListPage from '../PostListPage/PostListPage';
import PostDetailPage from '../PostDetailPage/PostDetailPage';
import PostAddPage from '../PostAddPage/PostAddPage';
import PostEditPage from '../PostEditPage/PostEditPage';
import GamesListPage from '../GameListPage/GameListPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      games: [],
      posts: []
    }
  }

  async componentDidMount() {
    try {
      const games = await gamesAPI.getAllGames();
      this.setState({games});
      const posts = await postsAPI.getAllPosts();
      this.setState({posts});
    } catch (err) {
        console.log(err);
    }
  }
  
  handleAddPost = async (newPostData) => {
		try {
			const newPost = await postsAPI.create(newPostData);
			this.setState(
				(state) => ({
					posts: [...state.posts, newPost],
				}),
				() => this.props.history.push('/posts')
			);
		} catch (err) {
			console.log(err);
		}
	};

	handleDeletePost = async (id) => {
		try {
			await postsAPI.deleteOne(id);
			this.setState(
				(state) => ({
					posts: state.posts.filter((p) => p._id !== id),
				}),
				() => this.props.history.push('/posts')
			);
		} catch (err) {
			console.log(err);
		}
	};

	handleUpdatePost = async (updatedPostData) => {
		try {
			const updatedPost = await postsAPI.update(updatedPostData);
			const newPostsArray = this.state.posts.map((p) =>
				p._id === updatedPost._id ? updatedPost : p
			);
			this.setState({ channels: newPostsArray }, () =>
				this.props.history.push('/posts')
			);
		} catch (err) {
			console.log(err);
		}
	};

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
            <NavLink className="links" exact to="/posts">View All Posts</NavLink>
            <NavLink className="links" exact to="/new-post">Create a Post</NavLink>
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
          <Route exact path="/games" render={() => 
            <GamesListPage
            games={this.state.games}
            />
          } />
          <Route exact path="/posts" render={( history ) => 
            <PostListPage
            history={history}
            posts={this.state.posts}
            handleDeletePost={this.handleDeletePost}
            />
          } />
          <Route exact path="/edit-post" render={( history ) => 
            <PostEditPage
            user={this.state.user}
            handleUpdatePost={this.handleUpdatePost}
            />
          } />
          <Route exact path="/new-post" render={( history, location ) => 
            <PostAddPage
            user={this.state.user}
            handleAddPost={this.handleAddPost}
            location={location}
            />
          } />
          <Route exact path="/post-details" render={( location ) => 
            <PostDetailPage location={location}
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