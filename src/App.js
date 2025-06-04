import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from "./practice/pages/Home";
import Aform from './practice/pages/Aform';
import CounterButton from './practice/pages/counter';
import ButtonCounter from './practice/pages/ButtonCounter';
import FeedBackWidget from './practice/componets/FeedBackWidget';
import JokeApi from './practice/pages/JokeApi';
import DogApi from './practice/pages/DogApi';
import PotterApi from './practice/pages/PotterApi';
import MarsRoverApi from './practice/pages/MarsRoverApi';



function App() {
  return (
		<div className="App">
			<header className="App-header">
				<Routes>
					
						<Route path="/" element={<Home />} />
						<Route path="/mars-rover" element={<MarsRoverApi />} />
						<Route path="/harrypotter" element={<PotterApi />} />
						<Route path="/chucknorris" element={<JokeApi />} />
						<Route path="/dog" element={<DogApi />} />
						<Route path="/counters" element={<CounterButton />} />
						<Route path="/feedback" element={<FeedBackWidget />} />
						<Route path="/form" element={<Aform />} />ç
						<Route path="/button" element={<ButtonCounter />} />
				</Routes>
			</header>
		</div>
	);
}

export default App;
