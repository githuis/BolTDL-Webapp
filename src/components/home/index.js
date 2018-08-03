import { h, Component } from 'preact';

import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import Tabs from 'preact-material-components/Tabs';
import 'preact-material-components/Tabs/style.css';


import Card from 'preact-material-components/Card';

import style from './style.module.pcss';

export default class Home extends Component {
    constructor(props) {
        super(props);


        this.state = {
            categories: [],
            current: undefined
        };
        this.categories = [
            {
                Id:"1",
                Name:"Shopping",
                Items:[
                    {
                        Id:"1",
                        Name:"Remeber eggs",
                        Description:"from netto"
                    },
                    {
                        Id:"2",
                        Name:"feed dog",
                        Description:"lettuce"
                    },
                    {
                        Id:"3",
                        Name:"pick up kids",
                        Description:"15:39"
                    },

                ]

            },
            {
                Id:"2",
                Name:"Memes",
                Items:[
                    {
                        Id:"1",
                        Name:"He man",
                        Description:""
                    },
                    {
                        Id:"2",
                        Name:"doge",
                        Description:"xd"
                    },
                    {
                        Id:"3",
                        Name:"pick a kids",
                        Description:"15:dddddddddddddddddddddddd39"
                    },

                ]

            }
        ];
        //this.card = Card("Hi there", "Festives");

        this.selectCategory = categories => () => {
            this.setState({categories})
        }

    }


    componentWillMount(){
        fetch('/items', {
            credentials: "same-origin",
        }).then(response => {
            if(response.ok){
                response.json().then(items => {
                    const categories = items.reduce((a, e) => {
                        if (!a[e.Category]) {
                            a[e.Category] = [];
                        }
                        a[e.Category].push(e);
                    }, {});
                    this.setState({categories});
                })
            }
        })
    }

    render(props, state) {
        return (
            <div class={style.home}>
                <div>
                    { state.categories.length !== 0 &&  <Tabs>
                        {state.categories.map(c => <Tabs.Tab onClick={this.selectCategory(c)}>{c.Name}</Tabs.Tab>)}
                    </Tabs> }
                </div>

                <h1>Home</h1>
                {state.current && state.current.map((item) => {
                    return(
                        <Card>
                            <h2>{item.Name}</h2>
                            <p>{item.Description}</p>
                        </Card>
                    )
                })}

                <Card>
                </Card>
            </div>
        );
    }
}