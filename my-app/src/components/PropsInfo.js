import React, {Component} from 'react';

class PropsInfo extends Component {
    render() {
        return (
            <div>
                <h1>PropsInfo</h1>
                <p>The main difference between state and props is that props are immutable. This is why the container component should define the state that can be updated and changed, while the child components should only pass data from the state using props.</p>

                <p>Using Props When we need immutable data in our component, we can just add props to reactDOM.render() function in main.js and use it inside our component.</p>
            </div>
        )
    }
}

export default PropsInfo;