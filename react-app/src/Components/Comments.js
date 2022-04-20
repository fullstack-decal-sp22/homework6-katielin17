const Comments = ({ comments }) => {
    return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
      {
        comments ? 
        comments.map(c =>
          <p>{c}</p>) : " No one has commented yet. Please leave a message!"  
      }
      
    </div>
  }
  
  export default Comments;