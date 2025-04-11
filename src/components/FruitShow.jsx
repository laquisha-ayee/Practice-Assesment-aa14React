import { useParams } from 'react-router-dom';

const FruitShow = ({ fruits }) => {
    const { fruitId } = useParams();
    const fruit = fruits.find(f => f.id === fruitId);

    if (!fruit) {
        return <h2>Fruit not found</h2>;
    }

    return (
        <div>
            <h2>{fruit.name}</h2>
            <p>Color: {fruit.color}</p>
            <p>Sweetness: {fruit.sweetness}</p>
            <p>Seeds: {fruit.seeds === "yes" ? "Yes" : "no"}</p>
        </div>
    );
};

export default FruitShow;