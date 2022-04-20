import React, { Component } from 'react';
import { connect } from 'react-redux'

class CategoryList extends Component {
    render() {
        return (
            <div>
                <h3>Categories</h3>
                <h5>Seçtiğiniz Kategori: {this.props.currentCategory}</h5>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer
    }
}

export default connect()(CategoryList); //fonksiyon dönderiyor, biz de oraya CategoryList'i atıyoruz..