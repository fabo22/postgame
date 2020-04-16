import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PostAddPage extends Component {
	state = {
		invalidForm: true,
		formData: {
			title: '',
			content: '',
            postGame: this.props.game,
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
            <div className="row wrapper">
                <h2>Create Post</h2>
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <form>
                                <input
                                    type="text"
                                    placeholder="Title"
                                    autoComplete={'off'}
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
                                placeholder="What's on your mind?"
                                value={this.state.content}
                                name="content"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
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