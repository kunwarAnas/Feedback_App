import React,{useState , useContext, useEffect} from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackForm() {
    const {addFeedback , feedbackEdit , updateFeedback} = useContext(FeedbackContext)
    const[text,setText] = useState('');
    const [Rating , setRating] = useState(10);
    const [btnDisabled , setBtnDisabled] = useState(true);
    const [message , setMessage] = useState('')

    useEffect(()=>{
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])

    const handleTextChange =(e)=>{
        if(text===''){
            setBtnDisabled(true);
            setMessage(null);
        }else if(text !='' && text.trim().length<10){
            setBtnDisabled(true);
            setMessage('Text must be atlest 10 characters')
        }else{
            setBtnDisabled(false);
            setMessage(null)
        }

        setText(e.target.value);
        
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(text.trim().length>10){
            const newFeedback = {
                text,
                rating:Rating,
            }
            
            if(feedbackEdit.edit==true){
                updateFeedback(feedbackEdit.item.id , newFeedback)
            }else{
                addFeedback(newFeedback)
            }

            setText('')
        }
    }
  return (
    <Card>
        <form onSubmit={handleSubmit} >
            <h2>How would you rate your service with us</h2>
            <RatingSelect  select={(Rating)=>setRating(Rating)}></RatingSelect>
            <div className="input-group">
                <input type='text' placeholder='Write a review' value={text} onChange={handleTextChange} />
                <Button type='submit'isDisabled ={btnDisabled} >Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm