import React, { Component} from 'react';

class LifeCycleInfo extends Component {
    render() {
        return (
            <div>
                <h1>LifeCycleInfo</h1>
                <h4>A list of the component lifecycle methods</h4>
                <ul>
                    
                    <li>constructor()</li>
                    <li>static getDerivedStateFromProps()</li>
                    <li>render()</li>
                    <li>componentDidMount()</li>
                </ul>
            </div>
        )
    }
}

export default LifeCycleInfo;