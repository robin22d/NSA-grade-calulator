import React from 'react';
import './item.css';

let grade = 
    [
        {grade: "1", lowMark: "70", highMark: "100", color: "blue"},
        {grade: "2.1", lowMark: "60", highMark: "69", color: "green"},
        {grade: "2.2", lowMark: "50", highMark: "59", color: "yellow"},
        {grade: "3", lowMark: "40", highMark: "49", color: "purple"},
        {grade: "Fail", lowMark: "0", highMark: "39", color: "red"}
    ];

export default class Item extends React.Component{

    constructor(props){
        super(props);
    
        this.state = {
          grade,
          outputGrade: "N/A"
        }
    }

    render(){
        const { assessment, weighting } = this.props;
        return(
            <div className="container inside_grid">
                <div className="container"> 
                    {assessment}
                </div>

                <div className="container text_center"> 
                    {weighting}%
                </div>

                <div className="container">
                    <input type="number" onChange={this.setGrade.bind(this)} ref="grade" /> %
                </div>
                <div className="container text_center"> {this.state.outputGrade} </div>
            </div>
        )
    }

    setGrade(){
        // Not sure why this does not work!
        // for(var i = 0; i < this.state.grade.length; i++){
        //     if(this.refs.grade.value >= this.state.grade[i].lowMark && this.refs.grade.value <= this.state.grade[i].highMark){
        //         this.setState({ outputGrade: this.state.grade[i].grade});
        //     }
        // }

        if(this.refs.grade.value >= 70 && this.refs.grade.value <= 100){
            this.setState({ outputGrade: this.state.grade[0].grade});
        }else if(this.refs.grade.value >= 60 && this.refs.grade.value <= 69){
            this.setState({ outputGrade: this.state.grade[1].grade});
        }else if(this.refs.grade.value >= 50 && this.refs.grade.value <= 59){
            this.setState({ outputGrade: this.state.grade[2].grade});
        }else if(this.refs.grade.value >= 40 && this.refs.grade.value <= 49){
            this.setState({ outputGrade: this.state.grade[3].grade});
        }else if(this.refs.grade.value >= 0 && this.refs.grade.value <= 39){
            this.setState({ outputGrade: this.state.grade[4].grade});
        }
        this.props.assessmentCalculator(this.props.assessment, this.props.assessment, this.refs.grade.value);
    }
}