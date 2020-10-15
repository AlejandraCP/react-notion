import React from 'react';
import {FaPizzaSlice} from 'react-icons/fa';
export const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <img src="images/logo.png" alt="todolist"/>
                </div>
                <div>
                    <ul>
                        <li>A</li>
                        <li>
                            <FaPizzaSlice/>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}