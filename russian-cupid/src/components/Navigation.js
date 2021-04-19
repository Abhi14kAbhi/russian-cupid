import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationBar = styled.div`
  margin-bottom: 15px;
  background-color: lightgray;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <NavigationBar>
    <Link className="btn btn-primary" to="/">
      To-Do List
    </Link>
    <Link className="btn btn-secondary" to="new-item">
      + Add New
    </Link>
  </NavigationBar>
);
