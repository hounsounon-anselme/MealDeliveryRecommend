import React from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import Select from 'react-select';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css'; // Styles de base
import '@fortawesome/fontawesome-free/css/brands.css'; // Styles des icônes de marque (fab)
import '@fortawesome/fontawesome-free/css/solid.css'; // Styles des icônes pleines (fas)




class CreateUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            CountryCode: '',
            email: '',
            password: '',
            phone: '',
            error: '',
            successMessage: '',
            countryOptions: [], 
            countryCode: '', 
            passwordError: '', 
            repeatPassword:'',
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    componentDidMount() {
   axios.get('http://localhost:3000/api/countries') // Assurez-vous que l'URL est correcte
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
  
    // Recherchez le pays correspondant à la valeur sélectionnée
    const selectedCountry = countryOptions.find((country) => country.CountryCode === countryCode);
  
    if (selectedCountry) {
      const { CountryName, PhoneCode, FlagURL } = selectedCountry;
  
      // Vérifiez si l'URL de l'image est valide et si le format est pris en charge
      if (FlagURL && (FlagURL.endsWith('.png') || FlagURL.endsWith('.jpg') || FlagURL.endsWith('.gif'))) {
        // Mettez à jour le state avec les informations du pays
        this.setState({ selectedCountry, countryCode });
      } else {
        // Affichez un message d'erreur si l'URL de l'image n'est pas valide ou le format n'est pas pris en charge
        this.setState({ selectedCountry: null, countryCode: '' });
        console.log('Image non valide ou format non pris en charge');
      }
    } else {
      console.log('Pays non trouvé'); // Gérez le cas où le pays n'est pas trouvé
    }
  }
  
  


  handleSubmit = async (event) => {
  event.preventDefault();
  this.setState({
    [event.target.name]: event.target.value,
    passwordError: '', // Réinitialise l'erreur
  });

  // Vérifiez si les mots de passe correspondent
  if (this.state.password !== this.state.repeatPassword) {
    this.setState({ passwordError: 'Les mots de passe ne correspondent pas' });
    return; // Empêche l'envoi de la demande si les mots de passe ne correspondent pas
  }

  try {
    // Effectuez la demande d'inscription
    const response = await axios.post('http://localhost:3000/api/users', this.state);
    if (response.status === 200) {
      this.setState({ successMessage: 'User created successfully' });
      Swal.fire('Success', 'User created successfully', 'success');
    }
  } catch (error) {
    this.setState({ error: error.response.data.error });
    Swal.fire('Error', 'An error occurred', 'error');
  }
}

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
      <i className="fab fa-twitter twitter-icon"></i> Login via Twitter
    </a>                        <a href="#" class="btn btn-block btn-facebook"> <i class="fab fa-facebook-f" ></i>   Login via facebook</a>
                    </p>
                    <p class="divider-text">
                        <span class="bg-light">OR</span>
                    </p>
        <form onSubmit={this.handleSubmit}>
        <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                        </div>
                        <input name="" class="form-control" placeholder="Firt name" type="text" onChange={this.handleChange} />
                        
                    </div>

                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                        </div>
                        <input name="" class="form-control" placeholder="Last name" type="text" onChange={this.handleChange} />
                    </div> 

                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fas fa-user" style={{ color: 'blue' }}></i> </span>
                        </div>
                        <input name="" class="form-control" placeholder="Username" type="text" onChange={this.handleChange} />
                    </div> 

                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                        </div>
                        <input name="" class="form-control" placeholder="Email address" type="email"  onChange={this.handleChange}/>
                    </div>

                    <div class="form-group input-group">
  <div class="input-group-prepend">
    <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
  </div>
  <select
    className="custom-select"
    style={{ maxWidth: "120px" }}
    onChange={this.handleCountryCodeChange}
    value={this.state.selectedCountry}
  >
    {this.state.countryOptions.map((country) => (
       <option key={country.CountryCode} value={country.CountryCode}>
      {country.CountryName} - {country.PhoneCode} - <img src={`http://localhost:3000${country.FlagURL}`} alt="Flag" />
    </option>

    ))}
  </select>
  <input
    name=""
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
        class={`form-control ${!this.state.passwordError ? 'is-invalid' : ''}`}
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
        class={`form-control ${!this.state.passwordError ? 'is-invalid' : ''}`}
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