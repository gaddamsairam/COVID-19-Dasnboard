import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import Footer from '../Footer'

import ShowEachDistrictData from '../ShowEachDistrictData'
import StateTotalData from '../StateTotalData'
import ChartsData from '../ChartsData'

import './index.css'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

const statesImagesList = [
  {
    stateCode: 'AN',
    stateName: 'Andaman and Nicobar Islands',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643446550/Missing%20Covid19%20project%20images/Group_7362Andaman_and_Nicobar_Islands_s56znk.png',
  },
  {
    stateCode: 'AP',
    stateName: 'Andhra Pradesh',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643446883/Missing%20Covid19%20project%20images/Group_7354Andhar_Pradesh_muagmf.png',
  },
  {
    stateCode: 'AR',
    stateName: 'Arunachal Pradesh',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432393/covid19%20project%20states%20images/Group_7340Arunachal_Pradesh_yzwrrc.png',
  },
  {
    stateCode: 'AS',
    stateName: 'Assam',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432393/covid19%20project%20states%20images/Group_7341Assam_glxxbo.png',
  },
  {
    stateCode: 'BR',
    stateName: 'Bihar',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432403/covid19%20project%20states%20images/Group_7335Bihar_xtxgjw.png',
  },
  {
    stateCode: 'CH',
    stateName: 'Chandigarh',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643446555/Missing%20Covid19%20project%20images/Group_7361Chandigarh_ky25tw.png',
  },
  {
    stateCode: 'CT',
    stateName: 'Chhattisgarh',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432398/covid19%20project%20states%20images/Group_7353Chhattisgarh_bq9i6k.png',
  },
  {
    stateCode: 'DN',
    stateName: 'Dadra and Nagar Haveli and Daman and Diu',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643446553/Missing%20Covid19%20project%20images/Group_7357Daman_and_Diu_Dadra_and_nagar_Haveli_jcvp97.png',
  },
  {
    stateCode: 'DL',
    stateName: 'Delhi',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643446551/Missing%20Covid19%20project%20images/Group_7358Delhi_gwcss1.png',
  },
  {
    stateCode: 'GA',
    stateName: 'Goa',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432392/covid19%20project%20states%20images/Group_7349Goa_gywtvw.png',
  },
  {
    stateCode: 'GJ',
    stateName: 'Gujarat',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432405/covid19%20project%20states%20images/Group_7337Gujarat_rl6xp3.png',
  },
  {
    stateCode: 'HR',
    stateName: 'Haryana',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432405/covid19%20project%20states%20images/Group_7332Haryana_a09ysf.png',
  },
  {
    stateCode: 'HP',
    stateName: 'Himachal Pradesh',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432400/covid19%20project%20states%20images/Group_7364Himachal_Pradesh_ih9kb3.png',
  },
  {
    stateCode: 'JK',
    stateName: 'Jammu and Kashmir',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432401/covid19%20project%20states%20images/Group_7328Jammu_and_kashmir_z3rq8z.png',
  },
  {
    stateCode: 'JH',
    stateName: 'Jharkhand',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432404/covid19%20project%20states%20images/Group_7342Jharkhand_rhuujy.png',
  },
  {
    stateCode: 'KA',
    stateName: 'Karnataka',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432399/covid19%20project%20states%20images/Group_7339Karnataka_oo0hh1.png',
  },
  {
    stateCode: 'KL',
    stateName: 'Kerala',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432400/covid19%20project%20states%20images/Group_7355Karala_skturl.png',
  },
  {
    stateCode: 'LA',
    stateName: 'Ladakh',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643446552/Missing%20Covid19%20project%20images/Group_7363Ladakh_k52rn8.png',
  },
  {
    stateCode: 'LD',
    statename: 'Lakshadweep',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643446552/Missing%20Covid19%20project%20images/Group_7359Lakshadweep_x9hmtu.png',
  },
  {
    stateCode: 'MH',
    statName: 'Maharashtra',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643446883/Missing%20Covid19%20project%20images/Group_7350Maharasta_nvw5qk.png',
  },
  {
    stateCode: 'MP',
    stateName: 'Madhya Pradesh',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432404/covid19%20project%20states%20images/Group_7336Madhya_Pradesh_ny8f9q.png',
  },
  {
    stateCode: 'MN',
    stateName: 'Manipur',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432400/covid19%20project%20states%20images/Group_7346Manipur_gp3uxd.png',
  },
  {
    stateCode: 'ML',
    stateName: 'Meghalaya',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432398/covid19%20project%20states%20images/Group_7344Meghalava_xsqbz0.png',
  },
  {
    stateCode: 'MZ',
    stateName: 'Mizoram',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432394/covid19%20project%20states%20images/Group_7347Mizeram_jrkva9.png',
  },
  {
    stateCode: 'NL',
    stateName: 'Nagaland',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432395/covid19%20project%20states%20images/Group_7345Nagaland_pctnth.png',
  },
  {
    stateCode: 'OR',
    stateName: 'Odisha',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432413/covid19%20project%20states%20images/Group_7348Orissa_qiycdk.png',
  },
  {
    stateCode: 'PY',
    stateName: 'Puducherry',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643446552/Missing%20Covid19%20project%20images/Group_7360Puducherry_vwsjhe.png',
  },
  {
    stateCode: 'PB',
    stateName: 'Punjab',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432402/covid19%20project%20states%20images/Group_7330Punjab_hyuxkt.png',
  },
  {
    stateCode: 'RJ',
    stateName: 'Rajasthan',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432402/covid19%20project%20states%20images/Group_7333Rajasthan_bfossl.png',
  },
  {
    stateCode: 'SK',
    stateName: 'Sikkim',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432406/covid19%20project%20states%20images/Group_7338Sikkim_omauqq.png',
  },
  {
    stateCode: 'TN',
    stateName: 'Tamil Nadu',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432401/covid19%20project%20states%20images/Group_7356Tamil_Nadu_lsdjdi.png',
  },
  {
    stateCode: 'TG',
    stateName: 'Telangana',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432399/covid19%20project%20states%20images/Group_7351Telangena_vabwir.png',
  },
  {
    stateCode: 'TR',
    stateName: 'Tripura',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432398/covid19%20project%20states%20images/Group_7352Tripura_mzkal9.png',
  },
  {
    stateCode: 'UP',
    stateName: 'Uttar Pradesh',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432403/covid19%20project%20states%20images/Group_7334Uttar_Pradesh_bd7asp.png',
  },
  {
    stateCode: 'UT',
    stateName: 'Uttarakhand',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432404/covid19%20project%20states%20images/Group_7342Jharkhand_rhuujy.png',
  },
  {
    stateCode: 'WB',
    stateName: 'West Bengal',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432407/covid19%20project%20states%20images/Group_7343West_Bengal_jlkc8i.png',
  },
]

