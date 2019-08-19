import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { ToDo } from './components/ToDo';
import { HelloWorld } from './components/HelloWorld';
import { DayToday } from './components/DayToday';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/todo' component={ToDo} /> 
        <Route path='/helloworld' component={HelloWorld} /> 
        <Route path='/daytoday' component={DayToday}/>
     
      </Layout>
    );
  }
}
