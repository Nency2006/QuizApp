import React from 'react'
import { data } from './Data'
import { useState } from 'react'

export default function Quiz() {
const [index, setindex] = useState(0);
const [finish, setFinish] = useState(false);
const [score, setScore] = useState(0);
const [option, setOption] = useState('');
const correctoption = [
    'Option1','Option1','Option1','Option1','Option1','Option1','Option1','Option1','Option1','Option1',
]

const handlenext = () =>{
    if(correctoption[index] === option){
        setScore(score+1);
    }
    if(index < data.length - 1){
        setindex(index + 1);
        setOption('');
    }else{
        setFinish(true);
    }
    
}

const handleSelect = (opt) => {
    setOption(opt);
}
if(finish){
    return(
        <div>
            <h1>Quiz Complete</h1>
            <h3>Your score is {score} of {data.length}</h3>
        </div>
    )
}
  return (
    <div className='quiz'>
      <h1>Quiz App</h1>
      <h3>{data[index].Question}</h3>
        <ul>
            <li className={option === 'Option1' ? 'selected' : ''}
             onClick={()=> handleSelect('Option1')}>{data[index].Option1}</li>

            <li className={option === 'Option2' ? 'selected' : ''}
             onClick={()=> handleSelect('Option2')}>{data[index].Option2} </li>

            <li className={option === 'Option3' ? 'selected' : ''}
            onClick={()=> handleSelect('Option3')}>{data[index].Option3}</li>

            <li className={option === 'Option4' ? 'selected' : ''}
            onClick={()=> handleSelect('Option4')}>{data[index].Option4}</li>

        </ul>
        <button type='submit' onClick={handlenext} disabled = {!option}>Next</button>
        <p>Question {index+1} out of {data.length} </p>
    </div>
  )
}
