// == IMPORTS ==
import { Message as MessageSUI } from 'semantic-ui-react';
import './Message.scss';

export default function Message() {
    const message = `La recherche a donné 1232165 résultats.`;
    return (
        <MessageSUI className="message">
            <p>{message}</p>
        </MessageSUI>
    );
}