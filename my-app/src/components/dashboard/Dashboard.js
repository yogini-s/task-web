import React from 'react';
import './Dashboard.css';
import { FaArrowRight, FaArrowsAltV, FaCaretDown, FaCaretSquareUp, FaChevronDown, FaChevronUp, FaCircle, FaExchangeAlt, FaHeart, FaPlane, FaTicketAlt, FaUser, FaWeightHanging } from 'react-icons/fa';
import { FaArrowTrendUp, FaBagShopping } from 'react-icons/fa6';

const Dashboard = () => {
  return (
    <main className="dashboard">
      <form className="radio-buttons">
        <div>
          <input type="radio" id="option1" name="options" value="option1" />
          <label htmlFor="option1">One Way Trip</label>
        </div>
        <div>
          <input type="radio" id="option2" name="options" value="option2" />
          <label htmlFor="option2">Round Trip</label>
        </div>
        <div>
          <input type="radio" id="option3" name="options" value="option3" />
          <label htmlFor="option3">Multiple way</label>
        </div>
      </form>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="from">From</label>
          <input type="text" id="from" name="from" placeholder="DEL" className="top-input" />
        </div>
        <div className="dell">
          <FaExchangeAlt className="change-dell" />
        </div>
        <div className="form-group">
          <label htmlFor="to">To</label>
          <input type="text" id="to" name="to" placeholder="DEL" className="top-input" />
        </div>
        <div className="form-group">
          <label htmlFor="departure-date">Departure Date</label>
          <input type="date" id="departure-date" name="departure-date" className="top-input" />
        </div>
        <div className="form-group">
          <label htmlFor="return-date">Return Date</label>
          <input type="date" id="return-date" name="return-date" className="top-input" />
        </div>
        <div className="form-group">
          <label htmlFor="class">Class</label>
          <div className="input-with-icon">
            <input type="text" id="class" name="class" placeholder="Select Class" className="top-input" />
            <span className="icon"><FaCaretDown /></span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="passengers">Passenger</label>
          <div className="input-with-icon">
            <input type="text" id="passengers" name="passengers" placeholder="1 Adult, 0 Children" className="top-input" />
            <span className="icon"><FaUser /></span>
          </div>
        </div>
        <button className="find-flight">
          Find Flight
          <FaPlane />
        </button>
      </div>
      <div className="two-column-layout">
        <div className="column column-3">
          <div className="show-filter">
            <h3 className="show-heading">Filters</h3>
            <p className="show-para">Showing 86 flights</p>
          </div>
          <div className="flight-layout">
            <div className="header-container">
              <h3 className="preferred-heading">Preferred Airlines</h3>
              <button className="view-all-button">View All</button>
            </div>
            <div className="two-column-layout">
              <div className="row">
                <div className="left-side">
                  <input type="checkbox" id="filter" />
                  <label htmlFor="filter" className="flight-title">ABC Air Technologies</label>
                </div>
                <div className="right-side">
                  <span className="price">$203</span>
                  <img src="flight.jpg " alt="Product" className="product-images" />
                </div>
              </div>
            </div>
            <div className="two-column-layout">
              <div className="row">
                <div className="left-side">
                  <input type="checkbox" id="filter" />
                  <label htmlFor="filter" className="flight-title">Emirates Airlines</label>
                </div>
                <div className="right-side">
                  <span className="price">$520</span>
                  <img src="Emirates-Logo-1999.jpg " alt="Product" className="product-image" />
                </div>
              </div>
            </div>
            <div className="two-column-layout">
              <div className="row">
                <div className="left-side">
                  <input type="checkbox" id="filter" />
                  <label htmlFor="filter" className="flight-title">Qatar Airlines</label>
                </div>
                <div className="right-side">
                  <span className="price">$520</span>
                  <img src="Qatar-Airways-Logo.png" alt="Product" className="product-image" />
                </div>
              </div>
            </div>
            <div className="two-column-layout">
              <div className="row">
                <div className="left-side">
                  <input type="checkbox" id="filter" />
                  <label htmlFor="filter" className="flight-title">Etihad Airlines</label>
                </div>
                <div className="right-side">
                  <span className="price">$230</span>
                  <img src="Etihad-airways-logo.svg.png" alt="Product" className="product-image" />
                </div>
              </div>
            </div>
          </div>

          <div className="Stops">
            <div className="header-row">
              <div className="left-side">
                <h3 className="stop-heading">Stops</h3>
              </div>
              <div className="right-side">
                <button className="up-icon"><FaChevronDown /></button>
              </div>
            </div>
            <div className="button-row">
              <button className="btn">Non-stop</button>
              <button className="btn">1 stop</button>
              <button className="btn">2+ Stop</button>
            </div>
          </div>


          <div className="Price">
            <div className="header-row">
              <div className="left-side">
                <h3 className="price-heading">Price</h3>
              </div>
              <div className="right-side">
                <button className="up-icon"><FaChevronDown /></button>
              </div>
            </div>
            <div className="price-range-row">
              <input type="range" className="price-range" min="0" max="100" />
            </div>
            <div className="price-values-row">
              <span className="price-min">$5000</span>
              <span className="price-max">$10,000</span>
            </div>
          </div>

          <div className="onward">
            <div className="header-row">
              <div className="left-side">
                <h3 className="price-heading">Onward Duration</h3>
              </div>
              <div className="right-side">
                <h3 className="reset">Reset</h3>
              </div>
            </div>
            <div className="price-range-row">
              <input type="range" className="price-range" min="0" max="100" />
            </div>
            <div className="price-values-row">
              <span className="price-min">$5000</span>
              <span className="price-max">$10,000</span>
            </div>
          </div>
          <div className="departure-arrival">
            <div className="Departure">
              <div className="header-row">
                <div className="left-side">
                  <h3 className="stop-heading">Departure</h3>
                </div>
                <div className="right-side">
                  <button className="up-icon"><FaChevronDown /></button>
                </div>
              </div>
              <div className="button-row">
                <button className="btn">12PM-6PM</button>
                <button className="btn">After 6PM</button>
              </div>
            </div>
            <div className="Arrival">
              <div className="header-row">
                <div className="left-side">
                  <h3 className="stop-heading">Arrival</h3>
                </div>
                <div className="right-side">
                  {/* <button className="up-icon"><FaChevronDown /></button> */}
                </div>
              </div>
              <div className="button-row">
                <button className="btn">12PM-6PM</button>
                <button className="btn">After 6PM</button>
                <button className="btn">12PM-6PM</button>
                <button className="btn">After 6PM</button>
              </div>
            </div>
          </div>
          <div className="Baggage">
            <div className="header-row">
              <div className="left-side">
                <h3 className="stop-heading">Bags</h3>
              </div>
              <div className="right-side">
                <button className="up-icon"><FaChevronDown /></button>
              </div>
            </div>
            <div className="header-row">
              <div className="left-side">
                <FaBagShopping className="shooping-icon" />
                <h3 className="cabin">Cabin Baggage</h3>
              </div>
              <div className="right-side">
                <div className="circle">
                  <button className="control-button">-</button>
                </div>
                <h3 className="number"> 1 </h3>
                <div className="circle">
                  <button className="control-button">+</button>
                </div>
              </div>
            </div>
            <div className="header-row">
              <div className="left-side">
                <FaBagShopping className="shooping-icon" />
                <h3 className="cabin">Checked Baggage</h3>
              </div>
              <div className="right-side">
                <div className="circle">
                  <button className="control-button">-</button>
                </div>
                <h3 className="number"> 0 </h3>
                <div className="circle">
                  <button className="control-button">+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="connections">
            <div className="header-row">
              <div className="left-side">
                <h3 className="connection">Connections</h3>
              </div>
              <div className="right-side">
                <button className="up-icon"><FaChevronDown /></button>
              </div>
            </div>
            <div className="content-row">
              <div className="left-side">
                <input type="checkbox" id="option" />
                <label htmlFor="option" className="title-checkbox">Self-transfer to different station/airport</label>
              </div>
            </div>
            <div className="content-row">
              <div className="left-side">
                <input type="checkbox" id="option" />
                <label htmlFor="option" className="title-checkbox">Allow return from a different station/airport</label>
              </div>
            </div>
            <div className="content-row">
              <div className="left-side">
                <input type="checkbox" id="option" />
                <label htmlFor="option" className="title-checkbox">Allow return to a different station/airport</label>
              </div>
            </div>
          </div>
          <div className="Duration">
            <div className="header-row">
              <div className="left-side">
                <h3 className="price-heading">Duration</h3>
              </div>
              <div className="right-side">
                <button className="up-icon"><FaChevronDown /></button>
              </div>
            </div>
            <div className="stopover">
              <h3 className="stopover-h">Max Travel time</h3>
              <p className="stopover-p"> Any </p>
            </div>
            <div className="price-range-row">
              <input type="range" className="price-range" min="0" max="100" />
            </div>
            <div className="price-values-row">
              <span className="price-min"></span>
              <span className="price-max">Any</span>
            </div>
            <div className="stopover">
              <h3 className="stopover-h">Stopover</h3>
              <p className="stopover-p"> 2-25 hours </p>
            </div>
            <div className="price-range-row">
              <input type="range" className="price-range" min="0" max="100" />
            </div>
            <div className="price-values-row">
              <span className="price-min">2 hour</span>
              <span className="price-max">25 hour</span>
            </div>
          </div>

          <div className="weeks">
            <div className="header-row">
              <div className="left-side">
                <h3 className="days">Days</h3>
              </div>
              <div className="right-side">
                <button className="up-icon"><FaChevronDown /></button>
              </div>
            </div>
            <div className="button-row">
              <button className="departure-button">Departure</button>
              <h4 className="return-heading">Return</h4>
            </div>
            <div className="week-container">
              <div className="week-day">M</div>
              <div className="week-day">T</div>
              <div className="week-day">W</div>
              <div className="week-day">T</div>
              <div className="week-day">F</div>
              <div className="week-day">S</div>
              <div className="week-day">S</div>
            </div>
          </div>

          <div className="exclude">
            <div className="header-row">
              <div className="left-side">
                <h3 className="days">Exclude countries</h3>
              </div>
              <div className="right-side">
                <button className="up-icon"><FaChevronDown /></button>
              </div>
            </div>
          </div>


        </div>
        <div className="column column-9">
          <div className="container-right">
            <div className="button-row">
              <div className="button">
                <span className="icon">🚀</span>
                <div class="text">
                  <h3 className="heading">Recommended</h3>
                  <p className="para">$500 - 10h 20m</p>
                </div>
              </div>
              <div className="button">
                <span className="icon">📈</span>
                <div className="text">
                  <h3 className="heading">CHEAPEST</h3>
                  <p className="para">$500 - 10h 20m</p>
                </div>
              </div>
              <div className="button">
                <span className="icon">🔔</span>
                <div className="text">
                  <h3 className="heading">FASTEST</h3>
                  <p className="para">$500 - 10h 20m</p>
                </div>
              </div>
              <div className="button">
                <span className="icon">⚙️</span>
                <div className="text">
                  <h3 className="heading">Price Calender</h3>
                  <p className="para">$500 - 10h 20m</p>
                </div>
              </div>
            </div>
            <p>Flights sorted by discounted fares</p>
          </div>

          <div className="main-container">
            <div className="image-heading-section">
              <img src="Qatar-Airways-Logo.png" alt="Product" className="image" />
              <div className="heading-section">
                <h2 className="left-heading">QATAR Airline</h2>
                <h2 className="right-heading"> <FaHeart className="heart-icon" />Travel Class: Economy</h2>
              </div>
            </div>
            <div className="cards">
              <div className="card">
                <div className="card-content">
                  <div className="date-time">
                    <span className="day-date">Sun, 29 Jan 2023</span>
                    <span className="time">14.50</span>
                    <h3 className="card-heading">Moi Intl, Mombasa<br></br>Kenya</h3>
                  </div>
                  <div class="flight-info">
                    <div className="flight-time">
                      <span className="time">9hr 50min</span>
                    </div>
                    <span className="flight-icon">✈️</span>
                  </div>
                  <div className="date-time">
                    <span className="day-date"></span>
                    <span className="time">14.50</span>
                    <h3 className="card-heading">Moi Intl, Mombasa<br></br>Kenya</h3>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <span className="currency">$18.500</span>
                <span className="Off">$500 OFF</span>
                <button className="book-now">Book Now</button>
              </div>
            </div>

            <div className="additional-headings">
              <h3 className="remaining">100 seats remaining</h3>
              <h3 className="refundable">Partially Refundable</h3>
              <h3 className="details">View flight details</h3>
            </div>

            <div className="icon-heading-container">
              <div className="icon-heading-item">
                <FaTicketAlt className="icon" />
                <span>Separate Tickets</span>
              </div>
              <div className="icon-heading-item">
                <FaArrowsAltV className="icon" />
                <span>Change of Terminal</span>
              </div>
              <div className="icon-heading-item">
                <FaExchangeAlt className="icon" />
                <span>Self Transfer</span>
              </div>
              <div className="icon-heading-item">
                <FaWeightHanging className="icon" />
                <span>7kg</span>
              </div>
              <div className="icon-heading-item">
                <FaCircle className="icon" />
                <span>0</span>
              </div>
              <div className="icon-heading-item">
                <FaCircle className="icon" />
                <span>1</span>
              </div>
            </div>
          </div>

          <div className="main-container">
            <div className="image-heading-section">
              <img src="Qatar-Airways-Logo.png" alt="Product" className="image" />
              <div className="heading-section">
                <h2 className="left-heading">QATAR Airline</h2>
                <h2 className="right-heading"> <FaHeart className="heart-icon" />Travel Class: Economy</h2>
              </div>
            </div>
            <div className="cards">
              <div className="card">
                <div className="card-content">
                  <div className="date-time">
                    <span className="day-date">Sun, 29 Jan 2023</span>
                    <span className="time">14.50</span>
                    <h3 className="card-heading">Moi Intl, Mombasa<br></br>Kenya</h3>
                  </div>
                  <div className="flight-info">
                    <div className="flight-time">
                      <span className="time">9hr 50min</span>
                    </div>
                    <span className="flight-icon">✈️</span>
                  </div>
                  <div className="date-time">
                    <span className="day-date"></span>
                    <span className="time">14.50</span>
                    <h3 className="card-heading">Moi Intl, Mombasa<br></br>Kenya</h3>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <span className="currency">$18.500</span>
                <span className="Off">$500 OFF</span>
                <button className="book-now">Book Now</button>
              </div>
            </div>

            <div className="additional-headings">
              <h3 className="remaining">100 seats remaining</h3>
              <h3 className="refundable">Partially Refundable</h3>
              <h3 className="details">View flight details</h3>
            </div>

            <div className="icon-heading-container">
              <div className="icon-heading-item">
                <FaTicketAlt className="icon" />
                <span>Separate Tickets</span>
              </div>
              <div className="icon-heading-item">
                <FaArrowsAltV className="icon" />
                <span>Change of Terminal</span>
              </div>
              <div className="icon-heading-item">
                <FaExchangeAlt className="icon" />
                <span>Self Transfer</span>
              </div>
              <div className="icon-heading-item">
                <FaWeightHanging className="icon" />
                <span>7kg</span>
              </div>
              <div className="icon-heading-item">
                <FaCircle className="icon" />
                <span>0</span>
              </div>
              <div className="icon-heading-item">
                <FaCircle className="icon" />
                <span>1</span>
              </div>
            </div>


          </div>
          <div className="main-container">
            <div className="image-heading-section">
              <img src="Qatar-Airways-Logo.png" alt="Product" className="image" />
              <div className="heading-section">
                <h2 className="left-heading">QATAR Airline</h2>
                <h2 className="right-heading"> <FaHeart className="heart-icon" />Travel Class: Economy</h2>
              </div>
            </div>
            <div className="cards">
              <div className="card">
                <div className="card-content">
                  <div className="date-time">
                    <span className="day-date">Sun, 29 Jan 2023</span>
                    <span className="time">14.50</span>
                    <h3 className="card-heading">Moi Intl, Mombasa<br></br>Kenya</h3>
                  </div>
                  <div className="flight-info">
                    <div className="flight-time">
                      <span className="time">9hr 50min</span>
                    </div>
                    <span className="flight-icon">✈️</span>
                  </div>
                  <div className="date-time">
                    <span className="day-date"></span>
                    <span className="time">14.50</span>
                    <h3 className="card-heading">Moi Intl, Mombasa<br></br>Kenya</h3>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <span className="currency">$18.500</span>
                <span className="Off">$500 OFF</span>
                <button className2="book-now">Book Now</button>
              </div>
            </div>

            <div className="additional-headings">
              <h3 className="remaining">100 seats remaining</h3>
              <h3 className="refundable">Partially Refundable</h3>
              <h3 className="details">View flight details</h3>
            </div>

            <div className="icon-heading-container">
              <div className="icon-heading-item">
                <FaTicketAlt className="icon" />
                <span>Separate Tickets</span>
              </div>
              <div className="icon-heading-item">
                <FaArrowsAltV className="icon" />
                <span>Change of Terminal</span>
              </div>
              <div className="icon-heading-item">
                <FaExchangeAlt className="icon" />
                <span>Self Transfer</span>
              </div>
              <div className="icon-heading-item">
                <FaWeightHanging className="icon" />
                <span>7kg</span>
              </div>
              <div className="icon-heading-item">
                <FaCircle className="icon" />
                <span>0</span>
              </div>
              <div className="icon-heading-item">
                <FaCircle className="icon" />
                <span>1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
