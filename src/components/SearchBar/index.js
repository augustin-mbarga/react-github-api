// == IMPORTS ==
import { Form, Segment } from 'semantic-ui-react';
import './searchBar.scss';

export default function SearchBar({ onChange }) {
    const handleChange = (e) => {
        onChange(e.target.value);
    }
    return (
        <div className="searchbar">
            <Segment>
                <Form>
                    <Form.Input 
                        icon="search"
                        iconPosition="left"
                        placeholder="Saisissez votre recherche"
                        onChange={handleChange}
                    />
                </Form>
            </Segment>
        </div>
    );
}