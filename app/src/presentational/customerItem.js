import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Button from './buttons';
import AddNewCustomer from './addNewCustomer';

const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class RecipeReviewCard extends React.Component {
    state = { expanded: false };

    render() {
        const { classes } = this.props;

        return (
            <div class="accounts">
                <Card className={classes.card} class="account">
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar}>
                                R
                            </Avatar>
                        }
                        title="Name"
                        subheader="Payment"
                    />
                    <CardContent>
                        <Typography component="p">
                            <p>Account No: </p>
                            <p>Issuing bank: </p>
                        </Typography>
                    </CardContent>
                    <Button/>
                </Card>
                <Card className={classes.card} class="account">
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar}>
                                R
                            </Avatar>
                        }
                        title="Name"
                        subheader="Payment"
                    />
                    <CardContent>
                        <Typography component="p">
                            <p>Account No: </p>
                            <p>Issuing bank: </p>
                        </Typography>
                    </CardContent>
                    <Button class="buttonAdd"/>
                </Card>
                <AddNewCustomer/>
            </div>
        );
    }
}

RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);

