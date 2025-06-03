// First, I’d create a state variable for the feedback textarea.
//  I’d also have another state for any error message,
//  and maybe one for the ‘thank you’ confirmation.
// The component would have a textarea for user input, 
// and a Submit button. When the button is clicked,
//  I’d check if the input is empty: if so, set an error message.
// If there’s feedback, I’d log it (or call an API in production),
//  clear the input, show a thank you message, and use setTimeout 
// to remove the thank you after 3 seconds.
// I’d also make sure to disable the Submit button while waiting,
//  and maybe handle edge cases (like trimming spaces).
import React, { useState } from 'react';

const FeedBackWidget = () => {
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');
  const [thankYou, setThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!feedback.trim()) {
      setError('Feedback cannot be empty');
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Feedback submitted:', feedback);
      setFeedback('');
      setThankYou(true);
      setError('');
      setIsSubmitting(false);
      
      // Clear thank you message after 3 seconds
      setTimeout(() => {
        setThankYou(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="feedback-widget">
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Your feedback here..."
      />
      <button onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
      {error && <p className="error">{error}</p>}
      {thankYou && <p className="thank-you">Thank you for your feedback!</p>}
    </div>
  );
}
export default FeedBackWidget;