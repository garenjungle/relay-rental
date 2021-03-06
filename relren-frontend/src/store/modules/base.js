import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

// action tyeps
const SHOW_MODAL = 'base/SHOW_MODAL';
const HIDE_MODAL = 'base/HIDE_MODAL';

const LOGIN = 'base/LOGIN';
const LOGOUT = 'base/LOGOUT';
const CHECK_LOGIN = 'base/CHECK_LOGIN';
const SIGNUP = 'base/SIGNUP';
const CHANGE_ID_INPUT = 'base/CHANGE_ID_INPUT';
const CHANGE_PASSWORD_INPUT = 'base/CHANGE_PASSWORD_INPUT';
const CHANGE_USERNAME_INPUT = 'base/CHANGE_USERNAME_INPUT';
const INITIALIZE_USER_MODAL = 'base/INITIALIZE_USER_MODAL';

const RESERVATION = 'base/RESERVATION';

const TEMP_LOGIN = 'base/TEMP_LOGIN';

// action creators
export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);

export const login = createAction(LOGIN, api.login);
export const logout = createAction(LOGOUT, api.logout);
export const checkLogin = createAction(CHECK_LOGIN, api.checkLogin);
export const signup = createAction(SIGNUP, api.signup);
export const changeIdInput = createAction(CHANGE_ID_INPUT);
export const changePasswordInput = createAction(CHANGE_PASSWORD_INPUT);
export const changeUserNameInput = createAction(CHANGE_USERNAME_INPUT);
export const initializeUserModal = createAction(INITIALIZE_USER_MODAL);

export const reservation = createAction(RESERVATION, api.reservation);

export const tempLogin = createAction(TEMP_LOGIN);

// initial state
const initialState = Map({
  // 모달의 가시성 상태
  modal: Map({
    remove: false,
    login: false, // 추후 구현
  }),
  // 로그인 모달 상태
  userModal: Map({
    userId: '',
    password: '',
    userName: '',
    error: false,
  }),
  logged: false, // 현재 로그인 상태
});

// reducer
export default handleActions(
  {
    [SHOW_MODAL]: (state, action) => {
      const { payload: modalName } = action;
      return state.setIn(['modal', modalName], true);
    },
    [HIDE_MODAL]: (state, action) => {
      const { payload: modalName } = action;
      return state.setIn(['modal', modalName], false);
    },
    ...pender({
      type: LOGIN,
      onSuccess: (state, action) => {
        return state.set('logged', true);
      },
      onError: (state, action) => {
        return state
          .setIn(['userModal', 'error'], true)
          .setIn(['userModal', 'password'], '');
      },
    }),
    ...pender({
      type: SIGNUP,
      onSuccess: (state, action) => {
        return state.set('logged', true);
      },
      onError: (state, action) => {
        return state
          .setIn(['userModal', 'error'], true)
          .setIn(['userModal', 'password'], '');
      },
    }),
    ...pender({
      type: RESERVATION,
      onSuccess: (state, action) => {
        return state;
      },
      onError: (state, action) => {
        return state;
      },
    }),
    ...pender({
      type: CHECK_LOGIN,
      onSuccess: (state, action) => {
        const { logged } = action.payload.data;
        return state.set('logged', logged);
      },
    }),
    [CHANGE_ID_INPUT]: (state, action) => {
      const { payload: value } = action;
      return state.setIn(['userModal', 'userId'], value);
    },
    [CHANGE_PASSWORD_INPUT]: (state, action) => {
      const { payload: value } = action;
      return state.setIn(['userModal', 'password'], value);
    },
    [CHANGE_USERNAME_INPUT]: (state, action) => {
      const { payload: value } = action;
      return state.setIn(['userModal', 'userName'], value);
    },
    [INITIALIZE_USER_MODAL]: (state, action) => {
      // 로그인 모달의 상태를 초기 상태로 설정(텍스트/오류 초기화)
      return state.set('userModal', initialState.get('userModal'));
    },
    [TEMP_LOGIN]: (state, action) => {
      return state.set('logged', true);
    },
  },
  initialState,
);
