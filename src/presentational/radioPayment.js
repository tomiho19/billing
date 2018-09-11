import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import Devider from './devider';

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
        selectedValue: '',
        total: 0,
        vat: 0,
        onePercent: 0
    };

    constructor(props){
        super(props);
        this.calculate();
    }

    handleChange = event => {
        console.log(event.target.value);
        this.setState({ selectedValue: event.target.value });
        this.calculate(event.target.value);
    };

    calculate = (payment) => {
        let total = 500;
        let vat = total * 0.21;
        let onePercent = total * 0.01;
        if(payment === 'PayPal'){
            total += vat + onePercent;
        }
        if(payment === 'VISA'){
            total += onePercent;

        }
        this.setState({total, vat, onePercent});
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
                <section className="basket">
                    <Devider selectedValue={this.state.selectedValue} total={this.state.total} vat = {this.state.vat} onePercent={this.state.onePercent} />
                </section>
            </div>

        );
    }
}

RadioButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtons);
