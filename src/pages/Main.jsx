import { useState, useEffect } from 'react';
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
// import UpdateModal from './UpdateModal';

export default function Main() {
  const [sum, setSum] = useState(function () {
    const storeSum = localStorage.getItem('sum');
    return JSON.parse(storeSum);
  });

  // const [items, setItems] = useState(function () {
  //   const storeItems = localStorage.getItem('items');
  //   return JSON.parse(storeItems);
  // });

  const [items, setItems] = useState(() => {
    const storeItems = localStorage.getItem('items');
    if (storeItems) {
      return JSON.parse(storeItems);
    } else {
      return [];
    }
  });

  // const [items, setItems] = useState([]);

  const [isDeleteModalClose, setIsDeleteModalClose] = useState(true);
  const [isClearModalClose, setIsClearModalClose] = useState(true);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);
  // const [itemIdToUpdate, setitemIdToUpdate] = useState(null);
  // const [itemToUpdate, setitemToUpdate] = useState({});

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
    setSum((sum) => {
      let addSum = sum;
      return (addSum += Number(data));
    });
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

  function handleUpdateItem() {
    // setitemIdToUpdate(id);
    // console.log(itemIdToUpdate);
    // setitemToUpdate(items.find((item) => item.id === itemIdToUpdate));
    // setisModalClose(false);
  }

  // function handleConfirmUpdate() {
  //   console.log(123);
  // }

  function handleConfirmDelete() {
    setItems(items.filter((item) => item.id !== itemIdToDelete));
    setSum(
      items
        .filter((item) => item.id !== itemIdToDelete)
        .reduce((total, amount) => {
          return total + Number(amount.income);
        }, 0)
    );
    setIsDeleteModalClose(true);
  }

  function handleClearList() {
    setItems([]);
    setSum(0);
    setIsClearModalClose(true);
  }

  useEffect(
    function () {
      localStorage.setItem('items', JSON.stringify(items));
    },
    [items]
  );

  useEffect(
    function () {
      localStorage.setItem('sum', JSON.stringify(sum));
    },
    [sum]
  );

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
        onModalClose={handleDeleteModalCloseClick}
        isDeleteModalClose={isDeleteModalClose}
        onItemDelete={handleConfirmDelete}
      />

      {/* <UpdateModal
        onModalClose={handleModalCloseClick}
        isModalClose={isModalClose}
        onUpdateList={handleConfirmUpdate}
        itemToUpdate={itemToUpdate}
      /> */}
      <ClearModal
        onModalClose={handleClearModalCloseClick}
        isClearModalClose={isClearModalClose}
        onClearList={handleClearList}
      />
    </>
  );
}
