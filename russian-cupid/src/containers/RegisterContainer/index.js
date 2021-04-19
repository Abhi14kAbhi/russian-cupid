import { connect } from 'react-redux';

import Register from '../../components/Register';
import { registerUser } from './actions';

const mapStateToProps = (state) => {
  return {
    userRegistered: state.registerReducer.userData,
    errorObj: state.registerReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (data) => {
      dispatch(registerUser(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
