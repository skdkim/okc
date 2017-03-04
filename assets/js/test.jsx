import React from 'react';
import Test2 from './test2';
import Test3 from './test3';

class Test extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <Test2 />
        <Test3 />
      </div>
    );
  }
}

export default Test;
