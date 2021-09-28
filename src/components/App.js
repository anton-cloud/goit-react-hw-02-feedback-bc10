import React, {Component} from "react";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Notification from "./notification/Notification";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics ";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onHandleClick = (e) => this.setState(prev => ({
    [e.target.name]: prev[e.target.name] +=1, 
  }))

  countTotalFeedback = () => Object.values(this.state).reduce((a, b) => a + b)

  countPositiveFeedbackPercentage = () => {
    const {good} = this.state;
    return Math.round( good / this.countTotalFeedback() * 100)
  }

  render() {
    const {good,neutral,bad} = this.state;
    return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onHandleClick}/>
      </Section>
      <Section title="Please leave feedback">
        {this.countTotalFeedback() ? <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}/> : <Notification message='No feedback given'/>}
      </Section>
      </>
    );
  }
}

export default App;