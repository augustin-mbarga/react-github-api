// == IMPORTS ==
import { useState } from "react";
import PropTypes from "prop-types";

import { Form, Segment, Label } from "semantic-ui-react";
import "./searchBar.scss";

export default function SearchBar({
  inputValue,
  onChangeInputValue,
  onFormSubmit,
  noEmpty,
  minCharacter,
}) {
  const [error, setError] = useState("");
  const handleSubmit = () => {
    if (noEmpty && !inputValue) {
      setError("Taper une recherche");
      return;
    }

    if (inputValue.length < minCharacter) {
      setError(`Il faut au moins ${minCharacter} caractères`);
      return;
    }

    setError("");
    onFormSubmit();
  };
  return (
    <div className="searchbar">
      <Segment>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            placeholder="Saisissez votre recherche"
            icon="search"
            iconPosition="left"
            value={inputValue}
            onChange={onChangeInputValue}
            error={error.length > 0}
          />
          {error.length > 0 && <Label pointing>{error}</Label>}
        </Form>
      </Segment>
    </div>
  );
}

SearchBar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  noEmpty: PropTypes.bool,
  minCharacter: PropTypes.number,
};

SearchBar.defaultProps = {
  minCharacter: 2,
  noEmpty: false,
};
