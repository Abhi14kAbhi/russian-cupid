import { connect } from 'react-redux';

import Home from '../../components/Home';
import {
  getCountries,
  getHeader,
  getProfiles,
  getUserDetails,
} from './actions';

const mapStateToProps = (state) => {
  return {
    userData: state.homeReducer.userData,
    countries: state.homeReducer.countries,
    header: state.homeReducer.header,
    profiles: state.homeReducer.profiles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCountries: () => {
      dispatch(getCountries());
    },
    getHeader: () => {
      dispatch(getHeader());
    },
    getProfiles: () => {
      dispatch(getProfiles());
    },
    getUserDetails: () => {
      dispatch(getUserDetails());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
