let queArray =[
    {
      question: "What is the purpose of the `static` keyword in Java?",
      options: [
        "Indicate that a variable is constant",
        "Specify that a method cannot be overridden",
        "Declare a variable that belongs to the class, not an instance",
        "Control the visibility of a class in other packages"
      ],
      ans: 2
    },
    {
      question: "What is the difference between `ArrayList` and `LinkedList` in Java?",
      options: [
        "`ArrayList` is synchronized, `LinkedList` is not",
        "`ArrayList` allows fast random access, `LinkedList` allows fast insertion and deletion",
        "`ArrayList` is a generic class, `LinkedList` is not",
        "There is no difference, they are interchangeable"
      ],
      ans: 1
    },
    {
      question: "What is the purpose of the `final` keyword in Java?",
      options: [
        "Indicate that a variable is constant",
        "Specify that a method cannot be overridden",
        "Declare a variable that belongs to the class, not an instance",
        "Control the visibility of a class in other packages"
      ],
      ans: 0
    },
    {
      question: "How do you create an object of a class in Java?",
      options: [
        "`new Object();`",
        "`Object.create();`",
        "`Object obj = createObject();`",
        "`Object obj = new Object();`"
      ],
      ans: 3
    },
    {
      question: "What is the default value of a boolean variable in Java?",
      options: [
        "`true`",
        "`false`",
        "`null`",
        "`0`"
      ],
      ans: 1
    },
    {
      question: "What does the `try` block contain in a try-catch statement?",
      options: [
        "Code that is always executed",
        "Code that may throw an exception",
        "Code that is executed if an exception occurs",
        "Code that is executed after the catch block"
      ],
      ans: 1
    },
    {
      question: "What is the purpose of the `finally` block in a try-catch-finally statement?",
      options: [
        "Execute code after the try block, regardless of whether an exception is thrown or not",
        "Handle exceptions",
        "Specify the code to execute before the try block",
        "Terminate the program"
      ],
      ans: 0
    },
    {
      question: "How do you declare a constant variable in Java?",
      options: [
        "`const int MAX_VALUE = 100;`",
        "`final int MAX_VALUE = 100;`",
        "`static int MAX_VALUE = 100;`",
        "`final static int MAX_VALUE = 100;`"
      ],
      ans: 3
    },
    {
      question: "What is the purpose of the `break` statement in Java?",
      options: [
        "Exit the loop or switch statement",
        "Terminate the program",
        "Skip the current iteration of a loop",
        "Jump to a specific label"
      ],
      ans: 0
    },
    {
      question: "How do you define a constant in an interface in Java?",
      options: [
        "`const int VALUE = 10;`",
        "`final int VALUE = 10;`",
        "`static final int VALUE = 10;`",
        "`constant int VALUE = 10;`"
      ],
      ans: 2
    },
    {
      question: "What is the purpose of the `super` keyword in Java?",
      options: [
        "Access the superclass's members",
        "Invoke the current class's constructor",
        "Reference the current object",
        "Define a static method"
      ],
      ans: 0
    },
    {
      question: "What will happen if you try to compile and run the following code?",
      code: true,
      snippet: `
  public class Test {
      public static void main(String[] args) {
          String str = null;
          System.out.println(str.length());
      }
  }
      `,
      options: [
        "It will print 'null'",
        "It will print '0'",
        "It will throw a `NullPointerException`",
        "It will compile but print nothing"
      ],
      ans: 2
    },
    {
      question: "What is the purpose of the `continue` statement in Java?",
      options: [
        "Terminate the loop",
        "Skip the rest of the code in the loop and move to the next iteration",
        "Restart the loop from the beginning",
        "Jump to a specific label"
      ],
      ans: 1
    },
    {
      question: "How do you declare a method that can throw multiple exceptions in Java?",
      options: [
        "`void myMethod() throws Exception1, Exception2;`",
        "`void myMethod() throw Exception1, Exception2;`",
        "`void myMethod() throw Exception1 throws Exception2;`",
        "`void myMethod() throws Exception1 throws Exception2;`"
      ],
      ans: 0
    },
    {
      question: "What is the purpose of the `abstract` keyword in Java?",
      options: [
        "Indicate that a variable is constant",
        "Specify that a method cannot be overridden",
        "Declare a variable that belongs to the class, not an instance",
        "Control the visibility of a class in other packages"
      ],
      ans: 2
    },
    {
      question: "What will be the result of the following code snippet?",
      code: true,
      snippet: `
  public class Example {
      public static void main(String[] args) {
          String str1 = "Hello";
          String str2 = new String("Hello");
          System.out.println(str1.equals(str2));
      }
  }
      `,
      options: [
        "true",
        "false",
        "It will throw a compilation error",
        "It will print 'Hello'"
      ],
      ans: 0
    },
    {
      question: "What is the purpose of the `throws` keyword in Java?",
      options: [
        "Declare a method that can throw an exception",
        "Handle exceptions in a catch block",
        "Specify that a method cannot be overridden",
        "Terminate the program"
      ],
      ans: 0
    },
    {
      question: "What is the purpose of the `instanceof` operator in Java?",
      options: [
        "Check if an object is of a particular class type",
        "Compare two objects for equality",
        "Access the instance variables of an object",
        "Determine the size of an object in memory"
      ],
      ans: 0
    },
    {
      question: "What is the purpose of the `synchronized` keyword in Java?",
      options: [
        "Indicate that a variable is constant",
        "Specify that a method cannot be overridden",
        "Ensure that only one thread at a time can access a method or block of code",
        "Control the visibility of a class in other packages"
      ],
      ans: 2
    },
    {
      question: "Which of the following statements is true about the `StringBuilder` class in Java?",
      options: [
        "`StringBuilder` is immutable",
        "`StringBuilder` is synchronized",
        "`StringBuilder` is part of the `java.util` package",
        "`StringBuilder` is more memory-efficient than `String`"
      ],
      ans: 1
    },
    {
      question: "What is the purpose of the `do-while` loop in Java?",
      options: [
        "Iterate through a block of code while a condition is true",
        "Execute a block of code at least once, then check the condition",
        "Iterate through a block of code a specific number of times",
        "Skip the current iteration of a loop"
      ],
      ans: 1
    },
    {
      question: "What will be the result of the following code snippet?",
      code: true,
      snippet: `
  public class Example {
      public static void main(String[] args) {
          int x = 5;
          System.out.println(x > 2 ? x < 4 ? 10 : 8 : 7);
      }
  }
      `,
      options: [
        "10",
        "8",
        "7",
        "It will throw a compilation error"
      ],
      ans: 0
    },
    {
      question: "What is the purpose of the `instanceof` operator in Java?",
      options: [
        "Check if an object is of a particular class type",
        "Compare two objects for equality",
        "Access the instance variables of an object",
        "Determine the size of an object in memory"
      ],
      ans: 0
    },
    {
      question: "What is the difference between `==` and `.equals()` when comparing two objects in Java?",
      options: [
        "They are equivalent",
        "`==` compares object references, `.equals()` compares object content",
        "`.equals()` compares object references, `==` compares object content",
        "Both are used to check for null objects"
      ],
      ans: 1
    },
    {
      question: "What is the output of the following code snippet?",
      code: true,
      snippet: `
  public class Example {
      public static void main(String[] args) {
          int x = 5;
          System.out.println(x++);
          System.out.println(++x);
      }
  }
      `,
      options: [
        "5, 7",
        "6, 7",
        "5, 6",
        "6, 6"
      ],
      ans: 1
    },
 ];





 //functions ...

 //brackground color change
