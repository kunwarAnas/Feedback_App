import './App.css';
import Header from './Components/Header';
import FeedbackList from './Components/FeedbackList';
import FeedbackData from './Data/feeedbackData';
import { useState } from 'react';
import FeedbackStats from './Components/FeedbackStats';
import FeedbackForm from './Components/FeedbackForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import AboutIconLink from './Components/AboutIconLink';
import {FeedbackProvider} from './Context/FeedbackContext'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <FeedbackProvider>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route exact path='/' element={
                <>
                  <FeedbackForm ></FeedbackForm>
                  <FeedbackStats  />
                  <FeedbackList />
                </>
              } />
              <Route exact path='/about' element={<AboutPage />} />
            </Routes>
            <AboutIconLink />
          </div>
        </Router>
      </FeedbackProvider>
    </>
  );
}

export default App;
