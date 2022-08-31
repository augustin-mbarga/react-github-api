// == IMPORTS ==
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Message as MessageSUI } from "semantic-ui-react";

import { phrase } from "../../selectors/sentence";
import "./Message.scss";

export default function Message({ counter }) {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }, [counter]);

  const messageJsx = (
    <>
      <MessageSUI className="message">
        <p>{phrase(counter)}</p>
      </MessageSUI>
    </>
  );
  return isVisible ? messageJsx : <div className="gutter-invisible"></div>;
}
Message.propTypes = {
  counter: PropTypes.number.isRequired,
};
