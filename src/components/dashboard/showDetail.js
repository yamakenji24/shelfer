import React, {Component} from 'react';
import Modal from 'react-modal';
import '../../stylesheets/modal.css';

Modal.setAppElement('#root')

export default class ShowDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true})
  }
  closeModal() {
    this.setState({modalIsOpen: false})
  }

  
  render() {
    return (
      <div>
        <button onClick={this.openModal}>詳細を見る</button>
        <Modal
          className="modal-detail"
          overlayClassName="overlay"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        >
          <h3>{this.props.title}</h3>
          <img
            alt={this.props.title}
            src={this.props.imageLinks === undefined ? null : this.props.imageLinks}
          />
          <h4>{this.props.authors}</h4>
          <p>{this.props.descriptions}</p>
          <a href={this.props.infoLink} target="_blank" rel="noopener noreferrer">より詳細な情報へ</a>
          <button onClick={this.closeModal}>閉じる</button>
        </Modal>
      </div>
    )
  }
}
