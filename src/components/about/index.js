import { h, Component } from 'preact';

import 'preact-material-components/Card/style.css';
import Card from 'preact-material-components/Card';

import style from './style.css';

export default class About extends Component {
    render() {
        return (
            <div className={style.main}>
                <h1>About</h1>
                <Card>
                    <p className={style.about}>
                        This is the about page where something about something could be written
                    </p>
                </Card>
            </div>
        );
    }
}