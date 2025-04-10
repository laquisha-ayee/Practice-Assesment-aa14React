import { Link } from 'react-router-dom';

const FruitsIndex = ({ fruits }) => {
    return (
        <div>
            <h2>Fruits Index</h2>
            <ul>
                {fruits.map((fruit) => (
                    <li key={fruit.id}>
                        <Link to={`/fruits/${fruit.id}`}>{fruit.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FruitsIndex;
