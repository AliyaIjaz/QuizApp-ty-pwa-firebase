import React, { useState } from 'react'
import { propsType } from './../Types/quiz-types'
import useWebAnimations, { zoomIn } from "@wellyshen/use-web-animations";

const QuestionCard:React.FC<propsType>=({question, options, callBack}) => {
  let[userSeletion, setUserSelection] = useState('');

  const handleSelection = (ev:any)=> { 
    setUserSelection(ev.target.value);
  }
  const { ref } = useWebAnimations<HTMLDivElement>({ ...zoomIn });

    return (
        <div className='question-container' ref={ref}>
            <div className='question'>
            <h4>{question}</h4>
            </div>
            <form onSubmit={(e:React.FormEvent<EventTarget>)=>callBack(e,userSeletion)

            }>
                {
                    options.map((opt:string, ind:number)=>{
                        return(
                            <div key={ind}>
                            <label>
                                <input
                                type='radio'
                                name='opt'
                                value={opt}
                                checked={userSeletion===opt}
                                onChange={handleSelection}
                                required
                                />
                                {opt}
                            </label>
                            </div>
                        )
                    })
                 } 
                 <input id='bt' type='submit'/>
            </form>
        </div>
        
    )
}

export default QuestionCard
