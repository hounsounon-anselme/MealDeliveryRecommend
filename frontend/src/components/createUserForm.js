import React from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import Select from 'react-select';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css'; 
import '@fortawesome/fontawesome-free/css/brands.css'; 
import '@fortawesome/fontawesome-free/css/solid.css'; 

class CreateUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            countryCode: '',
            CountryCode: '',
            email: '',
            password: '',
            phone: '',
            error: '',
            successMessage: '',
            countryOptions: [], 
            passwordError: '', 
            repeatPassword:'',
        };
    }

    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });
    };

    componentDidMount() {
      axios.get('http://localhost:3000/api/countries')
           .then((response) => {
             this.setState({ countryOptions: response.data });
            })
           .catch((error) => {
       console.error('Erreur lors de la récupération des options de pays :', error);
       });
    }

    handleCountryCodeChange = (selectedOption) => {
      const { countryOptions } = this.state;
      const countryCode = selectedOption.value;
      const phoneCode = selectedOption.phoneCode;
      const selectedCountry = countryOptions.find((country) => country.CountryCode === countryCode);
      if (selectedCountry) {
        const { FlagURL } = selectedCountry;    
        if (FlagURL && (FlagURL.endsWith('.png') || FlagURL.endsWith('.jpg') || FlagURL.endsWith('.gif'))) {
          this.setState({ selectedCountry, countryCode, phoneCode });
        } else {
          this.setState({ selectedCountry: null, countryCode: '' });
          console.log('Image non valide ou format non pris en charge');
        }
      } else {
        console.log('Pays non trouvé'); 
      }
    }

    handleSubmit = async (event) => {
      event.preventDefault();
      this.setState({
        passwordError: '',
      });
    
      if (this.state.password !== this.state.repeatPassword) {
        this.setState({ passwordError: 'Les mots de passe ne correspondent pas' });
        return; 
      }    
      try {
        const userObject = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          username: this.state.username,
          CountryCode: this.state.countryCode,
          email: this.state.email,
          password: this.state.password,
          phone: this.state.phone,
        };
        const response = await axios.post('http://localhost:3000/api/users', userObject);    
        if (response.status === 200) {
          this.setState({ successMessage: 'User created successfully' });
          Swal.fire('Success', 'User created successfully', 'success');
        }
      } catch (error) {
        this.setState({ error: error.response.data.error });
        Swal.fire('Error', 'An error occurred', 'error');
      }
    }

    formatOptionLabel = ({ value, label }) => {
      const country = this.state.countryOptions.find(country => country.CountryCode === value);
    
      if (country) {
        const imageUrl = `http://localhost:3000/images/${country.FlagURL}`;        
        return (
          <div>
            <img src={imageUrl} alt={country.CountryName}    style={{ width: '12px', height: 'auto' }}/>
            <div>
              <div style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>{label}</div>
            </div>
          </div>
        );
      } else {
        return label;
      }
    };

    customStyles = {
      control: (base) => ({
        ...base,
        minHeight: 40, 
      }),
      indicatorSeparator: (base) => ({
        ...base,
        display: 'none', 
      }),
      dropdownIndicator: (base) => ({
        ...base,
        transform: 'rotate(180deg)', 
      }),
    };

  render() {
        return (
            <div className="maincontainer">
              <div className="container">
                <div class="card bg-light">
                  <article class="card-body mx-auto" style={{maxWidth: "400px"}}>
                    <h4 class="card-title mt-3 text-center" >Create Account</h4>
                      <p class="text-center">Get started with your free account</p>
                    <p>
                      <a href="#" className="btn btn-block btn-twitter"  style={{ color: 'white'}}>
                         <i className="fab fa-twitter twitter-icon"></i> Login via Twitter</a>                        <a href="#" class="btn btn-block btn-facebook"> <i class="fab fa-facebook-f" ></i>   Login via facebook</a>
                    </p>
                    <p class="divider-text">
                        <span class="bg-light">OR</span>
                    </p>

                      <form onSubmit={this.handleSubmit}>
                      
                        <div class="form-group input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                          </div>
                          <input name="firstName" class="form-control" placeholder="Firt name" type="text" onChange={this.handleChange} />
                        </div>

                        <div class="form-group input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                            </div>
                            <input name="lastName" class="form-control" placeholder="Last name" type="text" onChange={this.handleChange} />
                        </div> 

                        <div class="form-group input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"> <i class="fas fa-user" style={{ color: 'blue' }}></i> </span>
                            </div>
                            <input name="username" class="form-control" placeholder="Username" type="text" onChange={this.handleChange} />
                        </div> 

                        <div class="form-group input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                            </div>
                            <input name="email" class="form-control" placeholder="Email address" type="email"  onChange={this.handleChange}/>
                        </div>

                        

                        <div class="form-group input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
                            </div>
                            <Select 
                              className="custom-select"
                              value={this.state.selectedCountry}
                              onChange={this.handleCountryCodeChange}
                              options={this.state.countryOptions.map((country) => ({
                                label: `${country.CountryName} ${country.PhoneCode} `,
                                value: country.CountryCode,
                                phoneCode: country.PhoneCode,
                              }))}
                              formatOptionLabel={this.formatOptionLabel}
                              styles={this.customStyles}
                              menuPlacement="top" 
                            />        
                            <input
                              name="phone"
                              className="form-control"
                              placeholder="Phone number"
                              type="text"
                              onChange={this.handleChange}
                            />
                        </div>

                        <div class="form-group input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                          </div>
                          <input        
                            placeholder="Create password"
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                          />
                        </div>

                        <div class="form-group input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                          </div>
                          <input
                            placeholder="Repeat password"
                            type="password"
                            name="repeatPassword"
                            onChange={this.handleChange}
                          />
                        </div>
                        {this.state.passwordError && <p className="alert alert-danger" role="alert">{this.state.passwordError}</p>}
                               
                        <div class="form-group">
                          <button type="button" class="btn btn-primary btn-block" onClick={this.handleSubmit}>
                            Create Account
                          </button>
                        </div>  
                        <p class="text-center">Have an account? <a href="#">Log In</a> </p>
                    </form>
                    
                    {this.state.error && <p className="error">{this.state.error}</p>}
                    {this.state.successMessage && <p className="success">{this.state.successMessage}</p>}
                  </article>
                </div> 
              </div>
            </div>

        );
    }
}

export default CreateUserForm;