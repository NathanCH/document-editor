import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { request } from 'modules/documents';
import Documents from './Documents';

const mapStateToProps = ({ documents }) => ({
  documents: documents.documents,
  count: documents.count,
  isFetching: documents.isFetching,
  hasError: documents.hasError,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ request }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Documents);