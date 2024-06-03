import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Form from '../components/Form';
import Info from '../components/Info';
import InfoList from '../components/InfoList';
import Footer from '../components/Footer';
import TopicList from '../components/TopicList';
import DeleteModal from '../components/DeleteModal';
import ClearModal from '../components/ClearModal';

export default function Main() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  const [sum, setSum] = useState(() => {
    const storeSum = localStorage.getItem(`sum_${currentUser.id}`);
    return storeSum ? JSON.parse(storeSum) : 0;
  });

  const [items, setItems] = useState(() => {
    const storeItems = localStorage.getItem(`items_${currentUser.id}`);
    return storeItems ? JSON.parse(storeItems) : [];
  });

  const [isDeleteModalClose, setIsDeleteModalClose] = useState(true);
  const [isClearModalClose, setIsClearModalClose] = useState(true);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);

  function handleDeleteModalCloseClick() {
    if (items.length === 0) {
      return;
    }
    setIsDeleteModalClose(!isDeleteModalClose);
  }

  function handleClearModalCloseClick() {
    if (items.length === 0) {
      return;
    }
    setIsClearModalClose(!isClearModalClose);
  }

  function handleChangeSum(data) {
    setSum((sum) => sum + Number(data));
  }

  function handleAddItems(item) {
    setItems((items) => [item, ...items]);
  }

  function handleDeleteItem(id) {
    setItemIdToDelete(id);
    setIsDeleteModalClose(false);
  }

  function handleClearModal() {
    setIsClearModalClose(false);
  }

  function handleConfirmDelete() {
    setItems(items.filter((item) => item.id !== itemIdToDelete));
    setSum(
      items
        .filter((item) => item.id !== itemIdToDelete)
        .reduce((total, amount) => total + Number(amount.income), 0)
    );
    setIsDeleteModalClose(true);
  }

  function handleUpdateItem() {
    // setitemIdToUpdate(id);
    // console.log(itemIdToUpdate);
    // setitemToUpdate(items.find((item) => item.id === itemIdToUpdate));
    // setisModalClose(false);
  }

  function handleClearList() {
    setItems([]);
    setSum(0);
    setIsClearModalClose(true);
  }

  useEffect(() => {
    localStorage.setItem(`items_${currentUser.id}`, JSON.stringify(items));
  }, [items, currentUser.id]);

  useEffect(() => {
    localStorage.setItem(`sum_${currentUser.id}`, JSON.stringify(sum));
  }, [sum, currentUser.id]);

  return (
    <>
      <Header />
      <div className="page-wrap">
        <div className="container page-wrap-container">
          <Sidebar>
            <TopicList />
          </Sidebar>
          <main className="main">
            <Form onAddSum={handleChangeSum} onAddItems={handleAddItems} />
            <Info sum={sum}>
              <InfoList
                items={items}
                onDeleteItem={handleConfirmDelete}
                onDeleteModalOpen={handleDeleteModalCloseClick}
                isDeleteModalClose={isDeleteModalClose}
                isClearModalClose={isClearModalClose}
                onDeleteItemId={handleDeleteItem}
                onUpdateItemData={handleUpdateItem}
                onClearModal={handleClearModal}
              />
            </Info>
          </main>
        </div>
      </div>
      <Footer />
      <DeleteModal
        onDeleteModalClose={handleDeleteModalCloseClick}
        isDeleteModalClose={isDeleteModalClose}
        onItemDelete={handleConfirmDelete}
      />
      <ClearModal
        onClearModalClose={handleClearModalCloseClick}
        isClearModalClose={isClearModalClose}
        onClearList={handleClearList}
      />
    </>
  );
}
