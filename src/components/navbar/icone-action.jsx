function IconAction({ icon }) {
    return (
      <button className="icon-button tooltip">
        {icon} <p className="tweet-actions">{details}</p>
       
      </button>
    );
  }
  
  export default IconAction;
  