import React from 'react';
import Year2 from './year2.js';
import Year3 from './year3.js';

let modules = 
    [
        {title: "Database Systems", mark: "", grade: "", content: [{ assessment: "Db Portfolio", weighting: "60", grade: "", percentage: ""}, {assessment: "Db Exam", weighting: "40", grade: "", percentage: ""}]},
        {title: "DevOps", mark: "", grade: "", content: [{assessment: "DevOps Portfolio", weighting: "40", grade: "", percentage: ""}, {assessment:"Portfolio on CI set up", weighting: "40", grade: "", percentage: ""},  { assessment: "Class Test", weighting: "20", grade: "", percentage: ""}]},
        {title: "Commercial Applications with Java", mark: "", grade: "", content: [{assessment: "Java Portfolio", weighting: "100", grade: "", percentage: ""}]},
        {title: "Security", mark: "", grade: "", content:[{assessment: "Penetration test report", weighting: "20", grade: "", percentage: ""}, {assessment: "Analysis and Risk Assessment", weighting: "20", grade: "", percentage: ""}, { assessment: "Security Portfolio", weighting: "60", grade: "", percentage: ""}]},
        {title: "Performance and Scalability", mark: "", grade: "", content: [{ assessment: " Performance Portfolio", weighting: "60", grade: "", percentage: ""}, {assessment: "Performance Exam", weighting: "40", grade: "", percentage: ""}]},
        {title: "Agile Project Management", mark: "", grade: "", content: [{assessment: "Agile Portfolio", weighting: "80", grade: "", percentage: ""}, {assessment: "Reflective Essay", weighting: "20", grade: "", percentage: ""}]}
    ];

let modules1 = 
    [
        {title: "Commercial Frameworks", mark: "", grade: "", content: [{ assessment: "Frameworks Portfolio", weighting: "50", grade: "", percentage: ""}, {assessment: "Coding Exercise", weighting: "50", grade: "", percentage: ""}]},
        {title: "Adopting Technology", mark: "", grade: "", content: [{assessment: "Portfolio of Presentations", weighting: "30", grade: "", percentage: ""}, {assessment:"Presentation of Business Case", weighting: "20", grade: "", percentage: ""},  { assessment: "Business Case", weighting: "50", grade: "", percentage: ""}]},
        {title: "Emerging Technologies", mark: "", grade: "", content: [{assessment: "Emerging Technologies Exam", weighting: "50", grade: "", percentage: ""}, {assessment: "Emerging Technologies Portfolio", weighting: "50", grade: "", percentage: ""}]},
        {title: "Managing Change", mark: "", grade: "", content:[{assessment: "Managing Change Business Case", weighting: "40", grade: "", percentage: ""}, {assessment: "Managing Change Exam", weighting: "60", grade: "", percentage: ""}, { assessment: "Security Portfolio", weighting: "60", grade: "", percentage: ""}]},
        {title: "Large Team Project", mark: "", grade: "", content: [{ assessment: "Dissertation", weighting: "60", grade: "", percentage: ""}, {assessment: "Large Team Project Portfolio", weighting: "40", grade: "", percentage: ""}]},
        
    ];

let year2 = { grade: "", mark: ""}

let grade = 
    [
        {grade: "1", lowMark: "70", highMark: "100", color: "blue"},
        {grade: "2.1", lowMark: "60", highMark: "69", color: "green"},
        {grade: "2.2", lowMark: "50", highMark: "59", color: "yellow"},
        {grade: "3", lowMark: "40", highMark: "49", color: "purple"},
        {grade: "Fail", lowMark: "0", highMark: "39", color: "red"}
    ];


export default class Calculator extends React.Component{

    constructor(props){
        super(props);
    
        this.state = {
            grade,
            modules,
            modules1,
            year2
        }
    }

    render(){
        return(
            <div>
            <Year2
                modules = {this.state.modules}
                year2 = {this.state.year2}
                moduleCalculator={this.moduleCalculator.bind(this)}
            />
            <Year3
                modules = {this.state.modules1}
            />
            </div>
        )
    }

    moduleCalculator(module, assessment, weighting, grade){
        // Finds what current module is being edited.
        for(var i = 0; i < this.state.modules.length; i++){
            if(module ===  this.state.modules[i].title){

                for(var x = 0; x < this.state.modules[i].content.length; x++){
                    if(assessment ===  this.state.modules[i].content[x].assessment){

                        var tempGrade =  modules[i].content[x].weighting * (grade / 100);
                        var roundGrade =  Math.round( tempGrade * 10 ) / 10;

                        this.setState({[modules[i].content[x].grade]: modules[i].content[x].grade = roundGrade});
                            
                            // Works out module grade
                            var moduleMark = 0;
                            for(var z = 0; z < this.state.modules[i].content.length; z++){
                                moduleMark += modules[i].content[z].grade
                            }
                            this.setState({[modules[i].mark]: modules[i].mark = moduleMark});

                            moduleMark = 0;

                            if(modules[i].mark >= 70 && modules[i].mark <= 100){
                                this.setState({ [modules[i].grade]: modules[i].grade = this.state.grade[0].grade});
                            }else if(modules[i].mark >= 60 && modules[i].mark <= 69){
                                this.setState({ [modules[i].grade]: modules[i].grade = this.state.grade[1].grade});
                            }else if(modules[i].mark >= 50 && modules[i].mark <= 59){
                                this.setState({ [modules[i].grade]: modules[i].grade = this.state.grade[2].grade});
                            }else if(modules[i].mark >= 40 && modules[i].mark <= 49){
                                this.setState({ [modules[i].grade]: modules[i].grade = this.state.grade[3].grade});
                            }else if(modules[i].mark >= 0 && modules[i].mark <= 39){
                                this.setState({ [modules[i].grade]: modules[i].grade = this.state.grade[4].grade});
                            }
                    }
                }
            }
        }



    
    }

}









