import React, { useState } from 'react';
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import Footer from 'components/Footers/Footer.js';

const Landing = () => {
  const [apiKey, setApiKey] = useState('');
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const [botMessage, setBotMessage] = useState("");
  const sendRequest = async () => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello!" }],
      }),
    });

    const resJson = await response.json();
    console.log(resJson);

    setBotMessage(resJson.choices[0].message.content);
  };

    return (
        <>
          <IndexNavbar fixed />
          <div className="pt-20 flex flex-col min-h-screen bg-gray-100">
            <div className="flex justify-between items-center px-4 w-full">
              <div></div> {/* Placeholder to push the input to the right */}
              <div className="mt-2">
                <input
                  type="password"
                  className="border rounded p-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter API key.."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow">
              <h1 className="text-2xl font-bold mb-4 text-blueGray-600">ChatBot</h1>
              <div className="p-4">
                <button
                  onClick={sendRequest}
                  className="w-40 border rounded bg-lightBlue-500 hover:bg-lightBlue-600 text-white p-2"
                >
                  Send Request
                </button>
                <div className="mt-4 text-lg text-blueGray-600">{botMessage}</div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      );
};

export default Landing;
