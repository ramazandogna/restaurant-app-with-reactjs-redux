import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import *as cartActions from '../../redux/actions/cartActions';
import { Table, Button } from 'reactstrap';
import alertify from 'alertifyjs';

class CartDetail extends Component {

    removeFromCart(product) {
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " product removed to cart")
    }

    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                Product Id
                            </th>
                            <th>
                                Product Name
                            </th>
                            <th>
                                Unit Price
                            </th>
                            <th>
                                Quantity
                            </th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(cartItem => (
                            <tr key={cartItem.product.id}>
                                <th scope="row">
                                    {cartItem.product.id}
                                </th>
                                <td>
                                    {cartItem.product.productName}
                                </td>
                                <td>
                                    {cartItem.product.unitPrice}
                                </td>
                                <td>
                                    {cartItem.product.quantity}
                                </td>
                                <td>
                                    <Button color='danger' onClick={() => this.removeFromCart(cartItem.product)}>
                                        Remove from Cart
                                    </Button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>
        );
    }
}

function mapDistpatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}
function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}
export default connect(mapStateToProps, mapDistpatchToProps)(CartDetail);