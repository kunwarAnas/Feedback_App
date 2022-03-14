import Card from "./shared/Card"
import { useContext } from "react"
import {FaTimes , FaEdit} from 'react-icons/fa'
import FeedbackContext from "../Context/FeedbackContext"
function FeedbackItems({ item }) {
    const {deleteFeedback , editFeedback} = useContext(FeedbackContext)
    return (
        <Card>
            <div className='num-display'> {item.rating} </div>
             <button className="close" onClick={()=>deleteFeedback(item.id)}>
                 <FaTimes color='purple'/>
             </button>
             <button className="edit" onClick={()=>editFeedback(item)} ><FaEdit color='purple'/></button>
            <div className='text-display'>{item.text}</div>
        </Card>

    )
}

export default FeedbackItems