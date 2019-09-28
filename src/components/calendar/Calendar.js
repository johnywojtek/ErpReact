import React from 'react';

import { azCalendarEvents } from './calendarEvents';
import { Scrollbars } from 'react-custom-scrollbars';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

import { IoIosCalendar, IoMdAdd } from 'react-icons/io';

export default class Calendar extends React.Component {
    calendarComponentRef = React.createRef();

    state = {
        calendarWeekends: true
    };

    getCurrentDate = (separator = ' ') => {
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${date}${separator}${
            month < 10 ? `0${month}` : `${month}`
        }${separator}${year}`;
    };

    onDateClick = arg => {
        //modal
        if (alert('Would you like to add an event to ' + arg.dateStr + ' ?')) {
            this.setState({
                // add new event data
                calendarEvents: azCalendarEvents
            });
        }
    };

    render() {
        return (
            <Scrollbars style={{ height: '90%' }}>
                <div class="az-content">
                    <div class="az-content az-content-calendar">
                        <div class="az-content-left az-content-left-calendar">
                            <div
                                id="dateToday"
                                class="az-content-label az-content-label-sm"
                            >
                                {this.getCurrentDate()}
                            </div>
                            <h2 class="az-content-title">My Calendar</h2>

                            <div class="fc-datepicker az-datepicker"></div>

                            <label class="az-content-label">Event List</label>
                            <nav class="nav az-nav-column az-nav-calendar-event">
                                <a href="#" class="nav-link">
                                    <IoIosCalendar />
                                    <div>Smart Oak Project</div>
                                </a>
                                <a href="#" class="nav-link">
                                    <IoIosCalendar />
                                    <div>NeuroN Foundation</div>
                                </a>
                                <a href="#" class="nav-link">
                                    <IoIosCalendar />
                                    <div>Oak Atlantis</div>
                                </a>
                                <li>
                                    <p class="nav-link add-mail">
                                        <IoMdAdd /> dodaj kolejnego maila
                                    </p>
                                </li>
                            </nav>
                        </div>
                        <div class="az-content-body az-content-body-calendar">
                            <div class="az-calendar">
                                <FullCalendar
                                    class="az-calendar"
                                    defaultView="dayGridMonth"
                                    header={{
                                        left: 'prev,next today',
                                        center: 'title',
                                        right:
                                            'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                                    }}
                                    plugins={[
                                        dayGridPlugin,
                                        timeGridPlugin,
                                        interactionPlugin
                                    ]}
                                    ref={this.calendarComponentRef}
                                    weekends={this.state.azCalendarEvents}
                                    events={this.state.azCalendarEvents}
                                    dateClick={this.onDateClick}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Scrollbars>
        );
    }
}
