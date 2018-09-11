import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddNew from './addNew';
import Select from './selectPayment';

export default class EditCustomer extends React.Component {

    constructor(props){
        super(props);
        console.log('<------------- PROPS IN EDIT  CUSTOMER', this.props);
        // this.setState(this.props.account);
        // if(this.props.id){
        //     let currentAccount = this.props.accounts.find(el => el.id === this.props.id);
        //     this.setState(...currentAccount);
        // }
    }

    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleSave = () => {
        console.log('UPDATED STATE _', this.state);
        this.props._edit(this.state);
        this.handleClose();
    }

    componentDidMount(){
        this.setState(this.props.account);
    }

    render() {
        console.log(this.props)
        return (
            <div className="formButton">

                <Button onClick={this.handleClickOpen} class="buttonAdd">
                    <i class="fas fa-edit" >      </i>
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Edit Customer Account</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Here you can edit a new account to use our service. Specify your data to successfully save your account.
                        </DialogContentText>
                        <form>
                            <input type="hidden" autocomplete="transaction-currency" value="CHF"></input>
                            <input type="hidden" autocomplete="transaction-amount" value="15.00"></input>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Name"
                                value={this.state.name}
                                onChange={(e)=>{this.setState({name:e.target.value})}}
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                id="address"
                                label="Address"
                                value={this.state.address}
                                onChange={(e)=>{this.setState({address:e.target.value})}}
                                type="text"
                                fullWidth
                            />
                            <Select/>
                            <TextField
                                fullWidth
                                margin="dense"
                                id="cardNumber"
                                label="Card number"
                                value={this.state.cardNumber}
                                onChange={(e)=>{this.setState({cardNumber:e.target.value})}}
                                InputProps={{
                                    type : "text",
                                    inputmode : "numeric",
                                    autocomplete : "cc-number",
                                    max :  "16"
                                }}
                            />
                            <TextField
                                id="date"
                                label="Date"
                                value={this.state.expDate}
                                onChange={(e)=>{this.setState({expDate:e.target.value})}}
                                type={"month"}
                                InputProps={{
                                    type : "month",
                                    autocomplete : "cc-exp",
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="CVVcode"
                                label="CVV code"
                                value={this.state.cvvCode}
                                onChange={(e)=>{this.setState({cvvCode:e.target.value})}}
                                autoComplete={"cc-csc"}
                                max="3"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSave} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
