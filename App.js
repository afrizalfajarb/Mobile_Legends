import React from 'react';
import {TabNavigator} from 'react-navigation';

import {Home} from './screen/Home';
import {Heroes} from './screen/Heroes';
import {Settings} from './screen/Setting';

const Tab = TabNavigator({
  Home: {
    screen: Home,
  },
  Heroes: {
    screen: Heroes,
  },
  Settings: {
    screen: Settings,
  }
},{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions:{
    activeTintColor: '#1e2a78',
    activeBackgroundColor: '#43c0ac',
    inactiveTintColor: '#1234',
    style:{
      backgroundColor:'#43c0ac',
    },

    labelStyle: {
      fontSize: 10,
      color: '#1e2a78',
      padding: 5,
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Tab/>
    );
  }
}