import PropTypes from 'prop-types';
export const ContactList = ({ visibleContacts, onDeleteContact }) => {
  return (
    <ul>
      {visibleContacts.map(item => (
        <li key={item.id} className="contactListItem">
          <span className="contact">
            {item.name}: {item.number}
          </span>
          <button
            type="submit"
            className="btn"
            onClick={() => onDeleteContact(item.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
