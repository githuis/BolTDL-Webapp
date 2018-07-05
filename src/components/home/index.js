import { h, Component } from 'preact';

import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';

import Card from 'preact-material-components/Card';

import style from './style.module.css';

export default class Home extends Component {
    render() {
        return (
            <div class={style.home}>
                <h1>Test</h1>
                <Card>
                    <div class={style.cardHeader}>
                        <h2 class=" mdc-typography--title">Test view</h2>
                        <div class=" mdc-typography--caption">This is merely an example</div>
                    </div>
                    <div class={style.cardBody}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </div>
                    <Card.Actions>
                        <Card.ActionButton>OKAY</Card.ActionButton>
                    </Card.Actions>
                </Card>
            </div>
        );
    }
}