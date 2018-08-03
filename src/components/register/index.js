import {h, Component} from 'preact';

import TextField from 'preact-material-components/TextField';
import 'preact-material-components/TextField/style.css';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';

export default class Register extends Component {
    constructor(props) {
        super(props);


        this.submit = (ev) => {
            ev.preventDefault();

            const formData = new FormData(ev.target);


            fetch('/register', {
                credentials: "same-origin",
                method: "post",
                body: formData
            }).then(response => {
                if (response.ok) {
                    {
                        this.bar.MDComponent.show({
                            message: "User created successfully!!"
                        });
                    }
                }
            })
        }
    }

    render(props, state) {
        return(<form onSubmit={this.submit}>
            <TextField label="Username" name="username"/>
            <TextField label="Password" name="password" type="password"/>
            <TextField label="Confirm Password" name="password2" type="password"/>
            <Button type="submit">Submit</Button>
        </form>)
    }
}