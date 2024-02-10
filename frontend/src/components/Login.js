import React from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const credentials = {
        username: this.state.username,
        password: this.state.password,
      };

      // Make a POST request to the login endpoint
      const response = await axios.post('http://localhost:3000/api/login', credentials);

      // Check if the login was successful
      if (response.status === 200) {
        // Handle successful login (e.g., redirect to another page)
        console.log('Login successful');
      }
    } catch (error) {
      // Handle failed login
      this.setState({ error: 'Invalid username or password' });
      console.error('Login error:', error);
    }
  };

  render() {
    return (
      <div className="dashboard-container">
      <Header /> 
		<div className='bod'>
      <div className="maincontainer">
        <div className="container">
          <div className="card bg-light">
            <article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
              <h3 className="card-title mt-3 text-center">Log in </h3>
              <form onSubmit={this.handleSubmit}>
                {/* Add input fields for username and password */}
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                  </div>
                  <input
                    name="username"
                    className="form-control"
                    placeholder="Username"
                    type="text"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                  </div>
                  <input
				    className="form-control"
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                  />
                </div>

                {/* Display error message if login fails */}
                {this.state.error && <p className="alert alert-danger" role="alert">{this.state.error}</p>}

                <div className="form-group">
                  {/* Change the button type to submit */}
                  <button type="submit" className="btn btn-primary btn-block">
                    Log In
                  </button>
                </div>
				<p class="text-center">Haven't an account? Sign <a href="/sign">here</a> </p>
              </form>
            </article>
          </div>

        </div>
      </div>
	  </div>
    <Footer /> 
      </div>
    );
  }


  
}

export default LoginPage;
