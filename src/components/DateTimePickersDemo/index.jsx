import { DatePicker, MuiPickersUtilsProvider, TimePicker } from 'material-ui-pickers';

import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    grid: {
        width: '60%',
    },
};

class MaterialUIPickersDemo extends React.Component {
    state = {
        selectedDate: new Date('2019-03-31T21:11:54'),
    };

    handleDateChange = date => {
        this.setState({ selectedDate: date });
    };

    render() {
        const { classes } = this.props;
        const { selectedDate } = this.state;

        return ( <
            MuiPickersUtilsProvider utils = { DateFnsUtils } >
            <
            Grid container className = { classes.grid }
            justify = "space-around" >
            <
            DatePicker margin = "normal"
            label = "Date picker"
            value = { selectedDate }
            onChange = { this.handleDateChange }
            /> <
            TimePicker margin = "normal"
            label = "Time picker"
            value = { selectedDate }
            onChange = { this.handleDateChange }
            /> < /
            Grid > <
            /MuiPickersUtilsProvider>
        );
    }
}

MaterialUIPickersDemo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MaterialUIPickersDemo);