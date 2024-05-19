import PropTypes from 'prop-types'

CleareModal.propTypes = {
  onModalClose: PropTypes.func,
  onClearList: PropTypes.func,
  isModalClose: PropTypes.bool,
}
export default function CleareModal({
  onModalClose,
  isModalClose,
  onClearList,
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
          <button type="button" className="btn" onClick={onClearList}>
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
