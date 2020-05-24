import React, { Component } from "react";
import { Modal, Button, Header, Icon } from "semantic-ui-react";

class ModalPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // modalOpen: false
    };
  }


  render() {
      const { modalOpen, handleClose, handleOpen}=this.props;
    return (
      <Modal
        open={modalOpen}
        onClose={handleClose}
        basic
        size='small'
      >
        <Header content='Search and Select an GIF' />
        <Modal.Content>
         
          {this.props.children}
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={handleClose} inverted>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default ModalPopup;
//   render() {
//     const {
//       children,
//       title,
//       showModal,
//       onClose,
//       size,
//       actionButtons,
//       id,
//       innerRef,
//       scrolling,
//       className,
//     } = this.props;
//     return (
//       <Modal
//         className={className}
//         open={showModal}
//         onClose={onClose}
//         size={size}
//         closeOnDimmerClick={false}
//         id={`${id}`}
//       >
//         <div className="modal-loader" ref={innerRef} />{" "}
//         <Modal.Header>{title}</Modal.Header>{" "}
//         <Modal.Content scrolling={scrolling}>{children}</Modal.Content>{" "}
//         <Modal.Actions>
//           {" "}
//           <CommonButton onClick={onClose} className="button-white-gradient">
//             {" "}
//             Close{" "}
//           </CommonButton>{" "}
//           {actionButtons &&
//             actionButtons.map((item) => (
//               <CommonButton
//                 key={item.label}
//                 onClick={() => item.callBack()}
//                 className={item.btnClass || "button-blue-gradient"}
//                 disabled={item.disabled}
//               >
//                 {" "}
//                 {item.label}{" "}
//               </CommonButton>
//             ))}{" "}
//         </Modal.Actions>{" "}
//       </Modal>
//     );
//   }
// }   
// ModalPopup.propTypes = {
//   showModal: PropTypes.bool,
//   match: PropTypes.object,
//   title: PropTypes.string,
//   label: PropTypes.string,

//   onClose: PropTypes.func,
//   size: PropTypes.string,
//   actionButtons: PropTypes.array,
//   id: PropTypes.string,
//   innerRef: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
//   scrolling: PropTypes.bool,
//   className: PropTypes.string,
// };
// ModalPopup.defaultProps = {
//   showModal: false,
//   onClose: () => {},
//   size: "large",
//   actionButtons: [],
//   id: "box_modal",
//   scrolling: true,
//   className: "box_modal",
// };

// export default React.forwardRef((props, ref) => (
//   <ModalPopup innerRef={ref} {...props} />
// ));
