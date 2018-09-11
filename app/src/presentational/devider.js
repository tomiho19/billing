import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Badge from './badge';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

function InsetDividers(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <h3>Shopping cart <Badge/></h3>
            <div className="products">
                <div className="product">
                    <img className={"product_img"} src="https://brjunetka.ru/wp-content/uploads/2012/09/bIMG_9227.jpg" alt="#"/>
                    <div className="wrapper">
                        <p className={"product_title"}>
                            Glith
                        </p>
                        <p className={"product_author"}>
                            Christian Louboutin
                        </p>
                        <p>
                            200$
                        </p>
                    </div>
                </div>
                <div className="product">
                    <img className={"product_img"} src="http://i.otzovik.com/objects/b/50000/42879.png" alt="#"/>
                    <div className="wrapper">
                        <p className={"product_title"}>
                            Bianka
                        </p>
                        <p className={"product_author"}>
                            Christian Louboutin
                        </p>
                        <p>
                            300$
                        </p>
                    </div>
                </div>
            </div>
            <div className="price">
                <div className="additional_info">
                    <div className="wrapper">
                        <div className="additional__item">Subtotal<span>1300</span></div>
                        <div className="additional__item">Payment processing service 1%<span>2300</span></div>
                        <div className="additional__item">VAT 21%<span>3300</span></div>
                    </div>
                </div>
                <div className="total_price">
                    <p>Total</p>
                    <span>300$</span>
                </div>
            </div>
        </div>
    );
}

InsetDividers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InsetDividers);
