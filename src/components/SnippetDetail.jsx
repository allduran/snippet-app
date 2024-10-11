import PropTypes from 'prop-types';

import '../styles/SnippetDetail.css';

const SnippetDetail = ({ snippet, onClose, onDelete }) => {
  return (
    <div className="snippet-detail">
      <h2>{snippet.title}</h2>
      <pre><code>{snippet.code}</code></pre>
      <button onClick={onClose}>Close</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

SnippetDetail.propTypes = {
  snippet: PropTypes.shape({
    title: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default SnippetDetail;
