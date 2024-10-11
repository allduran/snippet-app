import { useState } from 'react';
import PropTypes from 'prop-types';
import SnippetCard from './SnippetCard';
import SnippetDetail from './SnippetDetail';

import '../styles/SnippetGrid.css';

const SnippetGrid = ({ snippets, deleteSnippet }) => {
  const [selectedSnippet, setSelectedSnippet] = useState(null);

  return (
    <div className="snippet-grid">
      {snippets.map((snippet, index) => (
        <SnippetCard 
          key={index} 
          snippet={snippet} 
          onClick={() => setSelectedSnippet({ ...snippet, index })} 
          onDelete={() => deleteSnippet(index)}
        />
      ))}
      {selectedSnippet && (
        <SnippetDetail 
          snippet={selectedSnippet} 
          onClose={() => setSelectedSnippet(null)} 
          onDelete={() => {
            deleteSnippet(selectedSnippet.index);
            setSelectedSnippet(null); // Close after deleting
          }}
        />
      )}
    </div>
  );
};

SnippetGrid.propTypes = {
  snippets: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteSnippet: PropTypes.func.isRequired,
};

export default SnippetGrid;
