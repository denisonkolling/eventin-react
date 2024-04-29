import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventAttendeesList from '../pages/EventAttendeeList';

const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Fragment>
				<Routes>
					<Route path="/event-attendees-list" element={<EventAttendeesList />} />
				</Routes>
			</Fragment>
		</BrowserRouter>
	);
};

export default RoutesApp;
