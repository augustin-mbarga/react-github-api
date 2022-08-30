// == IMPORTS ==
import PropTypes from "prop-types";

import { Form, Segment } from "semantic-ui-react";
import "./searchBar.scss";

export default function SearchBar({
  inputValue,
  onChangeInputValue,
  onFormSubmit,
}) {
  //   const handleChange = (e) => {
  //     onChange(e.target.value);
  //   };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     onFormSubmit(e.target.value);
  //   };
  return (
    <div className="searchbar">
      <Segment>
        <Form onSubmit={onFormSubmit}>
          <Form.Input
            icon="search"
            iconPosition="left"
            placeholder="Saisissez votre recherche"
            value={inputValue}
            onChange={onChangeInputValue}
          />
        </Form>
      </Segment>
    </div>
  );
}

SearchBar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};
