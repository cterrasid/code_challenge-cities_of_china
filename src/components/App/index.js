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
				allCities: [],
			},
		};
	}

	componentDidMount() {
		const dataCities = data.cities;

		this.setState({ data: { cities: dataCities } });
	}

	handleSelectCities = e => {
		const { value, checked } = e.target;
console.log(checked, value);

		this.setState(prevState => {
			return {
				filters: {
					...prevState.filters,
					city: checked
						? prevState.filters.city.concat(value)
						: prevState.filters.city.filter(c => c !== value),
				},
			};
		});
	};

	render() {
		const { cities } = this.state.data;

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
