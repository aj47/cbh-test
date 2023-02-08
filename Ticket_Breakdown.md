# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here


1. Database: Add custom id to agents table
	- Ticket description: Facilities want to be able to add their own custom ids for each agent. A new field "customId" should be added to the agents table to allow for each agent to have their own custom id. The field can be initialized as an empty string.
	- Acceptance criteria: Agents table has a new field "customId". This field is of type string.
	- Effort estimate: 1

2. Backend: Add function editAgentCustomId
	- Ticket description: Facilities want to be able to add their own custom ids for each agent. The "updateMyAgents" endpoint should be extended to allow the new property "customId" for each agent.
	- Acceptance criteria: "updateMyAgents" endpoint which already takes in an array of Agent objects will be extended to allow for the new property "customId" which is of type string. Any interface definitions of the agent object will be extended to include the new string "customId". When the "updateMyAgents" is called all relevant agents with the same internal id will have their fields updated to match incoming data including the new "customId" field.
	- Effort estimate: 2

3. FrontEnd: Add ability to edit custom id on facility platform
	- Ticket description: Facilities want to be able to add their own custom ids for each agent. The agent view page should be extended to alow edits to the the new custom id field
	- Acceptance criteria: Authenticated facilities should have the ability to edit the new "customId" field in the front end portal, this can be done by going to the "My Agents" page of the dashboard and inputting a new string on a new column labeled "ID" of each agent row. This column should be the first column in the row. Upon clicking  the save button, all changed data will be updated as previous by calling the "updateMyAgents" endpoint along with the new property on each user object "customId"
  - Effort estimate: 3

