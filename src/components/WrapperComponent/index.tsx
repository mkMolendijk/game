import * as React from 'react';

export interface props {
  name: String
}

export class WrapperComponent extends React.Component<props, any> {

  render() {
    return (
      <h1>Hi { this.props.name }</h1>
    );
  }
}