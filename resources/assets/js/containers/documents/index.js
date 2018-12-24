import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { request } from 'modules/documents';
import Documents from './Documents';

const mapStateToProps = ({ documents }) => ({
  isFetching: documents.isFetching,
  hasError: documents.hasError,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ request }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Documents);