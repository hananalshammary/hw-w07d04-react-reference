import React, {Component} from 'react';
import PropsInfo from './PropsInfo';
import StateInfo from './StateInfo';
import LifeCycleInfo from './LifeCycleInfo';


class CompnentInfo extends Component {
    render() {
        return (
            <div>
                <h1>CompnentInfo</h1>
                <p>Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and 
                   </p> <p>return React elements describing what should appear on the screen.</p>
                  <div>
                  <div><PropsInfo/></div>
                <div><StateInfo/></div>
                <div><LifeCycleInfo/></div>
              
                  </div>
            </div>
        )
    }
}

export default CompnentInfo;