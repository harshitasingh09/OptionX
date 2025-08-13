import React from "react";
import { Modal, Button } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

type AddToCartPopupProps = {
  show: boolean;
  onClose: () => void;
  onCheckout?: () => void;
};

const AddToCartPopup: React.FC<AddToCartPopupProps> = ({
  show,
  onClose,
  onCheckout,
}) => {
  const navigate = useNavigate();
  return (

    <>
    <div className="modal fade modal-lg" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <Modal
            show={show}
            onHide={onClose}
            size="lg"
            aria-labelledby="add-to-cart-modal"
      centered
      // className="modal-lg"
    >
      <Modal.Body className="modal-body p-0">
        <div className="logo-modal text-center p-3">
          <img src={logo} alt="logo" />
        </div>
        <div className="heading-top-header px-4">
          <h4 className="pb-0 mb-0 text-white">Item added to your cart</h4>
        </div>
        <div className="body-cart-details p-4">
          <div className="cardt-detail d-flex justify-content-between align-items-center">
            <div className="image-box d-flex gap-4 align-items-center">
              <div className="img-cart">
                <img
                  src="https://s3.envato.com/files/336557759/Thumbnail.png"
                  alt="product thumbnail"
                />
              </div>
              <div className="content-text">
                <h6>
                  Avada | Website Builder For WordPress{" "}
                  <span className="d-block">& eCommerce </span>
                </h6>
                <p className="fst-italic">
                  by Theme Fusion in Business
                </p>
              </div>
            </div>
            <div className="amout-cart text-right">
              <div className="amount-web">£69.00</div>
              <p className="m-0">
                License: <span>Regular</span>
              </p>
              <p>
                Support: <span className="text-dark">6 months support</span>
              </p>
            </div>
          </div>
          <div className="item-upgrade mt-3">
            <input
              type="checkbox"
              name="support"
              id="support_78563023"
              value="bundle_12month"
              className="js-support-upgrade item-upgrade__checkbox"
              data-discount-enabled="true"
              data-discount-price="$13"
              data-discount-upgrade-price="$16.38"
              data-discount-original-price="$19"
              data-discount-upgrade-original-price="$22.38"
              data-support-key="bundle_6month"
            />
            <label htmlFor="support_78563023" className="labe-side">
              <strong>
                Extend support to 12 months. +$3.38
              </strong>
            </label>
            <span className="item-upgrade__savings">
              Save $4.50 off regular price.
            </span>
          </div>
        </div>
      </Modal.Body>

      <div className="text-center p-bottom-link fw-light">
        Price is in US dollars and excludes tax and handling fees
      </div>

      <Modal.Footer className="border-0 justify-content-between d-flex mt-3 mb-3">
        <Button
          variant="light"
          className="btn-btnCss rounded-2 border-0 three butn butn__new greyCss w-30"
          onClick={onClose}
        >
          Keep Browsing
        </Button>
        <Button
          variant="primary"
          className="btn-btnCss rounded-2 border-0 three butn butn__new w-30"
          onClick={() => {
            if (onCheckout) onCheckout();
            navigate('/checkout')
          }}
        >
          Go to Checkout
        </Button>
      </Modal.Footer>
    </Modal>
    </div></div></div>
    </>
  );
};

export default AddToCartPopup;
