import "../../style/modal.css";

const Modal = (props) => {
  const { state, toggleModal, children } = props;

  const preventBubbling = (e) => {
    if (e.target === e.currentTarget) toggleModal();
  };

  return (
    <div
      className={state ? "outer openOuter" : "outer"}
      onClick={preventBubbling}
    >
      <div className={state ? "inner openInner" : "inner"}>{children}</div>
    </div>
  );
};

export default Modal;
