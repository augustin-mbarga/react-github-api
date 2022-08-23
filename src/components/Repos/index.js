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
                <Repo
                    imageUrl="https://avatars3.githubusercontent.com/u/698437?v=4"
                    title="Titre du repo"
                    owner="Proprio"
                    description="Lorem ipsoum"
                />
                <Repo />
                <Repo />
            </Card.Group>
        </div>
    );
}