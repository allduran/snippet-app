import { useState } from 'react';
import PropTypes from 'prop-types';

import '../styles/SnippetInput.css';

const SnippetInput = ({ addSnippet }) => {
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && code) {
      addSnippet({ title, code });
      setTitle('');
      setCode('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="snippet-form">
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Snippet Title" 
        required 
      />
      <textarea 
        value={code} 
        onChange={(e) => setCode(e.target.value)} 
        placeholder="Snippet Code" 
        required 
      />
      <button type="submit">Add Snippet</button>
    </form>
  );
};

// Define prop types
SnippetInput.propTypes = {
  addSnippet: PropTypes.func.isRequired,
};

export default SnippetInput;
