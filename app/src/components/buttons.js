import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

function FloatingActionButtons(props) {
    const { classes } = props;
    return (
        <div>
            <Button mini  variant="fab" color="secondary" aria-label="Edit" className={classes.button}>
                <Icon  >edit_icon</Icon>
            </Button>
            <Button mini variant="fab" aria-label="Delete" className={classes.button}>
                <DeleteIcon />
            </Button>
        </div>
    );
}

FloatingActionButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
