// == IMPORTS ==
import PropTypes from "prop-types";

import { Form, Segment } from "semantic-ui-react";
import "./searchBar.scss";

export default function SearchBar({
  inputValue,
  onChangeInputValue,
  onFormSubmit,
  isInputOk,
}) {
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
            error={
              !isInputOk && {
                content: "Votre recherche doit contenir au moins 3 caractères.",
              }
            }
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
  isInputOk: PropTypes.bool.isRequired,
};
