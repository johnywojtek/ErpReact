import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default class Calendar extends Component {
    render() {
        return (
            <div class="az-content">
                <div class="az-content az-content-calendar">
                    <div class="container">
                        <div class="az-content-left az-content-left-calendar">
                            <div
                                id="dateToday"
                                class="az-content-label az-content-label-sm"
                            ></div>
                            <h2 class="az-content-title">My Calendar</h2>

                            <div class="fc-datepicker az-datepicker"></div>

                            <label class="az-content-label">Event List</label>
                            <nav class="nav az-nav-column az-nav-calendar-event">
                                <a href="" class="nav-link">
                                    <i class="icon ion-ios-calendar "></i>
                                    <div>Smart Oak Project</div>
                                </a>
                                <a href="" class="nav-link">
                                    <i class="icon ion-ios-calendar "></i>
                                    <div>NeuroN Foundation</div>
                                </a>
                                <a href="" class="nav-link">
                                    <i class="icon ion-ios-calendar "></i>
                                    <div>Oak Atlantis</div>
                                </a>
                                <li>
                                    <p class="nav-link add-mail">
                                        <i class="fas fa-plus"></i> dodaj
                                        kolejnego maila
                                    </p>
                                </li>
                            </nav>
                        </div>
                        <div class="az-content-body az-content-body-calendar">
                            {/* <div id="calendar" class="az-calendar"></div> */}
                            <FullCalendar
                                defaultView="dayGridMonth"
                                plugins={[dayGridPlugin]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
