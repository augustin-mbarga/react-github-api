// == IMPORTS ==
import { Form, Segment } from 'semantic-ui-react';
import './searchBar.scss';

export default function SearchBar() {
    return (
        <div className="searchbar">
            <Segment>
                <Form>
                    <Form.Input 
                        icon="search"
                        iconPosition="left"
                        placeholder="Saisissez votre recherche"
                    />
                </Form>
            </Segment>
        </div>
    );
}