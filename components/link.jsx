import React from 'react';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const style = {
  margin: 12,
};

const Link = (props) => (
    <RaisedButton linkButton={true} href={props.href} label={props.text} style={style}/>
)
export default Link;
