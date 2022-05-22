import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavLink,
    NavItem,
    Badge
} from 'reactstrap';
import { bindActionCreators } from 'redux';
import *as cartActions from '../../redux/actions/cartActions';
import alertify from 'alertifyjs';

class CartSummary extends Component {

    removeFromCart(product) {
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " product removed to cart")
    }
    renderEmpty() {
        return (
            <NavItem>
                <NavLink>
                    Cart is Empty
                </NavLink>
            </NavItem>
        )
    }

    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Your Cart
                </DropdownToggle>
                <DropdownMenu end>
                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id}>
                                <Badge color='danger' onClick={() => this.removeFromCart(cartItem.product)}>-</Badge>
                                {
                                    cartItem.product.productName
                                }
                                <Badge color='success'>{cartItem.quantity}</Badge>
                            </DropdownItem>
                        ))}
                    <DropdownItem divider />
                    <DropdownItem>
                        <Link to={"/cart"}>
                            Go to Cart
                        </Link>

                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    render() {
        return (
            <div>
                {
                    this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()
                }

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
export default connect(mapStateToProps, mapDistpatchToProps)(CartSummary);