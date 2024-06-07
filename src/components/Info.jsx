import PropTypes from 'prop-types';

Info.propTypes = {
  sum: PropTypes.number,
  children: PropTypes.node,
  selectedCategory: PropTypes.string,
};

export default function Info({ sum, children, selectedCategory }) {
  return (
    <div className="info">
      <p className="info-text">
        {selectedCategory}: <span className="info-amount">{sum} UAH</span>
      </p>
      {children}
    </div>
  );
}
