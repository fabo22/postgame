import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PostEditPage extends Component {
	state = {
		invalidForm: false,
		formData: this.props.location.state.post,
	};

	formRef = React.createRef();

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleUpdatePost(this.state.formData);
	};

	handleChange = (e) => {
		const formData = {
			...this.state.formData,
			[e.target.name]: e.target.value,
		};
		this.setState({
			formData,
			invalidForm: !this.formRef.current.checkValidity(),
		});
	};

	render() {
		return (
			<>
				<div className="wrapper row">
					<h1>Edit Post</h1>
					<form
					className="col s12"
						ref={this.formRef}
						autoComplete="off"
						onSubmit={this.handleSubmit}
					>
						<div className="input-field col s12">
							<label>Title: </label>
							<input
							className="validate"
								type="text"
								name="title"
								value={this.state.formData.title}
								onChange={this.handleChange}
								required
							/>
                        </div>
						<div className="input-field col s12">
							<label>Content: </label>
							<input
							className="validate"
								type="text"
								name="content"
								value={this.state.formData.content}
								onChange={this.handleChange}
								required
							/>
						</div>
						<button
							className="waves-effect waves-light btn"
							type="submit"
							disabled={this.state.invalidForm}
						>
							Save Changes
						</button>
						&nbsp;&nbsp;
						<button className="waves-effect waves-light btn blue-grey darken-4">
						<Link style={{color: 'white'}} to="/posts">Cancel</Link>
						</button>
					</form>
				</div>
			</>
		);
	}
}