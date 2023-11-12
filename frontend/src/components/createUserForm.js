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
    customStyles = {
      control: (base) => ({
        ...base,
        minHeight: 40, // Ajustez la hauteur du contrôle selon vos besoins
      }),
      indicatorSeparator: (base) => ({
        ...base,
        display: 'none', // Masque le séparateur entre l'indicateur de flèche et le libellé
      }),
      dropdownIndicator: (base) => ({
        ...base,
        transform: 'rotate(180deg)', // Tourne la flèche de sélection vers le haut
      }),
    };


    handleChange = (event) => {
      const { name, value } = event.target;
    
      this.setState({
        [name]: value,
      });
    };
    
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
    const phoneCode = selectedOption.phoneCode;

    

    // Recherchez le pays correspondant à la valeur sélectionnée
    const selectedCountry = countryOptions.find((country) => country.CountryCode === countryCode);
  
    if (selectedCountry) {
      const { CountryName, PhoneCode, FlagURL } = selectedCountry;
  
      // Vérifiez si l'URL de l'image est valide et si le format est pris en charge
      if (FlagURL && (FlagURL.endsWith('.png') || FlagURL.endsWith('.jpg') || FlagURL.endsWith('.gif'))) {
        // Mettez à jour le state avec les informations du pays
        this.setState({ selectedCountry, countryCode, phoneCode });
      } else {
        // Affichez un message d'erreur si l'URL de l'image n'est pas valide ou le format n'est pas pris en charge
        this.setState({ selectedCountry: null, countryCode: '' });
        console.log('Image non valide ou format non pris en charge');
      }
    } else {
      console.log('Pays non trouvé'); // Gérez le cas où le pays n'est pas trouvé
    }
  }
  
  formatOptionLabel = ({ value, label }) => {
    const country = this.state.countryOptions.find(country => country.CountryCode === value);
  
    if (country) {
      const imageUrl = `http://localhost:3000/images/${country.FlagURL}`;
      
      return (
        <div>
          <img src={imageUrl} alt={country.CountryName}    style={{ width: '12px', height: 'auto' }}
/>
          <div>
            <div style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>{label}</div>
          </div>
        </div>
      );
    } else {
      return label;
    }
  };

  

  
  
  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({
      passwordError: '', // Réinitialise l'erreur
    });
  
    // Vérifiez si les mots de passe correspondent
    if (this.state.password !== this.state.repeatPassword) {
      this.setState({ passwordError: 'Les mots de passe ne correspondent pas' });
      return; // Empêche l'envoi de la demande si les mots de passe ne correspondent pas
    }
  
    try {
      // Créez un objet avec les champs spécifiques que vous souhaitez envoyer
      const userObject = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        CountryCode: this.state.countryCode,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
      };
  
      // Effectuez la demande d'inscription avec le nouvel objet
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