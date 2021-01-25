import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import {
  Button,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
  CardColumns,
} from "reactstrap";
import alertify from "alertifyjs";
import { Link } from "react-router-dom";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product });
    alertify.success(product.productName + " add to cart");
  };
  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Products</Badge>

          <Badge color="success">
            {this.props.currentCategory.categoryName}
          </Badge>
        </h3>

        <Row>
          {this.props.products.map((product) => (
            <Col sm="4">
              <CardColumns>
                <Card
                  body
                  outline
                  color="info"
                  style={{ width: "17rem", height: "17rem" }}
                  key={product.id}
                >
                  <CardBody>
                    <CardTitle tag="h5">
                      <Link to={"/saveproduct/" + product.id}>
                        {product.productName}
                      </Link>
                    </CardTitle>

                    <CardText>
                      <b>Quantity Per Unit:</b> {product.quantityPerUnit}
                      <br></br>
                      <b>Unit Price: </b>
                      {product.unitPrice}
                      <br></br>
                      <b>Units In Stock:</b> {product.unitsInStock}
                    </CardText>

                    <Button
                      color="success"
                      onClick={() => this.addToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </CardBody>
                </Card>
              </CardColumns>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
