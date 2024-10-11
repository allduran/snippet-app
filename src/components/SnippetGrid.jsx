import { useState } from 'react';
import PropTypes from 'prop-types';
import SnippetCard from './SnippetCard';
import Modal from './Modal'; // Import the Modal component
import '../styles/SnippetGrid.css';

const SnippetGrid = ({ snippets, deleteSnippet }) => {
  const [selectedSnippet, setSelectedSnippet] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const openModal = (snippet) => {
    setSelectedSnippet(snippet);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSnippet(null);
    setIsModalOpen(false);
  };

  return (
    <div className="snippet-grid">
      {snippets.map((snippet, index) => (
        <SnippetCard 
          key={index} 
          snippet={snippet} 
          onClick={() => openModal(snippet)} // Open modal with snippet
          onDelete={() => deleteSnippet(index)}
        />
      ))}
      
      {/* Modal to show snippet details */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedSnippet && (
          <>
            <h2>{selectedSnippet.title}</h2>
            <pre><code>{selectedSnippet.code}</code></pre>
            <button onClick={() => {
              deleteSnippet(snippets.indexOf(selectedSnippet));
              closeModal();
            }}>Delete</button>
          </>
        )}
      </Modal>
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
