import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeCapId: countryAndCapitalsList[0].id,
  }

  getChangedCap = event => {
    this.setState({activeCapId: event.target.value})
  }

  getCountryName = () => {
    const {activeCapId} = this.state
    const getCountry = countryAndCapitalsList.find(
      eachObj => eachObj.id === activeCapId,
    )
    return getCountry.country
  }

  render() {
    const {activeCapId} = this.state
    const countryName = this.getCountryName(activeCapId)

    return (
      <div className="bg-main-con">
        <div className="card-con">
          <h1 className="title">Countries And Capitals</h1>
          <div className="select-con">
            <select
              className="select-sty"
              onChange={this.getChangedCap}
              value={activeCapId}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option key={eachCapital.id} value={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{countryName}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
