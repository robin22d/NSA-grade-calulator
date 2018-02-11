import React from 'react'
import './module.css';
import lodash from 'lodash';
import Item from './item.js';

export default class Module extends React.Component{

    constructor(props){
        super(props);
    
        this.state = {
          outputGrade: "---"
        }
    }


    renderItems(){

        const props = lodash.omit(this.props.content, 'content');

        return lodash.map(this.props.content, (content, i) => <Item key={i} {...content} {...props} assessmentCalculator={this.assessmentCalculator.bind(this)}/>)
    }

    render(){

        return(
            <div className="grid">
                <div className="container module_title">{this.props.title}</div>

                <div className="container title">Assessment</div>
                <div className="container title">Weighting</div>
                <div className="container title">Mark</div>
                <div className="container title">Grade</div>

                {this.renderItems()}

                <div className="container text_left">Module Mark:</div>
                <div className="container " > {this.props.mark}% </div>
                <div className="container text_left">Module Grade:</div>
                <div className="container "> {this.props.grade}</div>

            </div>
        )
    }

    assessmentCalculator(assessment, weighting, grade){
        this.props.moduleCalculator(this.props.title, assessment, weighting, grade);
    }
    
}