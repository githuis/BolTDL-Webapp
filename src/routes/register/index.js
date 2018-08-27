import { h, Component } from 'preact';

import TextField from 'preact-material-components/TextField';
import 'preact-material-components/TextField/style.css';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';

import style from './style.css';

import Snackbar from 'preact-material-components/Snackbar';
import 'preact-material-components/Snackbar/style.css';


export default class Register extends Component {
	constructor(props) {
		super(props);


		this.submit = (ev) => {
			ev.preventDefault();

			const formData = new FormData(ev.target);


			fetch('/api/register', {
				credentials: 'same-origin',
				method: 'post',
				body: formData
			}).then(response => {
				if (response.ok) {
					{
						this.bar.MDComponent.show({
							message: 'User created successfully!'
						});
						location.reload();
					}
				}
				else {
					this.bar.MDComponent.show({
						message: 'Failed to create user'
					});
				}
			});
		};
	}

	render(props, state) {
		return (
			<Card className={style.login}>
				<h2>Register</h2>
				<span>
					<form onSubmit={this.submit}>
						<TextField label="Username" name="username" className={style.field} />
						<TextField label="Password" name="password" type="password" className={style.field} /><br />
						<TextField label="Confirm" name="confirmpassword" type="password" className={style.field} /><br />
						<Button type="submit">Register</Button>
					</form>
				</span>

				<Snackbar ref={e => this.bar = e} />
			</Card>
		);
	}
}