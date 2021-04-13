import { connect } from 'react-redux';

import Register from '../../components/Register';
import { registerUser } from './actions';

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (data) => {
      dispatch(registerUser(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(Register);
