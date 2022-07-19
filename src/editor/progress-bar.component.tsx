import React from "react";

const ProgressBar = (props:any ) => {
    const { completed } = props;
  
    /* CodeReview (07-19-2022): 
    * Pull styles from .css file, or be consistent about defining styles in tsx files. 
    Right now we're doing both.
    */
    const containerStyles = {
      height: 20,
      width: 250,
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 50
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: "#00695c",
      borderRadius: 'inherit',
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;