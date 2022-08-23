// == IMPORTS ==
import PropTypes from 'prop-types';
import { Message as MessageSUI } from 'semantic-ui-react';
import './Message.scss';

export default function Message({counter}) {
    let phrase="";

    if (counter === 0) phrase = "La recherche n'a donné aucun résultat.";
    else if (counter === 1) phrase = "La recherche a donné 1 résultat.";
    else phrase = `La recherche a donné ${counter} résultats.`;

    return (
        <MessageSUI className="message">
            <p>{phrase}</p>
        </MessageSUI>
    );
}
Message.propTypes = {
    counter: PropTypes.number.isRequired,
}