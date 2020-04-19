import React, { Component } from 'react';

export default class AddComment extends Component {
	state = {
		invalidForm: true,
		formData: {
            content: '',
            commentUser: this.props.user,
            id: this.props.post._id,
		},
	};

	handleSubmit = (e) => {
        e.preventDefault();
		this.props.handleAddComment(this.state.formData);
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
            <>
				<div className="row wrapper">
					<form className="col s12" onSubmit={this.handleSubmit}>
						<div className="row">
							<div className="input-field col s12">
								<form>
									<input
										type="text"
										placeholder="Leave a Reply"
										autoComplete={'off'}
										value={this.state.name}
										name="content"
										onChange={this.handleChange}
										required
									/>
								</form>
							</div>
						</div>
						<div>
							<div>
								<button className="waves-effect waves-light btn blue-grey darken-4">REPLY</button>
							</div>
						</div>
					</form>
				</div>
			</>
		);
	}
}