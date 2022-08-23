// == IMPORTS ==
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';
import './repo.scss';

export default function Repo({
    imageUrl,
    title,
    owner,
    description
    }) {
    return (
        <Card className="repo">
            <Image src={imageUrl} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className="date">{owner}</span>
                </Card.Meta>
                <Card.Description>
                    {description}
                </Card.Description>
            </Card.Content>
        </Card>
    );
}
// == PropTypes Validation ==
Repo.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}