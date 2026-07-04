'use client'

import { useState } from 'react'

export default function TestPage() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('Waiting for question...')

  async function askGodmode() {
    setAnswer("Thinking (Racing 12 models)...")
    
    const url = "https://sathwik2212-backend-api.hf.space/v1/chat/completions"
    const requestData = {
      model: "ultraplinian/fast",
      messages: [{ role: "user", content: question }],
      stream: false
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData)
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      setAnswer(data.choices[0].message.content)
    } catch (error) {
      console.error(error)
      setAnswer("Error fetching API. Make sure the Hugging Face Space is running!")
    }
  }

  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto', color: 'white' }}>
      <h1 style={{ marginBottom: '20px' }}>G0DM0D3 Simple API Test</h1>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question..." 
          style={{ 
            padding: '10px', 
            width: '100%', 
            flex: 1, 
            background: '#222', 
            color: 'white', 
            border: '1px solid #444',
            borderRadius: '4px'
          }}
        />
        <button 
          onClick={askGodmode}
          style={{ 
            padding: '10px 20px', 
            cursor: 'pointer', 
            background: '#00ff00', 
            color: 'black', 
            border: 'none', 
            fontWeight: 'bold',
            borderRadius: '4px'
          }}
        >
          Submit
        </button>
      </div>

      <div style={{ 
        marginTop: '30px', 
        padding: '20px', 
        border: '1px solid #444', 
        background: '#111',
        borderRadius: '8px',
        minHeight: '100px'
      }}>
        <strong style={{ color: '#00ff00' }}>Answer:</strong>
        <p style={{ marginTop: '10px', lineHeight: '1.6' }}>{answer}</p>
      </div>
    </div>
  )
}
