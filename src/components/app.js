import { h, Component } from 'preact';
import Header from './header';
import Home from './home';
import About from './about';
import Register from "./register";
import Login from "./login";

export default class App extends Component {
	constructor(props) {
		super(props);


		this.state = {
			currentView: <Home/>
		};

		this.open = view => () => this.setState({currentView: view});

		this.exit = () => { console.log("exit/logout pressed")};

		this.loggedIn = () => this.setState({currentView: <Home/>});
		this.openRegister = () =>this.setState({currentView: <Register loggedIn={this.loggedIn}/>});

		this.menuItems = [
			{
				title: "Home",
				icon: "home",
				onClick: this.open(<Home />)
			},
            {
                title: "About",
                icon: "info",
                onClick: this.open(<About />)
            },
		];
	}

    componentWillMount(){
        fetch('/session', {
            credentials: "same-origin",
        }).then(response => {
            if(response.ok){
				this.setState({currentView: <Home/>})
            }
            else{
            	console.log("123");
                this.setState({currentView: <Login loggedIn={this.loggedIn} openRegister={this.openRegister}/>})

            }
        }).catch(() => console.log("Failed ma dude"));
    }

	render(props, state) {
		return (
		    <div>
                <Header title={"BolTDL"} menuItems={this.menuItems} onExit={this.exit}/>
				{state.currentView}
            </div>
		);
	}
}
