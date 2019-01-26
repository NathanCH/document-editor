import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { request } from 'modules/documents/requestReducer';
import { setFilter, sortView } from 'modules/documents/visibilityReducer';
import Documents from './Documents';

const mapStateToProps = ({ documents: { request, ui } }) => ({
  documents: request.documents,
  count: request.count,
  isFetching: request.isFetching,
  hasError: request.hasError,
  view: ui.view,
  sort: ui.sort,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    request,
    setFilter,
    sortView,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Documents);