class StateWiseCases extends Component {
  state = {
    isLoading: true,
    activeTab: true,
    category: 'Confirmed',
    dataArray: [],
    eachStateTotalData: [],
    nameOfState: '',
    stateId: '',
    stateCode: '',
    totalTestedData: 0,
    date: '',
  }

  componentDidMount() {
    this.getAllStatesData()
  }

  getAllStatesData = async () => {
    const {match} = this.props
    const {params} = match
    const {stateCode} = params
    const apiUrl = `https://apis.ccbp.in/covid19-state-wise-data/`
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const stateTastedData = data[stateCode].total.tested
      const stateObject = statesList.filter(
        each => each.state_code === stateCode,
      )
      const eachState = data[stateCode].total
      const stateName = stateObject[0].state_name
      const dateData = new Date(data[stateCode].meta.last_updated)
      this.setState({
        isLoading: false,
        eachStateTotalData: eachState,
        totalTestedData: stateTastedData,
        nameOfState: stateName,
        stateId: stateCode,
        dataArray: data,
        date: dateData,
        stateCode,
      })
    } else {
      console.log('Fetch Error')
    }
  }

  onGetCategory = categoryVal => {
    this.setState({category: categoryVal, activeTab: false})
  }

  renderLoader = () => (
    <>
      <div className="loader-container" testid="stateDetailsLoader">
        <Loader type="ThreeDots" color="blue" height="50" width="50" />
      </div>
    </>
  )

  ShowImage = () => {
    const {stateCode} = this.state

    const singleImage = statesImagesList.find(
      image => image.stateCode === stateCode,
    )
    console.log(singleImage)
    const {ImageUrl, stateName} = singleImage
    console.log(ImageUrl)
    console.log(stateName)
    return <img src={ImageUrl} alt={stateName} className="state-image" />
  }

  getCategoryWiseData = () => {
    const {category, stateId, dataArray} = this.state
    const districtOutput = dataArray[stateId].districts
    const distNamesList = Object.keys(districtOutput)
    const categoryLower = category.toLowerCase()

    const categoryData = distNamesList.map(element => ({
      distName: element,
      value: districtOutput[element].total[categoryLower]
        ? districtOutput[element].total[categoryLower]
        : 0,
    }))

    categoryData.sort((a, b) => b.value - a.value)

    const activeCases = distNamesList.map(element => ({
      distName: element,
      value:
        districtOutput[element].total.confirmed -
        (districtOutput[element].total.recovered +
          districtOutput[element].total.deceased)
          ? districtOutput[element].total.confirmed -
            (districtOutput[element].total.recovered +
              districtOutput[element].total.deceased)
          : 0,
    }))
    activeCases.sort((a, b) => b.value - a.value)

    if (categoryLower === 'active') {
      return activeCases
    }
    return categoryData
  }

  renderStateView = () => {
    const {
      activeTab,
      totalTestedData,
      eachStateTotalData,
      nameOfState,
      date,
      category,
      stateCode,
    } = this.state

    const catdata = this.getCategoryWiseData()

    return (
      <>
        <div className="state-name-row">
          <h1 className="state-title">{nameOfState}</h1>
          <div className="testNo-container">
            <p className="test-title">Tested</p>
            <p className="testNo">{totalTestedData}</p>
          </div>
        </div>

        <div>
          <p className="last-date">{`last update on ${date}`}</p>
        </div>

        <div className="align-center-row">
          <div className="country-stats">
            <StateTotalData
              onGetCategory={this.onGetCategory}
              eachStateTotalData={eachStateTotalData}
              active={activeTab}
            />
          </div>
        </div>
        <div className="image-state">{this.ShowImage()}</div>

        <div className="total-district-data-block">
          <h1 className={`district-heading ${category}-color`}>
            Top Districts
          </h1>
          <div className="ul-parent-list">
            <div className="district-data-ul-list">
              <ul
                className="districts-container"
                testid="topDistrictsUnorderedList"
              >
                {catdata.map(each => (
                  <ShowEachDistrictData
                    key={each.distName}
                    number={each.value}
                    name={each.distName}
                  />
                ))}
              </ul>
            </div>
          </div>

          <div className="graphs-data" testid="lineChartsContainer">
            <ChartsData stateCode={stateCode} category={category} />
          </div>
        </div>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        <Header />
        <div className="single-state-main-container">
          <div className="state-content-container">
            {isLoading ? this.renderLoader() : this.renderStateView()}
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default StateWiseCases