const bodyColor=document.querySelector("body");
let colorTime=1;
function colorBackground(){
    setInterval(function (){
        if(colorTime===1){
           //bodyColor.style.background="linear-gradient(to right, #ff6b6b, #4ecdc4)";
           bodyColor.style.background="linear-gradient(to right, #08AEEA 0%, #2AF598 100%)";

           colorTime--;
        } 
        else if(colorTime===0){
           bodyColor.style.background="linear-gradient(to left, #08AEEA 0%, #2AF598 100%)";
           colorTime++;
        } 
    },1000)
}
colorBackground();


//timer
let timeRemaining=300 ;
function updateTime(){
    const minutes=Math.floor(timeRemaining/60);
    const seconds=timeRemaining%60;
    document.querySelector(".timer").textContent=`${minutes}:${seconds}`;
}
function expiredTime(){
    alert("Time is up");
    submit();
}
function timer(){
    const setTime=setInterval(function(){
       updateTime();
       if(timeRemaining<=0){
        clearInterval(setTime);
        expiredTime();
       }
       timeRemaining--;
    },1000)
}

// update serial no
let serial=document.querySelector(".qno");
function  updateNo(x){
    serial.textContent=x;
}


// event listener
let questionNo=0;
const buttons=document.querySelectorAll('button');
const p=document.querySelector(".prev");
const n=document.querySelector(".next");
const s=document.querySelector(".submit");

