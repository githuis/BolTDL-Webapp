import {h, Component} from 'preact';

import TextField from 'preact-material-components/TextField';
import 'preact-material-components/TextField/style.css';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';
import Card from "preact-material-components/Card";
import 'preact-material-components/Card/style.css';
import style from "./style.module.pcss";

export default class Login extends Component {
    constructor(props) {
        super(props);


        this.submit = (ev) => {
            ev.preventDefault();

            const formData = new FormData(ev.target);


            fetch('/login', {
                credentials: "same-origin",
                method: "post",
                body: formData
            }).then(response => {
                if (response.ok) {
                    props.loggedIn();

                }
            })
        }
    }

    render(props, state) {
        return (
            <Card className={style.login}>
                <h2>Login</h2>
                <span>
                    <form onSubmit={this.submit}>
                    <TextField label="Username" name="username" className={style.field}/>
                    <TextField label="Password" name="password" type="password" className={style.field}/><br/>
                    <Button type="submit">Log In</Button>
                </form>
                    <Button onClick={()=> props.openRegister()}>Register</Button>
                </span>
            </Card>
        )

    }
}