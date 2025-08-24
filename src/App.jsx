import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput'
import {Chatbot} from 'supersimpledev'
import ChatMessages from './components/ChatMessages'
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || [
  {
  message: 'hello there!',
  sender: 'user',
  id: 'id1'
}, {
  message: 'Hello! how can i help you',
  sender: 'chatbot',
  id: 'id2'
}, {
  message: 'I am looking for a new phone.',
  sender: 'user',
  id: 'id3'
}, {
  message: 'Sure! what kind of phone are you looking for?',
  sender: 'chatbot',
  id: 'id4'
}]);
//const [chatMessages, setChatMessages] = array;
//const chatMessages = array[0]
//const setChatMessages = array[1]

useEffect(() => {
  Chatbot.addResponses({
    'goodbye': 'Goodbye. Have a great day!',
    'give me a unique id': function() {
      return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
    }
  });

// [] tells useEffect to only run once. We only want to run
// this setup code once because we only want to add these
// extra responses once.
}, []);

useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);


  return (
      <div className="app-container">             
      <ChatMessages 
        chatMessages = {chatMessages}/>

      <ChatInput 
        chatMessages = {chatMessages}
        setChatMessages = {setChatMessages}
      />
      </div>
  );
}

export default App
