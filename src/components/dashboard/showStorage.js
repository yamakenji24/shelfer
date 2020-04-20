import React, {Component} from 'react';
import Modal from 'react-modal';
import _ from 'lodash';

Modal.setAppElement('#root')

export default class ShowStorage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  openModal() {
    this.setState({modalIsOpen: true})
  }
  closeModal() {
    this.setState({modalIsOpen: false})
  }
  storage() {
    return _.map(this.props.storage, (value, key, object) => (
      <div key={key}>
        <h4>{value.title}</h4>
      </div>
    ))
  }
  
  render() {
    const storage = this.storage()
    return (
      <div>
        <div className="modal-cart">
          <button onClick={this.openModal}>{this.props.storage.length}  カート</button>
        </div>
        <Modal
          className="modal-storage"
          overlayClassName="overlay"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        >
          {storage}          
          <button onClick={this.closeModal}>閉じる</button>
        </Modal>
      </div>
    )
  }
}

