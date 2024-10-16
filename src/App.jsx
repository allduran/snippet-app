import { useEffect, useState } from "react";
import SnippetGrid from "./components/SnippetGrid";
import SnippetInput from "./components/SnippetInput";
import "./App.css";

const App = () => {
  const [snippets, setSnippets] = useState([]);
  const [isInputVisible, setIsInputVisible] = useState(false); // State to manage SnippetInput visibility

  // Load snippets from localStorage when the app starts
  useEffect(() => {
    const savedSnippets = localStorage.getItem("snippets");
    if (savedSnippets) {
      setSnippets(JSON.parse(savedSnippets));
    }
  }, []);

  // Save snippets to localStorage whenever snippets change
  useEffect(() => {
    localStorage.setItem("snippets", JSON.stringify(snippets));
  }, [snippets]);

  // Add a new snippet
  const addSnippet = (newSnippet) => {
    setSnippets([...snippets, newSnippet]);
  };

  // Delete a snippet
  const deleteSnippet = (index) => {
    const updatedSnippets = snippets.filter((_, i) => i !== index);
    setSnippets(updatedSnippets);
  };

  return (
    <div className="app">
      <div className="menu-bar">
        <h1>Code Snippet Manager</h1>

        <button onClick={() => setIsInputVisible(!isInputVisible)}>
          {isInputVisible ? "Hide Input" : "Add Snippet"}
        </button>
      </div>
      {isInputVisible && <SnippetInput addSnippet={addSnippet} />}
      <SnippetGrid snippets={snippets} deleteSnippet={deleteSnippet} />
    </div>
  );
};

export default App;
