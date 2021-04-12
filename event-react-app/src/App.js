import logo from './logo.svg';
import './App.css';
import React from 'react';
import EventsTable from './components/EventsTable';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <EventsTable />
        </section>

        <img src={logo} className="App-logo" alt="logo" />

      </header>

    </div>
  );
}

export default App;
