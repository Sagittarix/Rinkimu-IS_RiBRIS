const React = require('react');
const NavLink = require('./nav-link');

var NavigationRep = React.createClass({
  render: function() {
    var self = this;

    var SideNav = this.props.options.map(function(option, index) {
      return (

        <div className="container-fluid">
          <div className="navbar-inner nav-collapse">
            <nav className="navbar navbar-default" role="navigation">
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li key={index}>
                    <NavLink to={option.pathTo}>{option.text}</NavLink>
                  </li>
               </ul>
              </div>
            </nav>
          </div>
        </div>
      );
    });

    return (
      <div className="container-fluid">
        <div className="navbar-inner nav-collapse">
          <nav className="navbar navbar-default" role="navigation">
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
              <li><NavLink to="/representative/results/single">Rezultatai</NavLink></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><NavLink to="/">
                  <i className="fa fa-sign-in" aria-hidden="true"></i> Atsijungti
                </NavLink></li>
              </ul>
            </div>
          </nav>
        </div>
        <div id='content' className='row-fluid'>
          <div className="col-sm-3">
            <ul className="nav nav-tabs nav-stacked">
              {SideNav}
            </ul>
          </div>
          <div className="col-sm-9">
            {this.props.childs}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = NavigationRep;
