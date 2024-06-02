import PropTypes from 'prop-types';

TopicItem.propTypes = {
  item: PropTypes.object,
  onDelete: PropTypes.func,
};

export default function TopicItem({ item, onDelete }) {
  const handleDelete = () => {
    onDelete(item); // Викликаємо функцію видалення з переданим об'єктом
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
