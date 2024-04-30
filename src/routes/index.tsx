import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventAttendeesList from '../pages/EventAttendeeList';
import Login from '../pages/Login';

const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Fragment>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="*" element={<Login />} />
					<Route path="/login" element={<Login />} />
					<Route path="/event-attendees-list" element={<EventAttendeesList />} />
				</Routes>
			</Fragment>
		</BrowserRouter>
	);
};

export default RoutesApp;
