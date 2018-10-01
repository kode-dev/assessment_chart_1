import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Chart, { CHART_TYPES } from './Chart';
import ChartPicker from './ChartPicker';

class ChartContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chartType: CHART_TYPES.LAST_SECOND
    };
  }

  handleChartSelect(selection) {
    this.setState({
      chartType: CHART_TYPES[selection]
    });
  }

  render() {
    return (
      <div className='chart-container'>
        <ChartPicker
          selected={this.state.chartType}
          onSelect={this.handleChartSelect.bind(this)}
        />
        <Chart
          chartType={this.state.chartType}
          items={this.props.items}
        />
      </div>
    );
  }
}

ChartContainer.propTypes = {
  items: ImmutablePropTypes.list.isRequired
};

export default ChartContainer;
