import React, { Component } from 'react';
import ReservationModal from 'components/modal/ReservationModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';

class ReservationModalContainer extends Component {
  constructor(props){
    super(props);
    this.escFunction = this.escFunction.bind(this);
  }
  escFunction(event){
    console.log(event.keyCode)
    console.log(localStorage.logged)
    if(localStorage.logged != 'true') return;
    if(event.keyCode === 27) {
      this.handleCancel();
    } else if (event.keyCode === 13){
      this.handleReservation();
    }
  }
  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
  }

  handleReservation = async () => {
    const { BaseActions } = this.props;
    try {
      await BaseActions.reservation();
      BaseActions.hideModal('reservation');
    } catch (e) {
      console.log(e);
    }
  };
  handleCancel = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('reservation');
    localStorage.logged = 'false';
  };
  handleKeyPress = e => {
    console.log(e.keyCode);
    if (e.key === 'Enter') {
      this.handleReservation();
    }
  };
  render() {
    const { handleReservation, handleCancel } = this;
    const { visible } = this.props;
    localStorage.logged = 'true';
    return (
      <ReservationModal
        onReservation={handleReservation}
        onCancel={handleCancel}
        visible={visible}
      />
    );
  }
}

export default connect(
  state => ({
    visible: state.base.getIn(['modal', 'reservation']),
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
  }),
)(ReservationModalContainer);
