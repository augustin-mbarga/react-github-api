// == IMPORTS ==
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import Repo from '../Repos/Repo';
import './repos.scss';

export default function Repos({results}) {
    const resultsJsx = results.map((result) => 
        <Repo 
            imageUrl={result.owner.avatar_url}
            title={result.full_name}
            owner={result.owner.login}
            description={result.description}
        />
    );
    return (
        <div className="repos">
            <Card.Group
                itemsPerRow={3}
                stackable
            >
                {resultsJsx}
            </Card.Group>
        </div>
    );
}
Repos.propTypes = {
    results: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        full_name: PropTypes.string.isRequired,
        owner: PropTypes.object.isRequired,
        description: PropTypes.string.isRequired,
    })).isRequired,
}