import { Component } from 'react';
import { nanoid } from 'nanoid';
export class Form extends Component {
  state = { name: '', id: '', number: '' };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
      id: nanoid(),
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', id: '', number: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label className="label">
          <span className="formTitle">Name</span>
          <input
            className="formInput"
            value={this.state.name}
            onChange={this.handleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className="label">
          <span className="formTitle">Number</span>
          <input
            className="formInput"
            value={this.state.number}
            onChange={this.handleInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className="btn">
          Add contact
        </button>
      </form>
    );
  }
}
