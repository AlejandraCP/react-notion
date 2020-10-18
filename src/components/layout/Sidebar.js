import React from 'react';
import {FaRegCalendar, FaRegCalendarAlt, FaChevronDown, FaInbox} from 'react-icons/fa'
export const Sidebar = () => {
    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="">
                <li>
                    <span><FaInbox/></span>
                    <span>Inbox</span>
                </li>
                <li>
                    <span><FaRegCalendar/></span>
                    <span>Today</span>
                </li>
                <li>
                    <span><FaRegCalendarAlt/></span>
                    <span>Next 7 days</span>
                </li>
            </ul>
            <div className=''>
                <span>
                    <FaChevronDown/>
                </span>
                <h2>Projects</h2>
                <ul className=''>
                    <li>lista de proyectos</li>
                </ul>
                componente para agregar componentes

            </div>
        </div>
    )
}