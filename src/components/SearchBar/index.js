// == IMPORTS ==
import PropTypes from "prop-types";

import { Form, Segment } from "semantic-ui-react";
import "./searchBar.scss";

export default function SearchBar({ inputValue, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="searchbar">
      <Segment>
        <Form>
          <Form.Input
            icon="search"
            iconPosition="left"
            placeholder="Saisissez votre recherche"
            value={inputValue}
            onChange={handleChange}
          />
        </Form>
      </Segment>
    </div>
  );
}

SearchBar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
