import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Validate from './Component/Validate'

class App extends React.Component {
  
    // A required React method when using class-based component.
    constructor(props) {
      super(props);
      this.state = { 
        password: "",
        error: ""
      };
    }
    
    setPassword(e) {
      this.setState({ password:e.target.value })
    }

    render() {

        let error = (this.state.password.length < 4 ? <Validate />: "");
        return (
            <div className="container">
              <section className="content bgcolor_ruri">
                <div className="input input_ruri">
                  <input type="password" autoComplete="off" name="password" id="password" value={this.state.password} onChange={(e)=>{this.setPassword(e)}} required />
                  <label htmlFor="password" className="input_label_ruri">
                      <span className="input_label_content">Password&nbsp;</span>
                  </label>
                </div>
                <div className="error_message">{error}</div>
              </section>
            </div>
        );
    };
};
ReactDOM.render(<App />, document.querySelector('#root'));
