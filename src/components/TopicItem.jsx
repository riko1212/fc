import PropTypes from 'prop-types';

TopicItem.propTypes = {
  item: PropTypes.object,
  onDelete: PropTypes.func,
};

export default function TopicItem({ item, onDelete }) {
  const handleDelete = () => {
    onDelete(item);
  };
  return (
    <li className="sidebar-item">
      <div href="#" className="sidebar-link">
        {item.name}
        <button
          type="button"
          className="sidebar-item-delete"
          onClick={handleDelete}
        >
          +
        </button>
      </div>
    </li>
  );
}
