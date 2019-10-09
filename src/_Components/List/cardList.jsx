import React from "react";
import Location from "../../_Assets/icon_locationPin.png";
import { connect } from "react-redux";
import { deleteUser } from "../../_Actions/actions";
import { Redirect } from "react-router-dom";

const mapDispatchToProps = dispatch => {
  return {
    onUserDelete: id => dispatch(deleteUser(id))
  };
};

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }
  viewDetails() {
    this.setState({
      redirect: true
    });
  }
  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          push
          to={{
            pathname: `/${this.props.name}`,
            state: {
              id: this.props.id,
              name: this.props.name,
              email: this.props.email,
              location: this.props.location,
              photo: this.props.photo,
              age: this.props.age,
              gender: this.props.gender,
              phone: this.props.phone
            }
          }}
        />
      );
    } else {
      return (
        <div>
          <div className="cardholder">
            <div className="card">
              <img
                className="profileimg"
                src={this.props.photo}
                alt={this.props.name}
              />
              <div className="profiledel">
                <div
                  className="profilename"
                  onClick={this.viewDetails.bind(this)}
                >
                  {" "}
                  {this.props.name}
                </div>
                <div
                  className="profdel"
                  onClick={() => this.props.onUserDelete(this.props.id)}
                >
                  DELETE
                </div>
                <hr />
                <div className="desc">
                  <img src={Location} alt="loc" />
                  <div>{this.props.location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Card);
