// == IMPORTS ==
import { Form, Segment } from 'semantic-ui-react';
import './searchBar.scss';

export default function SearchBar() {
    return (
        <div className="searchbar">
            <Segment>
                <Form>
                    <Form.Input fluid placeholder='Searchbar' />
                </Form>
            </Segment>
        </div>
    );
}