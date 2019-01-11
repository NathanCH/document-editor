import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { request, setFilter, sortView } from 'modules/documents';
import Documents from './Documents';

const mapStateToProps = ({ documents }) => ({
  documents: documents.documents,
  count: documents.count,
  isFetching: documents.isFetching,
  hasError: documents.hasError,
  view: documents.view,
  sort: documents.sort,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    request,
    setFilter,
    sortView,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Documents);