// == IMPORTS ==
import { Card, Image } from 'semantic-ui-react';
import './repo.scss';

export default function Repos() {
    return (
        <Card className="repo">
            <Image 
                src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
            />
            <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span className="date">
                        Joined in 2015
                    </span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
            </Card.Content>
        </Card>
    );
}