buttons.forEach(function (button){
    button.addEventListener('click',function (e){
        if(e.target.id==="quiz"){
            quiz();
        }
        if(e.target.id==="start"){
            start();

        }
        if(e.target.className==="prev"){
          prev();
        }
        if(e.target.className==="next"){
          next();
        }
        if(e.target.className==="submit"){
            submit();
            
        }
        if(e.target.className==="quit"){
            quit();
            
        }
        if(e.target.className==="requiz"){
           requiz();
        }
    })
}) 

//Navigations 
function navigate(x,p,n,s){
    if(x===1){
        n.style.display="block";
        p.style.display="none";
        s.style.display="block";
    }
    else if(x===5){
        n.style.display="none";
        p.style.display="block";
        s.style.display="block";
    }
    else {
        n.style.display="block";
        p.style.display="block";
        s.style.display="block";
    }
}

//quiz button function
function quiz(){
    const div=document.querySelector(".start");
    div.style.display='block';
    const div2=document.querySelector(".tab");
    div2.style.display="none";
    const div3=document.querySelector("#quiz");
    div3.style.display="none";
    // clear();
    // unselectAll();
} 

// generate question
let selectedQuestionArray=[];
function generateQuestion(){
    let index=Math.floor(Math.random()*(queArray.length)+1);
    selectedQuestionArray.push(queArray.splice(index,1));
    selectedQuestionArray=selectedQuestionArray.flat(1);
}  

// display questions
let question=document.querySelector(".questionTab");
let option1=document.querySelector(".optionOne");
let option2=document.querySelector(".optionTwo");
let option3=document.querySelector(".optionThree");
let option4=document.querySelector(".optionFour");

function display(x){
    question.appendChild(document.createTextNode(selectedQuestionArray[x-1].question));
    if(selectedQuestionArray[x-1].snippet!==undefined){
        question.appendChild(document.createTextNode(selectedQuestionArray[x-1].snippet));
    }
    option1.appendChild(document.createTextNode(selectedQuestionArray[x-1].options[0]));
    option2.appendChild(document.createTextNode(selectedQuestionArray[x-1].options[1]));
    option3.appendChild(document.createTextNode(selectedQuestionArray[x-1].options[2]));
    option4.appendChild(document.createTextNode(selectedQuestionArray[x-1].options[3]));
  
}
// clear all content 
function clear(){
    question.textContent=" ";
    option1.textContent=" ";
    option2.textContent=" ";
    option3.textContent=" ";
    option4.textContent=" ";
}

// start button function
function start(){
    const div=document.querySelector(".start");
    div.style.display='none';
    const div2=document.querySelector(".tab");
    div2.style.display="block";
    questionNo=1;
    timeRemaining=300;
    timer();
    unselectAll();
    updateNo(questionNo);
    navigate(questionNo,p,n,s);
    selectedQuestionArray=[];
    for(let i=0;i<6;i++){
        generateQuestion();
    }
    display(questionNo);
    selectedOptionArray=[-1,-1,-1,-1,-1];
  }

