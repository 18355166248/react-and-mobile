import React, { Component } from 'react';
import './App.less';
import { List, Checkbox, Button } from 'antd-mobile';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const CheckboxItem = Checkbox.CheckboxItem;

class App extends Component {
  onChange = (val) => {
    console.log(val);
  }
  render() {
    const data = [
      { value: 0, label: 'Ph.D.' },
      { value: 1, label: 'Bachelor' },
      { value: 2, label: 'College diploma' },
    ];
    return (
      <div className="App">
        <div className="test"></div>
        <Button type="primary">开始了</Button>
        <List renderHeader={() => 'CheckboxItem demo'}></List>
        {data.map(i => (
          <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
            {i.label}
          </CheckboxItem>
        ))}
      </div>
    );
  }
}

export default App;
