// == IMPORTS ==
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import Repo from '../Repos/Repo';
import './repos.scss';

export default function Repos({results}) {
    const resultsJsx = results.map((result) => 
        <Repo 
            key={result.id}
            {...result}
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
    results: PropTypes.arrayOf(Object).isRequired,
}