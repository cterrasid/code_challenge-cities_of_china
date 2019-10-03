import React, { PureComponent } from 'react';
import dataCities from '../../data/cities-of-china.json';
import Header from '../Header';
import Main from '../Main';
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
        cityCollector: [],
        filteredCities: [],
      },
    };
  }

  componentDidMount() {
    const { cities } = dataCities;

    this.setState({ data: { cities } });
  }

  filterByName = e => {
    const { value } = e.target;
    const { data } = this.state;
    const { cities } = data;
    const queryCities = cities.filter(city =>
      city.id.toLowerCase().includes(value.toLowerCase()),
    );
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        filteredCities: queryCities,
      },
    }));
  };

  getFilteredCities = () => {
    const { filters, data } = this.state;
    const { cities } = data;
    const { filteredCities } = filters;

    if (!filteredCities.length) {
      return cities;
    }
    return filteredCities;
  };

  handleSelectCities = e => {
    const { value, checked } = e.target;
    const { filters } = this.state;
    const { cityCollector } = filters;

    this.setState({
      filters: {
        cityCollector: checked
          ? [...cityCollector, value]
          : cityCollector.filter(c => c !== value),
      },
    });
  };

  handleSelectAllCities = e => {
    const { checked } = e.target;

    this.setState(prevState => ({
      ...prevState.filters,
      filters: {
        cityCollector: checked ? dataCities.cities.map(c => c.id) : [],
      },
    }));
  };

  render() {
    const { data } = this.state;
    const { cities } = data;
    const { filters } = this.state;
    const { cityCollector, filteredCities } = filters;

    return (
      <div className="app__container">
        <Header title="Cities of China" />
        <Main
          onSelectAllChange={this.handleSelectAllCities}
          filterByName={this.filterByName}
          getFilteredCities={this.getFilteredCities}
          filteredCities={filteredCities}
          cities={cities}
          onSelectChange={this.handleSelectCities}
          cityCollector={cityCollector}
        />
        <Footer copy="© 2019" by="Powered by Clarette Terrasi Díaz" />
      </div>
    );
  }
}

export default App;
