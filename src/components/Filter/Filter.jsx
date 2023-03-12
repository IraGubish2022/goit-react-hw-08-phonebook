import { v4 as uuidv4 } from 'uuid';
//import PropTypes from 'prop-types';
import Style from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

const searchId = uuidv4();

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <>
      <label htmlFor={searchId} className={Style.labelFilter}>
        Find contacts by name
        <input
          className={Style.inputFilter}
          type="text"
          name="filter"
          value={filter}
          onChange={e => dispatch(setFilter(e.target.value))}
          id={searchId}
        />
      </label>
    </>
  );
};
// const Filter = ({ value, onChange }) => (
//   <>
//     <label htmlFor={searchId} className={Style.labelFilter}>
//       Find contacts by name
//       <input
//         className={Style.inputFilter}
//         type="text"
//         name="filter"
//         value={value}
//         onChange={onChange}
//         id={searchId}
//       />
//     </label>
//   </>
// );

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
// };

export default Filter;
