import PropTypes from 'prop-types';

TopicItem.propTypes = {
  onDelete: PropTypes.func,
  className: PropTypes.string,
  category: PropTypes.object,
  onSelect: PropTypes.func,
  key: PropTypes.number,
};

export default function TopicItem({
  key,
  onDelete,
  onSelect,
  category,
  className,
}) {
  return (
    <li key={key} className={`sidebar-item ${className}`}>
      <div className="sidebar-link" onClick={() => onSelect(category)}>
        <span>{category.name}</span>
        <button
          onClick={() => onDelete(category)}
          className="sidebar-item-delete"
        >
          +
        </button>
      </div>
    </li>
  );
}
