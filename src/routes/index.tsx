import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventAttendeesList from '../pages/EventAttendeeList';
import Login from '../pages/Login';

const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Fragment>
				<Routes>
					<Route path="/event-attendees-list" element={<EventAttendeesList />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</Fragment>
		</BrowserRouter>
	);
};

export default RoutesApp;
