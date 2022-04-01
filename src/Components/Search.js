import React from 'react';
import "./Search.css"

function Search() {
  const SearchCards = (props) => {
    return (
      <div className='SearchCardComponent'>
        <img src={props.img} alt="Not available" />
        <div className='SearchCardComponentHead'>{props.heading}</div>
      </div>
    )
  }
  const SelectedCards = (props) => {
    return (
      <div className='SelectedCardComponent'>
        <img src={props.img} alt="Not available" />
        <div className='SelectedCardComponentBody'>
          <h2>{props.heading}</h2>
          something retured from api
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className='SearchCards'>
        <SearchCards img="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/10/23165414/Career-in-Travel-and-Tourism.jpg" heading="Tourism" />
        <SearchCards img="https://www.collinsdictionary.com/images/full/restaurant_135621509.jpg" heading="Restaurants" />
        <SearchCards img="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg" heading="Hotels" />
        <SearchCards img="https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg" heading="Spots" />
        <SearchCards img="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/03/31174154/Hidden-Gems-Himachal.jpg" heading="Hidden Gems" />
        <SearchCards img="https://imageio.forbes.com/specials-images/dam/imageserve/1138257321/960x0.jpg?fit=bounds&format=jpg&width=960" heading='Shopping' />
      </div>
      <div className='SelectedCards'>
        <SelectedCards img-="/" heading="api" />
        <SelectedCards img-="/" heading="api" />
        <SelectedCards img-="/" heading="api" />
        <SelectedCards img-="/" heading="api" />
        <SelectedCards img-="/" heading="api" />
        <SelectedCards img-="/" heading="api" />
      </div>
    </div>
  )
}

export default Search