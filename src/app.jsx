const React = require('react');
const ReactDOM = require('react-dom');
const OMDBSearch = require('./components/OMDBSearch');
const About = require('./components/About');

const App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>OMDB</h1>
        <OMDBSearch />
        <About />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('container'));
