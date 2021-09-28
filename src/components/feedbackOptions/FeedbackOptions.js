import React from 'react';
import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  
  const capitalizeFirstLetter = (string) => string[0].toUpperCase() + string.slice(1);

  return (
    <ul className={style.FeedbackOptionsList}> 
      {options.map((option) =>
       <li className={style.FeedbackOptionsListItem} key={option}>
        <button className={style.FeedbackOptionsListBtn} name={option} type='button' onClick={onLeaveFeedback}>{capitalizeFirstLetter(option)}</button>
      </li>)}
  </ul>
  );
}

export default FeedbackOptions;