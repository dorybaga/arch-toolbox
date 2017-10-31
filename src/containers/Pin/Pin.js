/*jshint esversion: 6 */
import React, { Component } from 'react';
import pinImg from '../../assets/pin-black-yellow.svg';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class Pin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  openModal(){
    console.log('I am working');
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  render() {
    const pinStyles = {
      position: "absolute",
      top: `${this.props.y}px`,
      left: `${this.props.x}px`
    };
    return (
      <div>
        <a onClick={this.openModal.bind(this)}>
          <div className="pin" style={pinStyles}>
            <img src={pinImg} alt={"pin"} />
          </div>
        </a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <button onClick={this.closeModal.bind(this)}>close</button>
          <div>Yaaaaa!!!!!!!!!!!</div>
        </Modal>
      </div>
    );
  }
}

export default Pin;
