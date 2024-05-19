import PropTypes from 'prop-types'

DeleteModal.propTypes = {
  onModalClose: PropTypes.func,
  onUpdateList: PropTypes.func,
  onItemDelete: PropTypes.func,
  isModalClose: PropTypes.bool,
}

export default function DeleteModal({
  onModalClose,
  isModalClose,
  onItemDelete,
  // onUpdateList,
}) {
  return (
    <div className={isModalClose ? 'backdrop clicked' : 'backdrop'}>
      <div className="modal delete-modal ">
        <button
          type="button"
          className="modal-close-btn"
          onClick={onModalClose}
        >
          X
        </button>
        <p className="modal-text">Sure?</p>
        <div className="modal-btns">
          <button type="button" className="btn" onClick={onItemDelete}>
            Yep
          </button>
          <button type="button" className="btn" onClick={onModalClose}>
            Nope
          </button>
        </div>
      </div>
    </div>
  );
}
