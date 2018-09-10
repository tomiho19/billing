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
export default class FormDialog extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Button onClick={this.handleClickOpen}> <AddNew/> </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Add Customer Account</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Here you can add a new account to use our service. Specify your data to successfully save your account.
                        </DialogContentText>
                        <form>
                            <input type="hidden" autocomplete="transaction-currency" value="CHF"></input>
                            <input type="hidden" autocomplete="transaction-amount" value="15.00"></input>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Name"
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                id="address"
                                label="Address"
                                type="text"
                                fullWidth
                            />
                            <Select/>
                            <TextField
                                fullWidth
                                margin="dense"
                                id="cardNumber"
                                label="Card number"
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
                                defaultValue={"000"}
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
                        <Button onClick={this.handleClose} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
