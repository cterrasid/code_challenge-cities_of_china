import React, { PureComponent } from 'react';
import dataCities from '../../data/cities-of-china.json';
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
        cityCollector: [],
      },
    };
  }

  componentDidMount() {
    const { cities } = dataCities;

    this.setState({ data: { cities } });
  }

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

    this.setState({
      filters: {
        cityCollector: checked ? dataCities.cities.map(c => c.id) : [],
      },
    });
  };

  render() {
    const { data } = this.state;
    const { cities } = data;
    const { filters } = this.state;
    const { cityCollector } = filters;

    return (
      <div className="app__container">
        <Header title="Cities of China" />
        <Filters onSelectAllChange={this.handleSelectAllCities} />
        <Dataset
          cities={cities}
          onSelectChange={this.handleSelectCities}
          cityCollector={cityCollector}
        />
        <Results />
        <Selection />
        <Footer copy="© 2019" by="Powered by Clarette Terrasi Díaz" />
      </div>
    );
  }
}

export default App;
