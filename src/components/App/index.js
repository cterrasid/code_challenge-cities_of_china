import React, { PureComponent } from 'react';
import data from '../../data/cities-of-china.json';
import Header from '../Header';
import Filters from '../Filters';
import Dataset from '../Dataset';
import Results from '../Results';
import Selection from '../Selection';
import Footer from '../Footer';
import './styles.scss';

class App extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			data: {
				cities: [],
			},
			filters: {
				city: [],
				cities: [],
			},
		};
	}

	componentDidMount() {
		const dataCities = data.cities;

		this.setState({ data: { cities: dataCities } });
	}

	handleSelectCities = e => {
		const { value } = e.target;

		this.setState(prevState => {
			return { filters: { ...prevState.filters, city: [] } };
		});
	};

	render() {
		console.log(this.state);
		const { cities } = this.state;

		return (
			<div className="app__container">
				<Header title="Cities of China" />
				<Filters />
				<Dataset cities={cities} onSelectChange={this.handleSelectCities} />
				<Results />
				<Selection />
				<Footer copy="© 2019" by="Powered by Clarette Terrasi Díaz" />
			</div>
		);
	}
}

export default App;
