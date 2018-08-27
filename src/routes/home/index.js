import { h, Component } from 'preact';

import 'preact-material-components/Card/style.css';
import Tabs from 'preact-material-components/Tabs';
import 'preact-material-components/Tabs/style.css';


import Card from 'preact-material-components/Card';

import style from './style.css';

import Fab from 'preact-material-components/Fab';
import 'preact-material-components/Fab/style.css';
import Icon from 'preact-material-components/Icon';

import Dialog from 'preact-material-components/Dialog';
import 'preact-material-components/Dialog/style.css';
import TextField from 'preact-material-components/TextField';
import 'preact-material-components/TextField/style.css';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';
import Autocomplete from 'react-toolbox/lib/autocomplete';


export default class Home extends Component {
	constructor(props) {
		super(props);


		this.categories = [
			{
				Name: 'Shopping',
				Items: [
					{
						Id: '1',
						Name: 'Remeber eggs',
						Description: 'from netto'
					},
					{
						Id: '2',
						Name: 'feed dog',
						Description: 'lettuce'
					},
					{
						Id: '3',
						Name: 'pick up kids',
						Description: '15:39'
					}

				]

			},
			{
				Name: 'Memes',
				Items: [
					{
						Id: '1',
						Name: 'He man',
						Description: ''
					},
					{
						Id: '2',
						Name: 'doge',
						Description: 'xd'
					},
					{
						Id: '3',
						Name: 'pick a kids',
						Description: '15:dddddddddddddddddddddddd39'
					}

				]

			}
		];
		//this.card = Card("Hi there", "Festives");


		this.state = {
			categories: this.categories,
			current: undefined
		};

		this.selectCategory = category => () => {
			console.log(category);
			this.setState({ current: category });
		};

		this.addNewItem = () => {
			this.dialog.MDComponent.show();
		};

		this.bindDialogRef = (ref) => {
			this.dialog = ref;
		};
	}


	componentWillMount() {
		fetch('/items', {
			credentials: 'same-origin'
		}).then(response => {
			if (response.ok) {
				response.json().then(items => {
					console.log(items);
					const categories = items.reduce((a, e) => {
						if (a[e.Category] === undefined) {
							a[e.Category] = [];
						}
						a[e.Category].push(e);
					}, {});
					const unique = Object.getOwnPropertyNames(categories);
					const res = unique.map(catName => ({
						Name: catName,
						Items: categories[catName]
					}));
					console.log('Categories', res);
					this.setState({ categories: res });
				});
			}
		});
	}

	render(props, state) {
		return (
			<div class={style.home}>
				<div>

					{state.categories.length !== 0 && <Tabs>
						{state.categories.map(c => <Tabs.Tab onClick={this.selectCategory(c)}>{c.Name}</Tabs.Tab>)}
					</Tabs>}
				</div>

				<h1>Home</h1>
				{state.current && state.current.Items.map((item) => (
					<Card>
						<h2>{item.Name}</h2>
						<p>{item.Description}</p>
					</Card>
				))}

				<Card />

				<Fab className={style.fabadd} onClick={this.addNewItem}>
					<Icon>add</Icon>
				</Fab>

				<Dialog ref={this.bindDialogRef}>
					<Dialog.Header>Add new item</Dialog.Header>
					<Dialog.Body>
						<form action="">
							<TextField label="Name" type="text" name="name" /><br />

							<TextField label="Description" type="text" name="desc" /><br />

							<Autocomplete allowCreate multiple={false} label="Category" placeholder="Category" source={state.categories} filterKey={'Name'} /><br />
						</form>
					</Dialog.Body>
					<Dialog.Footer>
						<Dialog.FooterButton accept>Add item</Dialog.FooterButton>
						<Dialog.FooterButton cancel>Cancel</Dialog.FooterButton>

					</Dialog.Footer>
				</Dialog>
			</div>
		);
	}
}