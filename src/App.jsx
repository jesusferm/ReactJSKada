// Dependencies
import { createRoot } from 'react-dom/client';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import { Pet } from './Pet';

export default function App() {
	const pets = [
		{ id: 1, name: 'Alice', animal: 'Pangolin', breed: 'Piña' },
		{ id: 2, name: 'Bob', animal: 'Dragon comodo', breed: 'Mango' },
		{ id: 3, name: 'Carl', animal: 'Ornitorringo', breed: 'Hoja' },
	];

	return (
		<div>
			{/* <Pet name="Terry02" animal="Cotorro" breed="croquetas" /> */}

			{pets.map((pet, index) => {
				return (
					<div key={index}>
						<Pet name={pet.name} animal={pet.animal} breed={pet.breed} />
						{/* <h2>name: {pet.name}</h2><h2>Animal: {pet.animal}</h2> */}
						<hr />
					</div>
				);
			})}
			<div>
				<Button variant="primary">Primary</Button>
			</div>
		</div>
	);
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
