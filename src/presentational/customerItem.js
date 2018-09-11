import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import EditCustomer from './editCustomer'
import DeleteConfirm from './deleteConfirm'

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
    constructor(props){
        super(props);
        console.log('PROPS : ', this.props);

        this.state = {
            data: [],
            selectedAccount: 0,
            currentId: 0
        }
    }


    componentWillReceiveProps(nextProps){
        this.setState({
            data : nextProps.accounts
        })
    }

    componentDidMount(){
        this.setState({data: this.props.accounts})
    }

    _save = ({id, name, address, payment, cardNumber, expDate, cvvCode}) => {
        this.props.add(id, name, address, payment, cardNumber, expDate, cvvCode);
    }

    _edit = ({id, name, address, payment, cardNumber, expDate, cvvCode}) => {
        console.log('updates', name);
        this.props.edit(id, name, address, payment, cardNumber, expDate, cvvCode);
    }

    _delete = (id) => {
        console.log(id)
        this.props.delete(id)
    }

    _change(id){

    }

    render() {
        const { classes } = this.props;
        console.log('PROPS : ', this.props);
        return (
            <div className="accounts">
                {this.props.accounts ? this.props.accounts.map(el => {
                    return (<Card className={classes.card} class="account">
                        <CardHeader
                            avatar={
                                <Avatar aria-label="Recipe" className={classes.avatar}>
                                    {el.name[0]}
                                </Avatar>
                            }
                            title={el.name}
                            subheader={el.id}
                        />
                        <CardContent>
                            <div className={'radio_button_for_account'}>
                                <input name="account" value={el.id} type="radio">
                                </input>

                            </div>
                            <Typography component="p">
                                <p>Expiration: {el.expDate}</p>
                                <p>Card number: {el.cardNumber}</p>
                            </Typography>
                        </CardContent>
                        <div className="buttons_for_account">
                            <DeleteConfirm id={el.id} delete={this._delete}/>
                            <EditCustomer account={el} _edit={this._edit}/>
                        </div>
                    </Card>)
                })
                :

                    <p>There is no account</p>
                }


                <AddNewCustomer _save = {this._save}/>
            </div>
        );
    }
}

RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);

