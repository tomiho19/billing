import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
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
            <List>
                <h3>Shopping cart <Badge/></h3>

                <ListItem>
                    <div className="product">
                        <img width="15%" height="20%" className={"product_img"} src="https://brjunetka.ru/wp-content/uploads/2012/09/bIMG_9227.jpg" alt="#"/>
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
                </ListItem>
                <li>
                    <Divider inset />
                </li>
                <ListItem>
                    <div className="product">
                        <img width="15%" height="20%" className={"product_img"} src="http://i.otzovik.com/objects/b/50000/42879.png" alt="#"/>
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
                </ListItem>
                <Divider inset component="li" />
                <ListItem>
                    <div className="price">
                        <div className="additional_info">
                            <p>Subtotal</p>
                            <p>Payment processing service 1%</p>
                            <p>Vat</p>
                        </div>
                        <div className="total_price">
                            <p>Total</p>
                        </div>
                    </div>
                </ListItem>
            </List>
        </div>
    );
}

InsetDividers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InsetDividers);
