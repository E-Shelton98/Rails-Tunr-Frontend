import React from 'react';

const Form = (props) => {
	const [formData, setFormData] = React.useState(props.song);

	//handleSubmit function to lift form input data to App.js
	const handleSubmit = (event) => {
		console.log('this is formData: ', formData);
		//Submit to App's desired function
		props.handleSubmit(formData);
		//push back up to display section.
		props.history.push('/');
	};

	//handleChange function to set formData to input from form
	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	//Form return to generate on web-page.
	return (
		<form onSubmit={handleSubmit}>
			<label id='name'>Name</label>
			<br />
			<input
				type='text'
				id='form-name'
				name='name'
				value={formData.name}
				onChange={handleChange}
			/>
			<br />
			<label id='artist'>Artist</label>
			<br />
			<input
				type='text'
				id='form-artist'
				name='artist'
				value={formData.artist}
				onChange={handleChange}
			/>
			<br />
			<label id='time'>Time</label>
			<br />
			<input
				type='text'
				id='form-time'
				name='time'
				value={formData.time}
				onChange={handleChange}
			/>
			<br />
			<input type='radio' id='fave-yes' name='favorite' value={true} />
			<label id='fave'>Favorite</label>
			<input type='radio' id='fave-no' name='favorite' value={false} />
			<label id='fave'>Not Favorite</label>
			<br />
			<input id='createButton' type='submit' value={props.label} />
		</form>
	);
};

export default Form;
