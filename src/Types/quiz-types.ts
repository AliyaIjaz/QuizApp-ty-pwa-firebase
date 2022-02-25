import React from "react"

export type QuestionType = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type Quiz= {
    question:string
    answer: string
    option:string[]
}

export type propsType = {
    question: string
    options: string[]
    callBack:(e:React.FormEvent<EventTarget>, userSelection:string)=>void
}

export type ScorePropstype = {
    score:number
    callback:(e:any)=> void
  }