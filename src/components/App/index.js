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
        queryName: '',
      },
    };
  }

  componentDidMount() {
    const { cities } = dataCities;

    this.setState({ data: { cities } });
  }

  filterByName = e => {
    const { value } = e.target;

    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        queryName: value,
      },
    }));
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
    const { cityCollector, queryName } = filters;

    return (
      <div className="app__container">
        <Header title="Cities of China" />
        <Main
          onSelectAllChange={this.handleSelectAllCities}
          filterByName={this.filterByName}
          queryName={queryName} cities={cities}
          onSelectChange={this.handleSelectCities}
          cityCollector={cityCollector}
          queryName={queryName} />
        <Footer copy="© 2019" by="Powered by Clarette Terrasi Díaz" />
      </div>
    );
  }
}

export default App;
