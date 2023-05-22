import React from "react";
const SuccessModal = () => {
  return (
    <>
      <button>modal</button>
      <div
        className="modal fade"
        id="success-modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="success-modal-label"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <i className="fas fa-check fa-2x text-success"></i>
              <h5 className="modal-title" id="success-modal-label">
                Success!
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">Your submission was successful!</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SuccessModal;
