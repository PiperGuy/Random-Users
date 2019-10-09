import React from "react";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <header>
      <div className="nav">
        <div className="nav-header">
          <div className="nav-title">
            {" "}
            FOOBAR <span className="nav-span">MEMBER LOG</span>{" "}
          </div>
        </div>
      </div>
    </header> );
  }
}
 
export default Header;