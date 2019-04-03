import React, { Component } from 'react';
import "./StudentCalendar.css";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export class StudentCalendar extends Component {

  // fetch('/sessions')
  //   .then(function(response) {
  //     // Modify data here
  // })
  // .catch(function(error){
  //   console.log(error);
  // });

  constructor(props) {
    super(props);

    this.state = {
      sessions: [
        {
          sessionDate: 'new Date(2019, 2, 12)'
        },
        {
          sessionDate: 'new Date(2019, 2, 6)'
        },
        {
          sessionDate: 'new Date(2019, 2, 18)'
        },
        {
          sessionDate: 'new Date(2019, 2, 27)'
        }
      ]
    }
  }
  
  render() {
    return (
      <div className="box" id="studentCalendar">
        <article className="media" id="calendarSpacing">

            <DayPicker
              initialMonth={new Date()}
              selectedDays={this.state.sessions}
            />

        </article>
      </div>
    );
  }
}

export default StudentCalendar;
