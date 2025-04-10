import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import FruitsIndex from './components/FruitsIndex';
import FruitShow from './components/FruitShow';
import FruitForm from './components/FruitForm';
import FavoriteFruit from './components/FavoriteFruit';
import SetFavoriteFruit from './components/SetFavoriteFruit';
import fruits from './mockData/fruits.json';

const App = () => {
  return (
    <Router>
      <div>
        {/*Navigation renders on every page */}
        <Navigation />
  <Routes>
<Route path="/" element={<FruitsIndex fruits={fruits} />} />
<Route path="/fruits/:fruitId" element={<FruitShow fruits={fruits} />} />
<Route path="/fruits/new" element={<FruitForm fruits={fruits} />} />
<Route path="/fav-fruit" element={<FavoriteFruit fruits={fruits} />} />
<Route path= "/set-fav-fruit" element={<SetFavoriteFruit fruits={fruits} />} />
<Route path= "*" element={<h2>PAge Not Found</h2>} />

</Routes>
</div>
</Router>
  );
};

export default App;
