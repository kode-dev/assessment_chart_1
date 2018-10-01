import React, { Component } from 'react';
import {
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton
} from 'react-bootstrap';
import _ from 'lodash';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { CHART_TYPES } from './Chart';

class ChartPicker extends Component {

  renderButton(chartType) {
    return (
      <ToggleButton
        key={chartType.type}
        value={chartType.index}
        onChange={() => this.props.onSelect(chartType.type)}
      >
        {chartType.label}
      </ToggleButton>
    );
  }

  render() {
    const buttons = _.map(CHART_TYPES, this.renderButton.bind(this));

    return (
      <div className='chart-selector'>
        <ButtonToolbar>
          <ToggleButtonGroup
            type='radio'
            name='periods'
            defaultValue={this.props.selected.index}
          >
            {buttons}
          </ToggleButtonGroup>
        </ButtonToolbar>
      </div>
    );
  }
}

ChartPicker.propTypes = {
  selected: PropTypes.object.isRequired
};

export default ChartPicker;
