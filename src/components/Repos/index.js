// == IMPORTS ==
import Repo from '../Repos/Repo';
import './repos.scss';

export default function Repos() {
    return (
        <div className="repos">
            <ul className="repos__list">
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <Repo />
            </ul>
        </div>
    );
}