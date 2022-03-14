import React,{useContext} from 'react'
import FeedbackItems from './FeedbackItems'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)
  if(!feedback || feedback.length==0){
      return <p>No Feedback Yet</p>
  }  
  return (
    <div className='feedback-list'>
        {feedback.map((item)=>(
            <FeedbackItems key={item.id} item = {item}
            />
        ))}
    </div>
  )
}

export default FeedbackList