import React from 'react';
import InputMask from 'react-input-mask';
import '../styles/Cart.scss';

class CardForm extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      name: '',
      email: {
        value: '',
        valid: true
      },
      telephone: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const { name, value } = e.target;

    switch (name) {
      case 'telephone':
        this.setState({
          telephone: value
        })
        break;
      case 'email':
        const emailValid = emailReg.test(value);
        this.setState({
          email: {
            value,
            valid: emailValid
          },
        })
        break;
      case 'name':
        this.setState({
          name: value
         });
        break;
      default:
        break;
    }
  }

  cancelCourse = () => {
    this.setState({
      name: '',
      email: {
        value: '',
        valid: true
      },
      telephone: ''
    });
  }

  render() {
    return (
      <div className="form-container">
        <h1>Форма регистрации</h1>
        <form ref={(el) => this.myFormRef = el}>
          <div className="form-content">
            <div className='name'>
              <label htmlFor="name">
                Имя:
                <input type="text" onChange={this.handleChange} value={ this.state.name } name="name" placeholder="Имя" required/>
              </label>
            </div>
            <div className={`email ${this.state.email.valid ? '' : 'error'}`}>
              <label htmlFor="email">
                Email:
                <input type="email" name="email" onChange={this.handleChange} value={ this.state.email.value } placeholder="Email" required/>
                <span>Некорректный адрес e-mail</span>
              </label>
            </div>
            <div className="telephone">
              <label>
                Телефон:
                <InputMask onChange={this.handleChange} alwaysShowMask={true} value={ this.state.telephone } name="telephone" mask="+7 (999) 999-99-99" required/>
              </label>
            </div>
          </div>
          <input type="button" name="cancelCourse" className="cancel-button" value="Cancel" onClick={this.cancelCourse} />
          <input type="submit" name="cancelCourse" className="submit-button" value="Submit" />
        </form>
      </div>
    );
  }
};

export default CardForm;
