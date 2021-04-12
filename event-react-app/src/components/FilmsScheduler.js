import React from 'react';
import * as Api from 'typescript-fetch-api'
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Moment from 'react-moment';
import moment from 'moment';
import faker from  'faker';

const api = new Api.DefaultApi()

class WeeklyScheduler extends React.Component {

    constructor(props) {
        super(props);
        const dateParam =  this.props.match?.params.id || moment().format('YYYY-MM-DD');
        const parsedDate = moment(dateParam, "YYYY-MM-DD")

        const nearestWeekend = parsedDate.startOf('week').isoWeekday(0);
        const endDate = moment(nearestWeekend).add(6, 'day');
        
        console.log("Enddate", nearestWeekend.toString(),  endDate.toString())

        const startWeek = nearestWeekend.format("YYYY-MM-DD")
        const endWeek = endDate.format("YYYY-MM-DD")
        
 

        // TODO reuse data to service from https://citydog.by/post/play-musykanty/
        this.state = { 
            events: [
                {type:"Horror", date: "2021-04-22", name: '', length: "95 min", time: "19:00", place: ''},
                {type:"Comedy", date: "2021-04-25", name: '', length: "120 min", time: "17:00", place: ''}
            ],
            start: startWeek,
            end:  endWeek

        };

        console.log(this.state.start, this.state.end)
        this.handleReload = this.handleReload.bind(this);
        this.handleReload();
    }


    async handleReload(event) {
        //const response = await api.events({ date: '2021-03-25'/*this.state.targetDate*/ });
        //this.setState({ start: "2021-04-01" });
    }


    render() {
        return <div>
            {/*<button onClick={this.handleReload}>Reload</button>*/}
            <h2>Weekly highlights</h2>
            <h3>Upcoming events from  <Moment format="YYYY/MM/DD">{this.state.start}</Moment> to <Moment format="YYYY/MM/DD">{this.state.end}</Moment> </h3>
            <div>
            {this.state.events.map(
                   (event) => 
                        <li>{event.date}: {event.type} film "{event.name + faker.random.words()}" is performing in {event.place + faker.address.streetAddress()} in {event.time}. Duration is {event.length}.</li>
                        )}
            </div>
        </div>
    }
}

export default withRouter(WeeklyScheduler);