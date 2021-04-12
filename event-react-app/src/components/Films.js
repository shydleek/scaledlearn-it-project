import React from 'react';
import '../App.css';
import * as Api from 'typescript-fetch-api'
import { withRouter } from "react-router";
import moment from 'moment'
import Moment from 'react-moment';
import faker from  'faker';

const api = new Api.DefaultApi()
class Films extends React.Component {

    constructor(props) {
        super(props);
        const id =  this.props.match?.params.id || moment().format('YYYY-MM-DD');
        console.log(id);

        

        this.state = { 
            events: [
                {type:"Horror", date: "2021-04-12", name: '', length: "95 min", time: "19:00", place: ''},
                {type:"Comedy", date: "2021-04-12", name: '', length: "120 min", time: "17:00", place: ''}
            ],
            date: id 
        };

        this.handleReload = this.handleReload.bind(this);
        this.handleReload();
    }


    async handleReload(event) {
        //const response = await api.events({ date: '2021-03-25'/*this.state.targetDate*/ });
        //this.setState({ events: response });
    }


    render() {
        return <div>
            {/*<button onClick={this.handleReload}>Reload</button> */}
            <h2>Films afisha</h2>
            <h3>Upcoming events on <Moment format="YYYY/MM/DD">{this.state.date}</Moment> </h3>
            <ul>
               {this.state.events.map(
                   (event) => 
                        <li>{event.type} film "{event.name + faker.random.words()}" is performing in {event.place + faker.address.streetAddress()} in {event.time}. Duration is {event.length}.</li>
                        )}
            </ul>
        </div>
    }
}

export default Films; 