class Question {
    constructor() {

    this.input1=createInput("Name");
    this.input2=createInput("Enter Correct Option");
    this. option1 = createButton('p1');
    this. option2 = createButton('p2');
  

    this.title = createElement('title');
    this.question=createElement('question')


     }
     hide(){
        this.title 
        this.question
     }
  
     display(){
         this.title.html("MyQuiz Game");
         this.title.position(350,0);

         this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter? ");
         this.question.position(150,80);

         this.option1.html("1.Everyone");
         this.option1.position(150,100);

         this.option2.html("1.Envelope");
         this.option2.position(150,120);

         this.input1.position(150,230)
         this.input2.position(350,230)

     }
    
    
    }