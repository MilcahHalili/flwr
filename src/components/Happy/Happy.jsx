import React from 'react';
import Mood from '../Mood/Mood';
import '../../components/UnorderedList/UnorderedList.css';
import '../../views/App/App.css';

class Happy extends React.Component {

  constructor() {
    super();
    this.state = {
      strains: []
    };

  }

  componentDidMount() {
    fetch(`http://strainapi.evanbusse.com/cIYjVTQ/strains/search/effect/happy`)
      .then(result => result.json())
      .then(strains => this.setState({ strains }))
  }

  render() {
    var strains = this.state.strains.map(strain => (
      <li key={strain.id}>
        <p className="reg-font">
          <span className="herb" role="img" aria-label="herb">🌿</span>
        </p>
        <p>
          <span className="strain-name">{strain.name}</span>
        </p>
        {/* <span className={strain.race} role="img" aria-label="heart">💚</span> */}
        <p className={strain.race}>
          {strain.race}
        </p>
      </li>
    ));
    return (
      <div className="Btns-div">
        <Mood />
        <div>
          <ul>
            {strains}
          </ul>
        </div>
      </div>
    );
  }
}

export default Happy;