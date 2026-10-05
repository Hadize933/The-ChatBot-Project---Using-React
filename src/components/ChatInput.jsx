import {useState} from "react";
import {Chatbot} from "supersimpledev";
 export function ChatInput({chatMessages, setChatMessages}){

  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  
  function saveInputText(event){
    setInputText(event.target.value);
  }
  
  
  async function sendMessage(){

    if(isLoading || inputText === ''){
      return;
    }
    setIsLoading(true);

    setInputText('');
    const newChatMessage = [
      ...chatMessages,
      {
        message: inputText,
        sender:'user',
        id: crypto.randomUUID()
      }
    ];
    
    setChatMessages([
      ...newChatMessage,
      {
        message: <img className="spinner" src="/images/loading-spinner.gif" alt="" />,
        sender:'robot',
        id: crypto.randomUUID()
      }
    ]);
    
    const response = await Chatbot.getResponseAsync(inputText);
    
    setChatMessages([
      ...newChatMessage,
      {
        message: response,
        sender:'robot',
        id: crypto.randomUUID()
      }
    ])
    setInputText('');
    setIsLoading(false);
  }


  return (

    <div className = "chat-input-container">
      <input 
        className = "chat-input"
        type="text" 
        placeholder="Send a message to chatbot"
        onChange = {saveInputText}
        value = {inputText}
      />

      <button 
        onClick = {sendMessage}
        className = "send-button">
        <svg
          className = "send-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="22" y1="2" x2="11" y2="13" />
          
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </div>
  )
}