import React from 'react';
import styles from './ReservationModal.module.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const ReservationModal = ({
  visible,
  onCancel,
  onReservation,
  onKeyPress,
}) => (
  <ModalWrapper visible={visible}>
    <div className={cx('form')} onKeyPress={onKeyPress}>
      <div onClick={onCancel} className={cx('close')}>
        &times;
      </div>
      <div className={cx('title')}>Reservation</div>
      <div className={cx('description')}>Are you sure?</div>
      <div className={cx('reservation')} onClick={onReservation}>
        Submit
      </div>
    </div>
  </ModalWrapper>
);

export default ReservationModal;
