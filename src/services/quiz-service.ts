import { Quiz, QuestionType }  from './../Types/quiz-types'

const shuffleArray = (array:any[]) => 
[...array].sort(() => Math.random() - 0.5);


export const getQuizDetails  = async (totalQuestions:number, level:string): Promise<Quiz[]>=> {
const res =  await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}`);
const {results} = await res.json();
const quiz:Quiz[] = results.map((questionObj:QuestionType)=>{
return {
    question:questionObj.question,
    answer: questionObj.correct_answer,
    option:shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
}
})
return quiz;
}
