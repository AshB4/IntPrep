import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Aform from './practice/pages/Aform';
import CounterButton from './practice/pages/counter';
import ButtonCounter from './practice/pages/ButtonCounter';
import FeedBackWidget from './practice/componets/FeedBackWidget';
import JokeApi from './practice/pages/JokeApi';
import DogApi from './practice/pages/DogApi';
import Home from './practice/pages/Home';
import PotterApi from './practice/pages/PotterApi';



function App() {
  return (
		<div className="App">
			<header className="App-header">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/harrypotter" element={<PotterApi />} />
					<Route path="/chucknorris" element={<JokeApi />} />
					<Route path="/dog" element={<DogApi />} />
					<Route path="/counters" element={<CounterButton />} />
					<Route path="/feedback" element={<FeedBackWidget />} />
					<Route path="/form" element={<Aform />} />
					<Route path="/button" element={<ButtonCounter />} />
				</Routes>
			</header>
		</div>
	);
}

export default App;
