
export function MessageSender({message, sender}){
  return(
    <div className = {
        sender === 'user'
          ? 'user-message' 
          : 'robot-message'
      }>
      
      {sender === 'robot' && (
          <img 
            src="/images/robot.png" 
            className = "chat-message-profile"
          />
        )}

      <div className = "message-text">
        {message}
      </div>

      <div>
        {sender === 'user' && (
          <img src="/images/user.png"  
          className = "chat-message-profile"/>
        )}
      </div>
    </div>
  );
}