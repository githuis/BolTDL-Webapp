import { h, Component } from 'preact';
import Header from './header';
import Home from './home';
import About from './about';

export default class App extends Component {
	constructor(props) {
		super(props);

		const home = <Home />;
		const about = <About />;

		this.state = {
			currentView: home
		};

		this.open = view => () => this.setState({currentView: view});

		this.exit = () => { console.log("exit/logout pressed")};
		
		this.menuItems = [
			{
				title: "Home",
				icon: "home",
				onClick: this.open(home)
			},
            {
                title: "About",
                icon: "info",
                onClick: this.open(about)
            },
		];
	}

	render(props, state) {
		return (
		    <div>
                <Header menuItems={this.menuItems} onExit={this.exit}/>
				{state.currentView}
            </div>
		);
	}
}
