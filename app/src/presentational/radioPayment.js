import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';

const styles = {
    checked: {},
    size: {
        width: 40,
        height: 40,
    },
    sizeIcon: {
        fontSize: 20,
    },
};

class RadioButtons extends React.Component {
    state = {
        selectedValue: 'PayPal',
    };

    handleChange = event => {
        console.log(event.target.value);
        this.setState({ selectedValue: event.target.value });
    };

    render() {

        return (
            <div>
                <ul className={"selectItems"}>
                    <li className={"payment_select_item"}>
                        <Radio
                            checked={this.state.selectedValue === 'PayPal'}
                            onChange={this.handleChange}
                            value="PayPal"
                            name="radio-button-demo"
                            aria-label="PayPal"
                        />
                        <img width="105px" height="45px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2000px-PayPal.svg.png" alt=""/>
                    </li>
                    <li className={"payment_select_item"}>
                        <Radio
                            checked={this.state.selectedValue === 'VISA'}
                            onChange={this.handleChange}
                            value="VISA"
                            name="radio-button-demo"
                            aria-label="VISA"
                        />
                        <img width="105px" height="45px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2000px-Visa_Inc._logo.svg.png" alt=""/>
                    </li>
                    <li className={"payment_select_item"}>
                        <Radio
                            checked={this.state.selectedValue === 'Balance'}
                            onChange={this.handleChange}
                            value="Balance"
                            name="radio-button-demo"
                            aria-label="Balance"
                        />
                        <img width="105px" height="50px" src="https://s3-eu-west-1.amazonaws.com/tpd/logos/56a2960c0000ff000587f57f/0x0.png" alt=""/>
                    </li>
                </ul>
            </div>
        );
    }
}

RadioButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtons);
