import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Select } from 'react-materialize';
import './PostAddPage.css';

export default class PostAddPage extends Component {
	state = {
		invalidForm: true,
		formData: {
			title: '',
            content: '',
            userCount: 0,
            game: '',
            postUser: this.props.user
		},
	};

	handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddPost(this.state.formData);
    };
    
	handleChange = (e) => {
		const formData = {
			...this.state.formData,
			[e.target.name]: e.target.value,
		};
        this.setState({ formData });
	};

	render() {
		return (
            <div className="row wrapper" id="add-post">
                <h2 id="create-post-title">Create Post</h2>
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <form>
                                <input
                                    type="text"
                                    placeholder="Title"
                                    autoComplete={'off'}
                                    maxLength="30"
                                    value={this.state.title}
                                    name="title"
                                    onChange={this.handleChange}
                                    required
                                />
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                type="text"
                                maxLength="340"
                                placeholder="What's on your mind?"
                                value={this.state.content}
                                name="content"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                type="number"
                                placeholder="Number of gamers"
                                value={this.state.userCount}
                                name="userCount"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <Select
                        label="Choose a game"
                        multiple={false}
                        name="game"
                        options={{
                            classes: '',
                            dropdownOptions: {
                            alignment: 'left',
                            autoTrigger: true,
                            closeOnClick: true,
                            constrainWidth: true,
                            coverTrigger: true,
                            hover: false,
                            inDuration: 150,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            outDuration: 250
                            }
                        }}
                        value={this.state.game}
                        onChange={this.handleChange}
                    >
                        <option value="No Game Chosen">Choose a Game!</option>
                        <option value="Grand Theft Auto V">Grand Theft Auto V</option>
                        <option value="Portal">Portal</option>
                        <option value="Portal 2">Portal 2</option>
                        <option value="The Witcher 3: Wild Hunt">The Witcher 3: Wild Hunt</option>
                        <option value="The Elder Scrolls V: Skyrim">The Elder Scrolls V: Skyrim</option>
                        <option value="Left 4 Dead 2">Left 4 Dead 2</option>
                        <option value="Borderlands 2">Borderlands 2</option>
                        <option value="BioShock">BioShock</option>
                        <option value="BioShock Infinite">BioShock Infinite</option>
                        <option value="Life is Strange">Life is Strange</option>
                        <option value="Counter-Strike: Global Offensive">Counter-Strike: Global Offensive</option>
                        <option value="Tomb Raider (2013)">Tomb Raider (2013)</option>
                        <option value="Limbo">Limbo</option>
                        <option value="Half-Life 2">Half-Life 2</option>
                        <option value="Team Fortress 2">Team Fortress 2</option>
                        <option value="PAYDAY 2">PAYDAY 2</option>
                        <option value="Fallout 4">Fallout 4</option>
                        <option value="DOOM (2016)">DOOM (2016)</option>
                        <option value="Grand Theft Auto IV">Grand Theft Auto IV</option>
                        <option value="Red Dead Redemption 2">Red Dead Redemption 2</option>
                        <option value="League of Legends">League of Legends</option>
                        <option value="Defense of the Ancients 2">Defense of the Ancients 2</option>
                    </Select>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div>
                        <div>
                            <button className="waves-effect waves-light btn blue-grey darken-4">Create</button>
                            &nbsp;&nbsp;
                            <button className="waves-effect waves-light btn blue-grey darken-4">
                                <Link style={{ color: 'white' }} to="/">
                                    Cancel
                                </Link>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
		);
	}
}