import { connect } from 'react-redux';
import Header from '../../components/Header';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
