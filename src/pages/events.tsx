// import React, { useState, useEffect } from "react";
// import { google } from "googleapis";
// import format from "date-fns/format";
// import addMonths from "date-fns/addMonths";
// import subMonths from "date-fns/subMonths";

// interface Event {
// 	id: string;
// 	summary: string;
// 	start: { dateTime: string };
// 	end: { dateTime: string };
// }

// const Calendar: React.FC = () => {
// 	const [currentMonth, setCurrentMonth] = useState(new Date());
// 	const [events, setEvents] = useState<Event[]>([]);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				// Load client secrets from a local file or environment variable
// 				const { client_secret, client_id, redirect_uris } = JSON.parse(
// 					// Error : Argument of type 'string | undefined' is not assignable to parameter of type 'string'. Type 'undefined' is not assignable to type 'string'.
// 					process.env.GOOGLE_CREDENTIALS,
// 				).web;
// 				const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

// 				// Check if we have previously stored a token.
// 				if (!process.env.GOOGLE_AUTH_TOKEN) {
// 					throw new Error("No authentication token");
// 				}

// 				oAuth2Client.setCredentials(JSON.parse(process.env.GOOGLE_AUTH_TOKEN));

// 				const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

// 				const response = await calendar.events.list({
// 					calendarId: "primary",
// 					timeMin: new Date().toISOString(),
// 					maxResults: 10,
// 					singleEvents: true,
// 					orderBy: "startTime",
// 				});
// 				// Error : Argument of type 'Schema$Event[] | undefined' is not assignable to parameter of type 'SetStateAction<Event[]>'. Type 'undefined' is not assignable to type 'SetStateAction<Event[]>'.
// 				setEvents(response.data.items);
// 			} catch (error) {
// 				console.error("Error retrieving events", error);
// 			}
// 		};

// 		fetchData();
// 	}, [currentMonth]);

// 	const nextMonth = () => {
// 		setCurrentMonth(addMonths(currentMonth, 1));
// 	};

// 	const prevMonth = () => {
// 		setCurrentMonth(subMonths(currentMonth, 1));
// 	};

// 	// Rest of the Calendar component rendering logic, use the 'events' state to display events on the calendar

// 	return (
// 		<div>
// 			{/* Render calendar navigation and days here, like previously developed */}

// 			{/* Display events */}
// 			<section className="mt-12">
// 				<h2 className="font-semibold text-gray-900">
// 					Events for {format(currentMonth, "MMMM yyyy")}
// 				</h2>
// 				<ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
// 					{events.map((event) => (
// 						<li key={event.id} className="group flex items-center space-x-4 rounded-xl py-2 px-4">
// 							<div className="flex-auto">
// 								<p className="text-gray-900">{event.summary}</p>
// 								<p className="mt-0.5">
// 									<time dateTime={event.start.dateTime}>{event.start.dateTime}</time> -{" "}
// 									<time dateTime={event.end.dateTime}>{event.end.dateTime}</time>
// 								</p>
// 							</div>
// 						</li>
// 					))}
// 				</ol>
// 			</section>
// 		</div>
// 	);
// };

// export default Calendar;
