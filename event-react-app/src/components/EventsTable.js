import React from 'react';
import * as Api from 'typescript-fetch-api'

const api = new Api.DefaultApi()

class EventsTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = { events: [] };

        this.handleReload = this.handleReload.bind(this);
    }


    async handleReload(event) {
        const response = await api.events({ date: '' });
        this.setState({ events: response });
    }


    render() {
        return <div>
            <button onClick={this.handleReload}>Reload</button>
            <ul>
                {this.state.events.map((event) => <li>{event.id} {event.name}</li>)}
            </ul>
        </div>
    }
}

export default EventsTable; 