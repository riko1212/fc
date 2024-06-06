import PropTypes from 'prop-types';

TopicItem.propTypes = {
  onDelete: PropTypes.func,
  category: PropTypes.object,
  onSelect: PropTypes.func,
  selectedCategory: PropTypes.string,
};

export default function TopicItem({
  onDelete,
  onSelect,
  category,
  selectedCategory,
}) {
  return (
    <li
      className={
        selectedCategory === category.name
          ? 'sidebar-item selected'
          : 'sidebar-item'
      }
    >
      <div className="sidebar-link" onClick={() => onSelect(category)}>
        <span>{category.name}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(category);
          }}
          className="sidebar-item-delete"
        >
          +
        </button>
      </div>
    </li>
  );
}
