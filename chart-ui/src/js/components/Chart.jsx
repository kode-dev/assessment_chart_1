import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

export const CHART_TYPES = {
  LAST_SECOND: {
  	index: 0,
  	type: 'LAST_SECOND',
  	label: 'Last Second',
  	length: 1000
  },
  LAST_10_SECONDS: {
  	index: 1,
  	type: 'LAST_10_SECONDS',
  	label: 'Last 10 Seconds',
  	length: 10000
  },
  LAST_MINUTE: {
  	index: 2,
  	type: 'LAST_MINUTE',
  	label: 'Last Minute',
  	length: 60000
  },
  LAST_10_MINUTES: {
  	index: 3,
  	type: 'LAST_10_MINUTES',
  	label: 'Last 10 Minutes',
  	length: 600000
  },
  LAST_HOUR: {
  	index: 4,
  	type: 'LAST_HOUR',
  	label: 'Last Hour',
  	length: 3600000
  }
}

class Chart extends Component {
  render() {
    if (!this.props.items || this.props.items.isEmpty()) {
      return <div>No data to display.</div>;
    }
    switch (this.props.chartType.type) {
    	case CHART_TYPES.LAST_SECOND.type:
    		// TODO
    	default:
    		// TODO
    }
    return (
      <div className='chart-data'>
      	{JSON.stringify(this.props.items)}
      </div>
    );
  }
}

Chart.propTypes = {
  chartType: PropTypes.object.isRequired,
  items: ImmutablePropTypes.list.isRequired
};

export default Chart;
