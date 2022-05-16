import React, { useEffect, useState } from "react";
import "./homepage.styles.scss";
import "./../../components/menu-item/menu-item.component";
import Directory from "../../components/directory-menu/directory-item.component";

const HomePage = () => {
  const [eventStream, setEventStream] = useState([]);

  useEffect(() => {
    // Ashish replace it with your api call, just remove the array and put the result of api call
    // Ashish: bhai timestamp shi format me bhej
    setEventStream([
      {
        timestamp:
          "time.Date(2022, time.May, 14, 12, 54, 38, 289640064, time.Local)",
        action: "initialized the events database",
        type: "INITIALIZE",
      },
      {
        timestamp:
          "time.Date(2022, time.May, 14, 12, 54, 45, 408073628, time.Local)",
        action: "Child opened brave",
        type: "CHILD",
      },
      {
        timestamp:
          "time.Date(2022, time.May, 14, 12, 54, 45, 460547702, time.Local)",
        action: "Child opened brave",
        type: "CHILD",
      },
      {
        timestamp:
          "time.Date(2022, time.May, 14, 12, 54, 45, 470114209, time.Local)",
        action: "Child opened brave",
        type: "CHILD",
      },
      {
        timestamp:
          "time.Date(2022, time.May, 14, 12, 54, 45, 472227641, time.Local)",
        action: "Child opened brave",
        type: "CHILD",
      },
      {
        timestamp:
          "time.Date(2022, time.May, 14, 12, 55, 35, 604665885, time.Local)",
        action: "initialized the events database",
        type: "INITIALIZE",
      },
      {
        timestamp:
          "time.Date(2022, time.May, 14, 12, 55, 38, 710024942, time.Local)",
        action: "Child opened brave",
        type: "CHILD",
      },
      {
        timestamp:
          "time.Date(2022, time.May, 14, 12, 55, 38, 778127520, time.Local)",
        action: "Child opened brave",
        type: "CHILD",
      },
      {
        timestamp:
          "time.Date(2022, time.May, 14, 12, 55, 38, 790703813, time.Local)",
        action: "Child opened brave",
        type: "CHILD",
      },
      {
        timestamp:
          "time.Date(2022, time.May, 14, 12, 55, 38, 792994569, time.Local)",
        action: "Child opened brave",
        type: "CHILD",
      },
    ]);
  }, []);

  return (
    <div className="homepage">
      <div>
        <h4 style={{ marginBottom: 16 }}>Your Last 5 Events</h4>
      </div>
      <Directory />
      <table class="table" style={{ "margin-top": 24 }}>
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Performer</th>
            <th scope="col">Action Performed</th>
            <th scope="col">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {eventStream.map(({ timestamp, action, type }, idx) => (
            <tr>
              <th scope="row">{idx + 1}</th>
              <td>{type}</td>
              <td>{action}</td>
              <td>{timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <F />
    </div>
  );
};

export default HomePage;

function F() {

  function handleSubmit(e) {
    e.preventDefault();
    // ashish your form post request here
    console.log("form posted")
  }
  return (
    <div style={{width: "50%", textAlign: "center"}}>
      <h4 style={{marginTop: "36px"}}>
        BRIEF INFO ABOUT THE SUBMISSION
      </h4>
      <form>
        <div class="form-row" style={{display: "flex"}}>
          <div class="col" style={{margin: 10}}>
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="col" style={{margin: 10}}>
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
        </div>
        <button class="btn btn-primary btn-lg btn-block" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
