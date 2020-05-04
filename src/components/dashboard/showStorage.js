import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Actions from '../../actions';
import _ from 'lodash';

Modal.setAppElement('#root')

class ShowStorage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.saveStorage = this.saveStorage.bind(this)
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
  saveStorage() {
    //this.props.toSagaStorage(this.props.storage, "kenji")
    this.props.toSagaStorage(this.props.storage)
  }
  
  render() {
    const storage = this.storage()
    return (
      <div>
        <div className="modal-cart">
          <button className="cart-btn" onClick={this.openModal}>
            {this.props.len}
            <FontAwesomeIcon icon={['fas', 'shopping-cart']} size="2x" />
          </button>
        </div>
        <Modal
          className="modal-storage"
          overlayClassName="overlay"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        >
          {storage}
          <button onClick={this.saveStorage}>DBに登録〜</button>
          <button onClick={this.closeModal}>閉じる</button>
        </Modal>
      </div>
    )
  }
}
function mapStateToProps(state, ownProps) {
  const {storage} = ownProps;
  return {storage}, state;
}
function mapDispatchToProps(dispatch) {
  return {
    toSagaStorage: (storage) => dispatch(Actions.toSagaStorage(storage))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowStorage);
