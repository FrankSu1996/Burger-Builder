import React, {Component} from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  //only render modal if state of show props changes
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <React.Fragment>
        <Backdrop
          show={this.props.show}
          clicked={this.props.modalClosed}
        ></Backdrop>
        <div
          className={styles.Modal}
          style={{
            display: this.props.show ? 'inline' : 'none',
            transform: this.props.show ? 'translateY(0)' : 'translateY(-11vh)',
            opacity: this.props.show ? '1' : '0',
          }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
