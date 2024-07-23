import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './ChatBot.css';
import { faMessage, faArrowRight, faX, faRobot, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [chatVisible, setChatVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    setMessages([{ text: 'Hi, I am LocoBo! How may I help you? 🤖', type: 'user' }]);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    setMessages((prevMessages) => [...prevMessages, { text: input, type: 'self' }]);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/ask', {
        query: input
      });

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.data.answer, type: 'user' }
      ]);
    } catch (error) {
      console.error('Error fetching the bot response:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'There was an error processing your request.', type: 'user' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleChatToggle = () => {
    setChatVisible(!chatVisible);
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = 'mailto:rakshitamanocha@gmail.com';
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
                    {msg.text.includes('mailto:') ? (
                      <a href="#" onClick={handleEmailClick}>Sorry, I do not know what you're asking about. Please email your query</a>
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="chat-msg loading">
                  <div className="cm-msg-text">
                    <FontAwesomeIcon icon={faSpinner} spin /> Thinking...
                  </div>
                </div>
              )}
              <div ref={chatEndRef} /> {/* Scroll to bottom */}
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
