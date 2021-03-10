import {connect} from 'react-redux';
import Counter from '../components/counter';
import {increment,decrement,asyncReq} from '../redux/actions';

export default connect(
  state=>({count:state}),
  {increment,decrement,asyncReq}
)(Counter)

