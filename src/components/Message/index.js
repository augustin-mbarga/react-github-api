// == IMPORTS ==
import PropTypes from 'prop-types';
import { Message as MessageSUI } from 'semantic-ui-react';
import './Message.scss';

export default function Message({content}) {
    return (
        <MessageSUI className="message">
            <p>{content}</p>
        </MessageSUI>
    );
}
Message.propTypes = {
    content: PropTypes.string.isRequired,
}