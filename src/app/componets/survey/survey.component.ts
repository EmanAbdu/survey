import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
surveyQuestions=[{qID:"first",qName:"what are you doing?"}, {qID:"second", qName:"how do you do?"}, {qID:"third", qName:"what are you up to?"}, {qID:"fourth", qName:"hi I hope you are doing well?"},{qID:"fifth", qName:"What's your name?"}];
currentQuestion:string;
  constructor() { }

  ngOnInit() {
  }

  getCurrentQuestion(question: string){

    this.currentQuestion= question;
    console.log(question);
    // this.scrollTo('#'+question);

  }

  scrollTo(question:string){
    // question.scrollIntoView();
  }

}