function next(){
    clear()
    // selectedOptionArray[questionNo-1]=selectedOptionNo;
    questionNo++;
    unselectAll();
    updateNo(questionNo);
    navigate(questionNo,p,n,s);
    display(questionNo);
    select(questionNo);
    console.log(selectedOptionArray);
}

function prev(){
    clear();
    questionNo--;
    unselectAll();
    updateNo(questionNo);
    navigate(questionNo,p,n,s);
    display(questionNo);
    select(questionNo);
}

//rebuilding queArray
function rebuiltQueArray(){
      queArray=[...queArray,...selectedQuestionArray];
      selectedQuestionArray=[];
}

// submit button function 
function submit(){
    const div2=document.querySelector(".tab");
    div2.style.display="none";
    const div=document.querySelector(".result");
    div.style.display='block';
    clear();
    selectedOptionArray[questionNo-1]=selectedOptionNo;
    console.log(selectedOptionArray);
    // questionNo=0;
    clearMessage();
    evalscore();
    displayResult();
    // console.log(selectedOptionArray);
}

function requiz(){
    const div=document.querySelector(".result");
    div.style.display='none';
    quiz();
    rebuiltQueArray();
    selectedOptionArray=[-1,-1,-1,-1,-1];
}

function quit(){
    const div=document.querySelector(".result");
    div.style.display='none';
    const div3=document.querySelector("#quiz");
    div3.style.display="block";
    rebuiltQueArray();
    unselectAll();
    selectedOptionArray=[-1,-1,-1,-1,-1];
//     score=0;
//     skip=0;
 }

//option select
const choice=document.querySelectorAll("#ans");
const one=document.querySelector(".optionOne");
const two=document.querySelector(".optionTwo");
const three=document.querySelector(".optionThree");
const four=document.querySelector(".optionFour");
let selectedOptionNo=-1;
choice.forEach(function (opt){
    opt.addEventListener("click",function (e){
            unselectAll();
            e.target.style.backgroundColor="green";
            if(e.target.className==="optionOne"){
                selectedOptionNo=0;
            }
            else if(e.target.className==="optionTwo"){
                selectedOptionNo=1;
            }
            else if(e.target.className==="optionThree"){
                selectedOptionNo=2;
            }
            else if(e.target.className==="optionFour"){
                selectedOptionNo=3;
            }
            selectedOptionArray[questionNo-1]=selectedOptionNo;
    })
})

let selectedOptionArray=[];
function select(x){
    switch(selectedOptionArray[x-1]){
        case 0:
            unselectAll()
            one.style.backgroundColor="green";
            break;
        case 1:
            unselectAll()
            two.style.backgroundColor="green";
            break;
        case 2:
            unselectAll()
            three.style.backgroundColor="green";
            break;
        case 3:
            unselectAll()
            four.style.backgroundColor="green";
            break;
        case -1:
            unselectAll();
            break;
    }
}

function unselectAll(){
    const div=document.querySelectorAll("#ans");
    div.forEach(function (y){
        y.style.backgroundColor="white";
    })
}

// score evaluation..
let score;
function evalscore(){
   let flag=0;
   for(let i=0;i<5;i++){
        //console.log(selectedOptionArray[i])
         //console.log(selectedQuestionArray[i].ans)
       if(selectedOptionArray[i]!==-1){
           if(selectedOptionArray[i]===selectedQuestionArray[i].ans){
            flag++;
            //console.log(flag)
        }
       }
        
   }
   score=flag;
}
//displayScore
const resultDiv=document.querySelector(".resultMessage");
function displayResult(){
    function review(){
        if (score === 5) {
            return "Excellent! 🌟🌟🌟🌟🌟";
          } else if (score=== 4) {
            return "Very Good! 🌟🌟🌟🌟";
          } else if (score=== 3) {
            return "Good! 🌟🌟🌟";
          } else if (score=== 2) {
            return "Fair! 🌟🌟";
          } else {
            return "Need improvement! 🌟";
          }
    }
    const message=review()
    resultDiv.appendChild(document.createTextNode(`You score ${score}. 
    ${message}`))
}
function clearMessage(){
    resultDiv.textContent=" ";
}