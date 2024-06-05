import PropTypes from 'prop-types';
import TopicItem from './TopicItem';

TopicList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func,
};

export default function TopicList({ categories, onDelete, onSelect }) {
  return (
    <ul className="sidebar-list">
      {categories.map((category) => (
        <TopicItem
          onDelete={onDelete}
          key={category.id}
          category={category}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
}
