import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>404</p>
            <span>Not Found</span>
            <Link to="/">Get Back To Homepage !!!</Link>
        </div>
    );
}

export default NotFound;