import { h, Component } from 'preact';
import Header from './header';
import Home from './home';

export default class App extends Component {
	render() {
		return (
		    <div>
                <Header/>
                <Home/>
            </div>
		);
	}
}
