import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import AutoComplete from 'material-ui/AutoComplete';
import Link from './link';
import {Tabs, Tab} from 'material-ui/Tabs';



class App extends React.Component {

  state = {
    urls: [],
    types: []
  }

  componentDidMount() {
    var self = this;
    fetch("/data/urls.json").then(function (res) {
      if (res.ok) {
        res.json().then(function (data) {
          var types = [];
          var temp = {};
          data.forEach(v => {
            v.type && v.type.split(' ').forEach(v => {
              temp[v] = true;
            });
          });
          for (var type in temp) types.push(type);

          self.setState({
            urls: data,
            types: types
          });
        });
      } else {
        console.log("Looks like the response wasn't perfect, got status", res.status);
      }
    }, function (e) {
      console.log("Fetch failed!", e);
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme() }>
        <div>
          <AppBar title="XJTU Index" showMenuIconButton={false}/>
          <Tabs>
            {
              this.state.types.map((type, i) => (
                <Tab key={i} label={type}>
                  {
                    this.state.urls.filter(v => v.type.split(' ').includes(type)).map((v, i) => <Link key={i} text={v.name} href={v.url}></Link>)
                  }
                </Tab>
              ))
            }
          </Tabs>
          <Divider></Divider>
          <Subheader>汇总</Subheader>
          {
            this.state.urls.map((v, i) => <Link key={i} text={v.name} href={v.url}></Link>)
          }
        </div>
      </MuiThemeProvider>
    )
  }
}
export default App;
