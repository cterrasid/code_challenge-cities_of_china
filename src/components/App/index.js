import React, { PureComponent, Fragment } from 'react';
import data from '../../data/cities-of-china.json';
import Filters from '../Filters';
import Dataset from '../Dataset';
import Selection from '../Selection';
import './styles.scss';

class App extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			cities: [],
		};
	}

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		const dataCities = data.cities;
		this.setState({ cities: dataCities });
	};

	render() {
		console.log(this.state);
		const { cities } = this.state;

		return (
			<Fragment>
				<div className="app__container">
					{/*HEADER*/}
					<header className="header__container">Cities of China</header>
					<Filters />
					<Dataset cities={cities} />
					{/*SELECTION */}
					<section className="results__container">
						<p className="results__counter">x items selected</p>
						<button className="results__clear" type="button">
							Clear
						</button>
					</section>
          <Selection />
				</div>
			</Fragment>
		);
	}
}

export default App;
