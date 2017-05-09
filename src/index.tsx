import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { WrapperComponent } from './components/WrapperComponent';

const root : HTMLElement = document.getElementById('app');

export class Main extends React.Component<any, any> {

  render() {
    return (
      <WrapperComponent name="Matt"/>
    )
  }
}

ReactDOM.render(
  <Main/>,
  root
);