import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Notify } from 'notiflix';
import Style from './FormPhoneBook.module.css';
import { selectContact } from 'redux/selectors';
import { addContact } from 'redux/operations';
//import { addNewContact } from 'redux/contactSlice';

const FormPhoneBook = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const NameInputFormId = uuidv4();
  const NumberInputFormId = uuidv4();
  const contacts = useSelector(selectContact);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        throw new Error("There isn't such option");
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      Notify.failure(`${name} is already in contacts.`);
      return;
    } else if (contacts.find(contact => contact.phone === phone)) {
      Notify.failure(`${phone} is already in contacts.`);
      return false;
    }
    dispatch(addContact({name, phone}));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className={Style.form}>
      <label className={Style.formLabel} htmlFor={NameInputFormId}>
        Name
        <input
          id={NameInputFormId}
          className={Style.inputForm}
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={Style.formLabel} htmlFor={NumberInputFormId}>
        Number
        <input
          id={NumberInputFormId}
          className={Style.inputForm}
          type="tel"
          placeholder="Enter number"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
      </label>

      <button type="submit" className={Style.btnForm}>
        Add contact
      </button>
    </form>
  );
};

export default FormPhoneBook;
