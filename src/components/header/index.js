import { h, Component } from 'preact';

import Toolbar from 'preact-material-components/Toolbar';
import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';

import 'preact-material-components/Switch/style.css';
import 'preact-material-components/Dialog/style.css';
import 'preact-material-components/Drawer/style.css';
import 'preact-material-components/List/style.css';
import 'preact-material-components/Toolbar/style.css';
// import style from './style';

export default class Header extends Component {
	constructor(props) {
		super(props);
        this.closeDrawer = () => (this.drawer.MDComponent.open = false);
        this.openDrawer = () => (this.drawer.MDComponent.open = true);
        this.drawerRef = drawer => (this.drawer = drawer);
	}


	render(props) {
		return (<div>
			<Toolbar className="toolbar">
				<Toolbar.Row>
					<Toolbar.Section align-start>
						<Toolbar.Icon menu onClick={this.openDrawer}>
                            menu
						</Toolbar.Icon>
						<Toolbar.Title>Quick Attend</Toolbar.Title>
					</Toolbar.Section>

					<Toolbar.Section align-end>
						<Toolbar.Icon onClick={props.onExit}>exit_to_app</Toolbar.Icon>
					</Toolbar.Section>

				</Toolbar.Row>
			</Toolbar>

			<Drawer.TemporaryDrawer ref={this.drawerRef}>
				<Drawer.DrawerContent>
					{(props.menuItems || []).map(e => (
					    <Drawer.DrawerItem onClick={() => {
					    	this.closeDrawer();
                            e.onClick();
						}}>
							<List.ItemGraphic>{e.icon}</List.ItemGraphic>
							{e.title}
						</Drawer.DrawerItem>))}
				</Drawer.DrawerContent>
			</Drawer.TemporaryDrawer>
		</div>);
	}
}
