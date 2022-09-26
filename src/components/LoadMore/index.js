import PropTypes from "prop-types";
import { Button, Container } from "semantic-ui-react";

import "./loadMore.scss";

export default function LoadMore({ onBtnClick }) {
  return (
    <Container textAlign="center" className="container">
      <Button onClick={onBtnClick}>Plus de résultats</Button>
    </Container>
  );
}
LoadMore.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};
