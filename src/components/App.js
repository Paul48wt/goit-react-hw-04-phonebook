import { useEffect, useState } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? '';
  });

  const [filterName, setFilterName] = useState('');

  const formSubmitHandler = data => {
    const hasName = contacts.find(
      item => item.name.toLowerCase() === data.name.toLowerCase()
    );
    if (hasName) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    setContacts(contacts.concat(data));
  };

  const changeFilter = event => {
    setFilterName(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filterName.toLowerCase())
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(item => item.id !== contactId));
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Section title="Phonebook">
        <Form onSubmit={formSubmitHandler}></Form>
      </Section>

      <Section title="Contacts">
        <Filter value={filterName} onChange={changeFilter}></Filter>
        <ContactList
          visibleContacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        ></ContactList>
      </Section>
    </>
  );
}
