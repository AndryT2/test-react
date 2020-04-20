import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { setFilter } from '../actions/actions';

const FiltersContainer = ({ data }) => {

  const dispatch = useDispatch();

  return (
    <div className="filter">
      {data.categories.map(category =>
        <li key={category.id}>
          <input type="checkbox"
                 readOnly
                 key={category.id}
                 onClick={() => dispatch(setFilter(category))}
                 checked={category.isChecked}
                 value={category.title} /> {category.title}
        </li>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.categories
});

export default connect(
  mapStateToProps,
)(FiltersContainer);
