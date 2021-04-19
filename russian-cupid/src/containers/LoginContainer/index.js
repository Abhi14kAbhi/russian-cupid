import { connect } from 'react-redux';

import Login from '../../components/Login';
import { loginUser } from './actions';

const mapStateToProps = (state) => {
  return {
    userData: state.loginReducer.userData,
    errorObj: state.loginReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (data) => {
      dispatch(loginUser(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
