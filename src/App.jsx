// @ts-nocheck
import { useState } from 'react'
import { HeaderSection } from './components/HeaderSection'
import { ChatInput } from './components/ChatInput'
import { MessageSender } from './components/MessageSender'
import { ChatMessages } from './components/ChatMessages';
import './App.css'
import './index.css'
      

function App(){

  const [chatMessages, setChatMessages] = useState([]);

  // const chatMessages = msgArray[0];
  // const setChatMessages = msgArray[1];
  
  //this line is the shortcut for the two lines of code above.
  // const [chatMessages,setChatMessages] = msgArray;

  // and the above line was shorted more by directly
  //  destructuing the initial array above 

  return (
    <div className="app-container">

      <HeaderSection/>
      <ChatMessages
      chatMessages={chatMessages} 
      />
      <ChatInput 
      chatMessages = {chatMessages}
      setChatMessages = {setChatMessages}
      />
      
    </div>
  );
}

export default App
