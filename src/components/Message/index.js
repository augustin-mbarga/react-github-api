// == IMPORTS ==
import PropTypes from 'prop-types';
import { Message as MessageSUI } from 'semantic-ui-react';

import { phrase } from '../../selectors/sentence'
import './Message.scss';

export default function Message({ counter }) {
    const messageJsx = (
        <MessageSUI className="message">
            <p>{phrase(counter)}</p>
        </MessageSUI>
    );
    return (
        <>{messageJsx}</>
    );
}
Message.propTypes = {
    counter: PropTypes.number.isRequired,
}