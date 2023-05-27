import { useState } from 'react';

const ANIMALS = ['birds', 'pangolin', 'bear', 'cat', 'dog', 'rabbit', 'reptile'];

export const SearchParams = () => {
	const [location, setLocation] = useState('');
	const [animal, setAnimal] = useState('');
	const [bread, setBread] = useState('');
	const breads = ['croquetas', 'semillas', 'carne'];
	console.log(location);

	return (
		<div className="search-params">
			<form>
				<div className="row">
					<div className="col-md-2">
						<label htmlFor="location">Location</label>
						<input
							className="form-control"
							id="location"
							value={location}
							placeholder="location"
							onChange={(e) => setLocation(e.target.value)}
						/>
					</div>

					<div className="col-md-3">
						<label htmlFor="animal">Animal</label>
						<select
							className="form-select"
							name="animal"
							id="animal"
							value={animal}
							onChange={(e) => {
								setAnimal(e.target.value);
								setBread('');
							}}
							onBlur={(e) => {
								setAnimal(e.target.value);
								setBread('');
							}}
						>
							<option />
							{ANIMALS.map((animal) => {
								return (
									<option key={animal} value={animal}>
										{animal}
									</option>
								);
							})}
						</select>
					</div>
					<div className="col-md-3">
						<label htmlFor="bread">Bread</label>
						<select
							disabled={!breads.length}
							className="form-select"
							name="bread"
							id="bread"
							value={bread}
							onChange={(e) => setBread(e.target.value)}
							onBlur={(e) => setBread(e.target.value)}
						>
							<option />
							{breads.map((bread) => {
								return (
									<option key={bread} value={bread}>
										{bread}
									</option>
								);
							})}
						</select>
					</div>
				</div>
			</form>
		</div>
	);
};
