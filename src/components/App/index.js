import React, { PureComponent } from 'react';
import data from '../../data/cities-of-china.json';
import './styles.scss';

class App extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
		};
	}

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		const cities = data.cities;
		this.setState({ data: cities });

		//PREGUNTA Y SI NO ELIMINA EL ARCHIVO DE PUBLIC
		// fetch('cities-of-china.json')
		// 	.then(res => res.json())
		// 	.then(d => console.log(d));
	};

	render() {
		console.log(this.state);
		const {data} = this.state;

		return (
			<section className="app__container">
				{/*HEADER*/}
				<header className="header__container">Cities of China</header>
				{/**FILTERS */}
				<form className="filter__container">
					<label className="filter-name__label" htmlFor="filter-name" title="Search by name">
						<input
							className="filter__name-input"
							id="filter-name"
							type="text"
							placeholder="Search by name"
						/>
					</label>
					<label className="filter__select" htmlFor="select-all" title="Select all">
						<input type="checkbox" id="select-all" value="filter__select-all" />
						Select All
					</label>
				</form>
				{/**DATA */}
				<section className="data__container">
					<ul className="data__element">
					  {data.map(city => {
					    return (
					   <label htmlFor="select-city">
					    <input
					      id="select-city"
					      type="checkbox"
					      value="select-city"
					      name="select-city"
					    />
					  </label>
					    <li key={city.id}>
					      <Card id={city.id} name={city.name}/>
					    </li>
					  )})}
					</ul>
			</section>
				{/*SELECTION */}
				<section className="results__container">
					<p className="results__counter">x items selected</p>
					<button className="results__clear" type="button">
						Clear
					</button>
				</section>
				<section className="selection__container">Selection</section>
			</section>
		);
	}
}

export default App;
