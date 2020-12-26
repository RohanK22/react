import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishdetailComponent extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
          <p>Comments</p>
          {this.renderComments(dish)}
        </Card>
      );
    else return <div></div>;
  }

  renderComments(dish) {
    const renderedListItems = this.props.selectedDish.comments.map(
      (comment) => {
        return <li key={comment.id}>{comment.comment}</li>;
      }
    );
    return <ol>{renderedListItems}</ol>;
  }

  render() {
    let dish = this.props.selectedDish;
    return <div className="col-12 col-md-5 m-1">{this.renderDish(dish)}</div>;
  }
}

export default DishdetailComponent;
