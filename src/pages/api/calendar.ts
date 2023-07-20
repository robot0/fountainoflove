// import { calendar_v3, google } from "googleapis";

// export default async function handler(
// 	req: { method: string },
// 	res: {
// 		status: (arg0: number) => {
// 			(): any;
// 			new (): any;
// 			end: { (): any; new (): any };
// 			json: { (arg0: calendar_v3.Schema$Event[] | undefined): void; new (): any };
// 		};
// 	},
// ) {
// 	if (req.method !== "GET") {
// 		return res.status(405).end();
// 	}

// 	// Load client secrets from a local file.
// 	const { client_secret, client_id, redirect_uris } = JSON.parse(
// 		process.env.GOOGLE_CREDENTIALS,
// 	).web;
// 	const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

// 	// Check if we have previously stored a token.
// 	if (!process.env.GOOGLE_AUTH_TOKEN) {
// 		return res.status(401).json({ message: "No authentication token" });
// 	}

// 	oAuth2Client.setCredentials(JSON.parse(process.env.GOOGLE_AUTH_TOKEN));

// 	const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

// 	try {
// 		const response = await calendar.events.list({
// 			calendarId: "primary",
// 			timeMin: new Date().toISOString(),
// 			maxResults: 10,
// 			singleEvents: true,
// 			orderBy: "startTime",
// 		});
// 		const events = response.data.items;
// 		res.status(200).json(events);
// 	} catch (error) {
// 		res.status(500).json({ error: "Error retrieving events" });
// 	}
// }
