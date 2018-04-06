import React from 'react';

export default class About extends React.Component {
  constructor(props = {}) {
    super(props);
  }

  render() {
    return (
      <div>
        About!
        <div className='about'>about component</div>
        <div className='about2'>about component</div>
      </div>
    );
  }
}