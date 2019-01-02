import React , {Component} from 'react';
import CompnentInfo from './CompnentInfo';
import JSXInfo from './JSXInfo';


class Content extends Component {
    render() {
        return (

            <div>
                <CompnentInfo/>
                <JSXInfo/>
             
            </div>
        );
    }
}

export default Content;