import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faUser } from "@fortawesome/free-regular-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxi</span>
          </div>
        </div>
        <h1 className="headerTitle">Sign in, save money</h1>
        <p className="headerDesc">
          Save 10% or more at participating properties – just look for the blue
          Genius label.
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
            <span
              className="headerSearchText"
              onClick={() => setOpenDate(!openDate)}
            >
              {`${format(date[0].startDate, "MM/dd/yyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyy"
              )}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faUser} className="headerIcon" />
            <span
              className="headerSearchText"
              onClick={() => setOpenOptions(!openOptions)}
            >{`${options.adult} adult . ${options.children} child ${options.room} room`}</span>
            {openOptions && (
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button className="optionCounterButton">-</button>
                    <span className="optionCounterNumber">1</span>
                    <button className="optionCounterButton">+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button className="optionCounterButton">-</button>
                    <span className="optionCounterNumber">1</span>
                    <button className="optionCounterButton">+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">room</span>
                  <div className="optionCounter">
                    <button className="optionCounterButton">-</button>
                    <span className="optionCounterNumber">1</span>
                    <button className="optionCounterButton">+</button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;