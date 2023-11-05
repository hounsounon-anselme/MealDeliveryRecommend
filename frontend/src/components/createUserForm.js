import React from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import Select from 'react-select';



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
            countryOptions: [], // Options de pays
            selectedCountry: null, // Option de pays sélectionnée
            countryCode: '', // Valeur du code de pays sélectionné
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

   

  handleCountryCodeChange = (selectedOption) => {
    // Extraire la valeur du champ 'CountryCode' de 'selectedOption'
    const countryCode = selectedOption.value;

    // Mettre à jour le state avec la valeur du code de pays sélectionné
    this.setState({ selectedCountry: selectedOption, countryCode });

    // Vous pouvez également utiliser directement la valeur du code de pays
    // en dehors du state si vous en avez besoin pour d'autres actions.
    // Par exemple, vous pouvez l'envoyer dans une requête de création d'utilisateur.
  
    // this.createNewUser(); // Exemple d'appel à la fonction de création d'utilisateur
  }


    handleSubmit = async (event) => {
        event.preventDefault();



        try {
            const response = await axios.post('/api/users', this.state);
            if (response.status === 200) {
                Swal.fire('Success', 'User created successfully', 'success');
                this.setState({ successMessage: 'User created successfully' });
            }
        } catch (error) {
            this.setState({ error: error.response.data.error });
            Swal.fire('Error', 'An error occurred', 'error');
        }
    }
    render() {
        return (
        <div className="container">
        <h2>Créer un utilisateur</h2>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
      <label>First Name</label>
      <input className="input-field" type="text" name="firstName" placeholder="Anselme" onChange={this.handleChange} />
    </div>            <input type="text" name="lastName" placeholder="Nom de famille" onChange={this.handleChange} />
            <input type="text" name="username" placeholder="Nom d'utilisateur" onChange={this.handleChange} />

            <div className="country-phone">
            <input type="text" name="CountryCode" placeholder="Code pays" onChange={this.handleChange} />
            <input type="text" name="phone" placeholder="Numéro de téléphone" onChange={this.handleChange} />
            </div>

            <div className="form-group">
                    <label>Code pays</label>
                    <Select
                    options={this.state.countryOptions}
                    onChange={this.handleCountryCodeChange}
                    value={this.state.selectedCountry}
                    />
            <div className="phone-number">
                <label>Phone Number</label>
                <input className="input-field" type="text" name="phone" placeholder="96326999" onChange={this.handleChange} />
            </div>
            </div>

            <div className="form-group">
                    
            <div className="phone-number">
                <label>Phone Number</label>
                <input className="input-field" type="text" name="phone" placeholder="96326999" onChange={this.handleChange} />
            </div>
            </div>

            <input type="text" name="email" placeholder="Email" onChange={this.handleChange} />
            <input type="password" name="password" placeholder="Mot de passe" onChange={this.handleChange} />

            <button type="submit">Rgister</button>
        </form>
        {this.state.error && <p className="error">{this.state.error}</p>}
        {this.state.successMessage && <p className="success">{this.state.successMessage}</p>}
        </div>
        );
    }
}

export default CreateUserForm;