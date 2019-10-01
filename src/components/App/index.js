import React, { PureComponent, Fragment } from 'react';
import data from '../../data/cities-of-china.json';
import Filters from '../Filters';
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
	};

	render() {
		console.log(this.state);
		const { data } = this.state;

		return (
			<Fragment>
				<section className="app__container">
					{/*HEADER*/}
					<header className="header__container">Cities of China</header>
					<Filters />
					{/**DATA */}
					<section className="data__container">
						<ul className="data__city-list">
							{data.map(city => {
								return (
									<li key={city.id}>
                    {/*CARD */}
										<label htmlFor="select-city">
											<input
												id="select-city"
												type="checkbox"
												value="select-city"
												name={city.name}
											/>
										</label>
										<img className="city__logo" src="/" alt="Imagen de muestra" />
                    <div className="city__data-wrapper">
                      <p className="city__name">{city.name}</p>
                      <p className="city__chinese-name">{city.chineseName}</p>
                    </div>
									</li>
								);
							})}
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
			</Fragment>
		);
	}
}

export default App;
