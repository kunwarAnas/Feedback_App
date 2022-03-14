import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "this item is a feedback",
      rating: 8,
    },
    {
      id: 2,
      text: "this item is a feedback 2",
      rating: 9,
    },
    {
      id: 3,
      text: "this item is a feedback 3",
      rating: 10,
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })


  //delete feedback
  const deleteFeedback = (id) => {
    let newArr = feedback.filter((feed) => {
      return feed.id !== id;
    })
    setFeedback([...newArr])
  }
  // add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log([newFeedback, ...feedback]);
    setFeedback([newFeedback, ...feedback])

  }
  // edi feedback
  const editFeedback = (item) => {
    console.log(item);
    setFeedbackEdit({
      item : item,
      edit: true
    })
  }
  // update Feedback 
  const updateFeedback = (id, updItem)=>{
    setFeedback(
      feedback.map((item)=>(item.id==id ? {...item , ...updItem} : item))

    )
  }
  return <FeedbackContext.Provider value={{
    feedback,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
    feedbackEdit,
  }} >
    {children}
  </FeedbackContext.Provider>

}

export default FeedbackContext