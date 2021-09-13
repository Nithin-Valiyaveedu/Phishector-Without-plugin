import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the damages that phishing has caused in the real world!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <div className='cards__items' onClick={() => window.open("https://www.scmagazine.com/home/security-news/phishing/linkedin-confirms-leak-of-500-million-profiles-online-maintains-incident-was-not-a-breach/", "_blank")}>
            <CardItem
              
              src='images/img-9.jpg'
              text='LinkedIn confirms leak of 500 million profiles online, maintains incident was not a breach'
              label='April 9, 2021'
              
            
               


            />
            </div>
            
            
            <div className='cards__items' onClick={() => window.open("https://timesofindia.indiatimes.com/city/bhopal/beware-fake-covid-vaccine-registration-sms-installs-malware-on-phone/articleshow/82626279.cms", "_blank")}>
            <CardItem
              src='images/img-2.jpg'
              text='Beware! Fake Covid vaccine registration SMS installs malware..'
              label='May 14, 2021'
              
            />
            </div>
          </ul>
          <ul className='cards__items'>
          <div className='cards__items' onClick={() => window.open("https://timesofindia.indiatimes.com/city/mumbai/banking-frauds-make-for-50-of-phishing-cases-in-maharashtra-state/articleshow/82152756.cms", "_blank")}>
            <CardItem
              src='images/img-3.jpg'
              text='Banking frauds make for 50% of phishing cases in Maharashtra'
              label='Apr 20, 2021'
              
            />
            </div>
            {/* <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            /> */}
            <div className='cards__items' onClick={() => window.open("https://timesofindia.indiatimes.com/topic/Phishing", "_blank")}>
            <CardItem
              src='images/img-8.jpg'
              text='21-year-old arrested for Rs 1 lakh ‘phishing’ attack in Delh '
              label='Mar 3, 2021'
              
            />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
