import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataSelector from 'selectors/dataSelector';
import { actions, startPolling } from 'reducers/dataReducer';
import ChartContainer from 'components/ChartContainer';

const mapStateToProps = state => ({
  ...DataSelector(state),
});

const mapDispatchToProps = {
  ...actions,
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class DashboardViewWrapper extends Component {

  componentWillMount() {
    startPolling(this.props.fetchItem);
  }

  render() {
    return (
      <div>
        <ChartContainer items={this.props.items}/>
      </div>
    );
  }
}

export default DashboardViewWrapper;
