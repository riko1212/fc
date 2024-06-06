import FormAddCategory from './FormAddCategory';
import TopicList from './TopicList';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

Sidebar.propTypes = {
  children: PropTypes.node,
  onCategorySelect: PropTypes.func.isRequired,
  onCategoryDelete: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string,
};

const topicList = [
  { id: 1, name: 'House' },
  { id: 2, name: 'Kids' },
  { id: 3, name: 'Food' },
  { id: 4, name: 'Transport' },
  { id: 5, name: 'Education' },
  { id: 6, name: 'Health' },
];

export default function Sidebar({
  onCategorySelect,
  onCategoryDelete,
  selectedCategory,
}) {
  const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const [categories, setCategories] = useState(() => {
    const storedCategories = localStorage.getItem(
      `categories_${currentUser.id}`
    );
    return storedCategories ? JSON.parse(storedCategories) : topicList;
  });

  useEffect(() => {
    localStorage.setItem(
      `categories_${currentUser.id}`,
      JSON.stringify(categories)
    );
  }, [categories, currentUser.id]);

  const [showAddCategory, setShowAddCategory] = useState(false);

  function handleShowAddCategory() {
    setShowAddCategory((show) => !show);
  }

  function handleAddCategory(newCategory) {
    setCategories((prevCategories) => [...prevCategories, newCategory]);
    setShowAddCategory(false);
  }

  function handleDeleteCategory(categoryToDelete) {
    const updatedCategories = categories.filter(
      (category) => category.id !== categoryToDelete.id
    );
    setCategories(updatedCategories);

    localStorage.removeItem(`items_${currentUser.id}_${categoryToDelete.name}`);
    localStorage.removeItem(`sum_${currentUser.id}_${categoryToDelete.name}`);

    onCategoryDelete();
  }

  function handleCategorySelect(category) {
    onCategorySelect(category.name);
  }

  return (
    <aside className="sidebar">
      <TopicList
        categories={categories}
        onDelete={handleDeleteCategory}
        onSelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />
      {showAddCategory && <FormAddCategory onAddCategory={handleAddCategory} />}
      <button
        onClick={handleShowAddCategory}
        type="button"
        className={
          !showAddCategory ? 'add-category-btn' : 'add-category-btn close'
        }
      >
        {!showAddCategory ? 'Add category' : 'Close'}
      </button>
    </aside>
  );
}
