import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { saveProduct } from "../../redux/actions/productActions";
import { getCategories } from "../../redux/actions/categoryActions";
import { getProducts } from "../../redux/actions/productActions";

function AddOrUptadeProduct({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  ...props
}) {
  const [product, saveProduct] = useState({ ...props.products });
  useEffect(() => {
    if (categories.lenght === 0) {
      getCategories();
    }
    setProduct({ ...props.product });
  }, [props.product]);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    saveProduct(product).then(() => {
      history.pushState("/");
    });
  }

  return(
    
  )
}

export function getProductById(product.productId){
    let product = products.find(product=>product.id==productId)||null;
    return product;
}

function mapStateToProps(state, ownProps){
    const productId=ownProps.match.params.productId
    const product = productId&& state.productReducer.lenght>0
    ?getProductById(state.productReducer.productId)
    :{}

    return{
        product:product;,
        products:state.productReducer,
        categories:state.category,
    }
}

mapDispatchToProps = (getCategories, saveProduct);

export default connnect(mapStateToProps, mapDispatchToProps)(AddOrUptadeProduct);
