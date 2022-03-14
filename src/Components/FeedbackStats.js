import React,{useContext} from 'react';
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)
    let Average = feedback.reduce((acc,cur)=>{
        return (acc + cur.rating)
    },0)/feedback.length
  return (
    <div className='feedback-stats' >
        <h4>{feedback.length} Reviews</h4>
        <h4>Average rating is {isNaN(Average)?0:Average}</h4>
    </div>
  )
}

export default FeedbackStats