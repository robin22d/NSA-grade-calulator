import React from 'react';
import lodash from 'lodash';
import Module from './module.js';
import './year.css'

export default class Year_3 extends React.Component{

    renderItems(){
        const props = lodash.omit(this.props, 'modules');

        return lodash.map(this.props.modules, (modules, i) => <Module key={i} {...modules} {...props}/>)
    }

    render(){
            console.log("mark: ", this.props.mark);
        return(
            <div className="wrapper">
                <div className="outer_grid">
                    {this.renderItems()}
                    <div className="container year_mark"> Year Mark:</div>
                    <div className="container"> {this.props.mark} </div>
                </div>
            </div>

        )
    }

}


