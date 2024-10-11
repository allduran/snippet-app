import PropTypes from 'prop-types';
import '../styles/SnippetCard.css';

const SnippetCard = ({ snippet, onClick, onDelete }) => {
  return (
    <div className="snippet-card" onClick={onClick}>
      <h2>{snippet.title}</h2>
      <button onClick={(e) => {
        e.stopPropagation(); // Prevent triggering onClick for viewing details
        onDelete();
      }}>Delete</button>
    </div>
  );
};

SnippetCard.propTypes = {
  snippet: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default SnippetCard;
