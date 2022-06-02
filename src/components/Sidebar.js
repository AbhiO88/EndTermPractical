import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/">Personal</Link>
            <Link to="/professional">Professional</Link>
            <Link to="/hobbies">Hobbies</Link>
            <Link to="/extra">Extra</Link>
        </div>
    );
}

export default Sidebar;