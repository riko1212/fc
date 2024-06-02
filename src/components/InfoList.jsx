import { useState } from 'react';
import PropTypes from 'prop-types';
import InfoItem from './InfoItem';

InfoList.propTypes = {
  onDeleteModalOpen: PropTypes.func.isRequired,
  onDeleteItemId: PropTypes.func.isRequired,
  onUpdateItemData: PropTypes.func.isRequired,
  onClearModal: PropTypes.func.isRequired,
  handleClearList: PropTypes.func,
  items: PropTypes.array.isRequired,
  isModalClose: PropTypes.bool.isRequired,
};

export default function InfoList({
  items,
  onDeleteModalOpen,
  isModalClose,
  onDeleteItemId,
  onUpdateItemData,
  onClearModal,
}) {
  const [sortBy, setSortBy] = useState('order');

  let sortedItems;

  switch (sortBy) {
    case 'description':
      sortedItems = items
        .slice()
        .sort((a, b) => a.topic.localeCompare(b.topic));
      break;
    case 'highest':
      sortedItems = items.slice().sort((a, b) => b.income - a.income);
      break;
    case 'lowest':
      sortedItems = items.slice().sort((a, b) => a.income - b.income);
      break;
    case 'first':
      sortedItems = items
        .slice()
        .sort((a, b) => new Date(a.date) - new Date(b.date));
      break;
    case 'last':
      sortedItems = items
        .slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
    default:
      sortedItems = items;
  }

  return (
    <>
      <ul className="info-list">
        {sortedItems.map((item) => (
          <InfoItem
            item={item}
            key={item.id}
            onDeleteModalOpen={onDeleteModalOpen}
            isModalClose={isModalClose}
            onDeleteItemId={onDeleteItemId}
            onUpdateItemData={onUpdateItemData}
          />
        ))}
      </ul>
      <div className="info-actions">
        <div className="info-sorting">
          <label className="info-sort-text" htmlFor="sort-select">
            Sort by:
          </label>
          <select
            className="info-sort-select btn"
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="order">order</option>
            <option value="highest">from highest</option>
            <option value="lowest">from lowest</option>
            <option value="description">description</option>
            <option value="first">from first</option>
            <option value="last">from last</option>
          </select>
        </div>
        <button className="btn" onClick={onClearModal}>
          Clear list
        </button>
      </div>
    </>
  );
}
