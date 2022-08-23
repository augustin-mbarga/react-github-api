// == IMPORTS ==
import { Card } from 'semantic-ui-react';
import Repo from '../Repos/Repo';
import './repos.scss';

export default function Repos() {
    return (
        <div className="repos">
            <Card.Group 
                itemsPerRow={3}
                stackable 
            >
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <Repo />
            </Card.Group>
        </div>
    );
}