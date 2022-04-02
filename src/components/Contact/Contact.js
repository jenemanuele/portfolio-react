import React, { useState } from 'react';
import Contact from '.';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ 
        name: '', 
        email: '', 
        message:'',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

	const handleSubmit = (e) => {
		e.prevent.Default();
		if (!errorMessage) {
		setFormState({ [e.target.name]: e.target.value });
		console.log('Form', formState);
		}
	};

	const handleChange = (e) => {
		if (e.target.name === 'email') {
		const isValid = validateEmail(e.target.value);
		if (!isValid) {
			setErrorMessage('Your email is invalid.');
			} else {
				setErrorMessage('');
			}
			} else {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage('');
			}
		}
	};

	function handleBlank(e) {
		if (e.target.name === "Name" || e.target.name === "Message") {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}
	return (
		<section>
			<div className="center">
				<h2 className="page-header">Contact Me</h2>
			</div>
			<div>
				<form id="contact-form">
					<div>
						<label htmlFor="Name">Name:</label>
						<br></br>
						<input
							type="text"
							defaultValue={name}
							onBlur={handleBlank}
							name="Name"
						/>
					</div>
					<div>
						<label htmlFor="email">Email address:</label>
						<br></br>
						<input
							type="email"
							defaultValue={email}
							name="email"
							onBlur={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="Message">Message:</label>
						<br></br>
						<textarea
							name="Message"
							defaultValue={message}
							onBlur={handleBlank}
							rows="5"
						/>
					</div>
					{errorMessage && (
						<div>
							<p className="error-text">{errorMessage}</p>
						</div>
					)}
					<button type="submit">Submit</button>
				</form>
			</div>
		</section>
	);
}
export default ContactForm;