import React, { useState, useEffect } from 'react';
import './ChatBot.css';
import { faMessage, faArrowRight, faX, faRobot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [chatVisible, setChatVisible] = useState(true);

  useEffect(() => {
    // Add the initial welcome message when the component mounts
    setMessages([{ text: 'Hi, I am LocoBo! How may I help you? 🤖', type: 'user' }]);
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    // Add user message
    setMessages([...messages, { text: input, type: 'self' }]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { text: 'Bot response here', type: 'user' }]);
    }, 1000);
  };

  const handleChatToggle = () => {
    setChatVisible(!chatVisible);
  };

  return (
    <div>
      <div id="body">
        <div
          id="chat-circle"
          className="btn btn-raised"
          onClick={handleChatToggle}
        >
          <div id="chat-overlay"></div>
          <FontAwesomeIcon icon={faMessage} />
        </div>

        <div className={`chat-box ${chatVisible ? 'visible' : ''}`}>
          <div className="chat-box-header">
            Chat
            <span className="chat-box-toggle" onClick={handleChatToggle}>
              <FontAwesomeIcon icon={faX} size="xs" />
            </span>
          </div>
          <div className="chat-box-body">
            <div className="chat-box-overlay"></div>
            <div className="chat-logs">
              {messages.map((msg, index) => (
                <div key={index} className={`chat-msg ${msg.type}`}>
                  <span className="msg-avatar">
                    {msg.type === 'user' && <FontAwesomeIcon icon={faRobot} className="icon" />}
                  </span>
                  <div className="cm-msg-text">
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="chat-input">
            <form onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="chat-input"
                  placeholder="Send a message..."
                  value={input}
                  onChange={handleInputChange}
                />
                <button
                  type="submit"
                  className="chat-submit"
                  id="chat-submit"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
