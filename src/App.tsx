import React, { useEffect, useState } from 'react';
import { configMsg } from './firebase';
import { getQuizDetails } from './services/quiz-service';
import { Quiz } from './Types/quiz-types';
import './App.css';
import QuestionCard from './components/QuestionCard';
import ScoreCard from './components/ScoreCard';
import logo from './logo512.png';

function App() {

  let [quiz, setQuiz] = useState<Quiz[]>([])
  let [currStep, setCurrStep] = useState(0);
  let [score, setScore] = useState(0);
  let [restart, setRestart] = useState(true);
  let [isActive, setActive] = useState(true);

  useEffect(() => { configMsg() }, []);

  useEffect(() => {
    async function fetchData() {
      const questions: Quiz[] = await getQuizDetails(5, 'easy');
      setQuiz(questions);
    }
    fetchData();
  }, [restart]);

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();
    const currQuestion = quiz[currStep];
    if (userAns === currQuestion.answer) {
      setScore(++score);
    }

    if (currStep !== quiz.length - 1)
      setCurrStep(++currStep);
    else {
      setScore(0);
      setCurrStep(0);
      setActive(!isActive);
    }
  }

  const handleRestart = (e: any) => {
    e.preventDefault();
    setCurrStep(0);
    setScore(0);
    setQuiz([]);
    setRestart(!restart);
    setActive(!isActive);
  }

  if (!quiz.length)
    return (
      <div className="App">
        <div className="logo-container">
          <img src={logo} />
          <h2>Quiz App</h2>
        </div>
        <h6>Loading....</h6>
      </div>
    )
  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} />
        <h2>Quiz App</h2>
      </div>
      <div className={isActive ? 'show' : 'hide'} >
        <QuestionCard
          options={quiz[currStep].option}
          question={quiz[currStep].question}
          callBack={handleSubmit}
        />
      </div>
      <div className={isActive ? 'hide' : 'show'}>
        <ScoreCard
          score={score}
          callback={handleRestart}
        />
      </div>
    </div>
  );
}


export default App;
