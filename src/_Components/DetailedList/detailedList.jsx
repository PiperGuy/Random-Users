import React from "react";
import Back from "../../_Assets/icon_backArrow.png";

class DetailedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="detailedView">
          <div className="viewCard">
            <div className="back" onClick={this.props.history.goBack}>
              <img src={Back} alt="back" />
              <div className="backbtn">BACK</div>
            </div>
            <div className="pmdata">
              {this.props.location.state.photo && (
                <img
                  src={
                    this.props.location.state.photo &&
                    this.props.location.state.photo
                  }
                  alt={this.props.location.state.name}
                />
              )}

              <div className="userName">{this.props.location.state.name}</div>
              <hr />
              <div className="userLocation">
                {this.props.location.state.location}
              </div>
            </div>
            <div className="pbdata">
              <table className="datatable">
                <tbody>
                  <tr>
                    <td>Gender</td>
                    <td>:</td>
                    <td>{this.props.location.state.gender}</td>
                  </tr>
                  <tr>
                    <td>Age</td>
                    <td>:</td>
                    <td>{this.props.location.state.age}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>:</td>
                    <td>{this.props.location.state.email}</td>
                  </tr>
                  <tr>
                    <td>phone</td>
                    <td>:</td>
                    <td>{this.props.location.state.phone}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailedList;
