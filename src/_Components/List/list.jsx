import React from "react";
import { connect } from "react-redux";
import { setSearchField, requestUsers } from "../../_Actions/actions";
import Card from "./cardList";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ErrorBoundry from "../Shared/ErrorBoundry.jsx";

const mapStateToProps = state => {
  return {
    searchField: state.searchUsers.searchField,
    users: state.requestUsers.users,
    isPending: state.requestUsers.isPending
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestUsers: () => dispatch(requestUsers())
  };
};

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getNewUser = e => {
    e.preventDefault();
    this.props.onRequestUsers();
  };
  render() {
    const { users, searchField, onSearchChange, isPending } = this.props;
    const filteredUsers = users.filter(user => {
      return (
        user.name.first.toLowerCase().includes(searchField.toLowerCase()) +
        user.name.last.toLowerCase().includes(searchField.toLowerCase())
      );
    });
    return (
      <div>
        <div className="inner-addon">
          <SearchBox searchChange={onSearchChange} />
          {filteredUsers.length > 0 ? (
            isPending ? (
              <div className="not-found">Loading.....!</div>
            ) : (
              <ErrorBoundry>
                {filteredUsers.map((user, i) => {
                  return (
                    <Card
                      key={i}
                      name={
                        filteredUsers[i].name.first +
                        " " +
                        filteredUsers[i].name.last
                      }
                      location={
                        filteredUsers[i].location.street.number +
                        "  " +
                        filteredUsers[i].location.street.name +
                        ",  " +
                        filteredUsers[i].location.city +
                        ",  " +
                        filteredUsers[i].location.country
                      }
                      photo={filteredUsers[i].picture.large}
                      id={i}
                      gender={filteredUsers[i].gender}
                      age={filteredUsers[i].dob.age}
                      email={filteredUsers[i].email}
                      phone={filteredUsers[i].phone}
                    />
                  );
                })}
              </ErrorBoundry>
            )
          ) : (
            <div className="not-found">No members logged yet</div>
          )}
        </div>
        <button onClick={this.getNewUser.bind(this)}>+ Add New Member</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
