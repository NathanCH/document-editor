import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { request, filterView, sortView } from 'modules/documents';
import Documents from './Documents';

const mapStateToProps = ({ documents }) => ({
  documents: documents.documents,
  count: documents.count,
  isFetching: documents.isFetching,
  hasError: documents.hasError,
  view: documents.view,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    request,
    filterView,
    sortView,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Documents);