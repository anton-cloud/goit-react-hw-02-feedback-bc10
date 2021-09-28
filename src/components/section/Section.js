import React from 'react'

const Section = ({title, children}) => {
  return (
    <section style={{paddingLeft:50}}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
export default Section;