import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class NativeSelects extends React.Component {
    state = {
        age: 'Credit card',
        name: 'Payment Method',
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
                <FormControl className={classes.formControl} fullWidth>
                    <InputLabel shrink htmlFor="age-native-label-placeholder">
                        Payment Method
                    </InputLabel>
                    <NativeSelect
                        value={this.state.age}
                        onChange={this.handleChange('age')}
                        input={<Input name="age" id="age-native-label-placeholder" />}
                    >
                        <option selected value={10}>Credit Card</option>
                        <option value={20}>Telephone call</option>
                        <option value={30}>SMS</option>
                    </NativeSelect>
                </FormControl>
        );
    }
}

NativeSelects.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelects);
