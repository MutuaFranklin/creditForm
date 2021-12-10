import { Component, OnInit } from '@angular/core';
import { Questions } from 'src/app/models/questions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  questions!: Questions[];


  constructor() { }


  newApplication(question:any){
    let questionsLength = this.questions.length;
    question.id = questionsLength + 1;
    this.questions.push(question)
  }

  ngOnInit(): void {


    // Jquery
    $('.load-form').on('click', function () {
      $('.intro').hide();
      $('.form').fadeIn(1000);

    });
  }

}
