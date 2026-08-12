# Login Restyling & Team Page Requirements

Project: Task 2 — Mock Sprint- Group 3
Prepared by: Raghdah Al-Gahdari – (BA)
Date: 09/08/2026

## 1. Purpose

This document covers two things for this sprint: what information should appear on the Team Page, and what parts of the Login page are allowed to change during the restyling task. It also lists a few edge cases the team should plan for before development starts.

## 2. Team Page Fields

The team page needs two fields for the team as a whole, plus four fields for each team member:

| Field | Required | Rule |
|---|---|---|
| Team name | Yes | Shown once at the top of the page, above the list of team members. Cannot be left blank. |
| Member Name | Yes | The name is required and must be displayed clearly for every team member.  |
| Member Photo |Yes | Display the member's photo (see Edge Cases §4 for missing photo / placeholder / alt text handling).|
| Member Role | Yes | The person's role on the team, e.g. "Developer" or "Business Analyst". Displayed under name in smaller, muted text. |
| Short Blurb |Yes | Display a short description of the team member

## 3. Login Page Scope

The Login Page changes are styling-only. The existing login functionality and authentication behaviour must remain unchanged.

## In Scope

The following visual aspects of the Login Page may be changed:

- Page layout
- Spacing
- Typography and fonts
- Colours
- Button styling
- Input field styling

## Out of Scope

The following existing functionality must not be changed:

- Authentication logic
- Login validation
- Firebase authentication
- Session behaviour
- Existing sign-in flow

No changes should be made to the existing authentication or session logic.

## 4. Edge Cases

The design and implementation should account for the following cases:

1. Missing photo If a team member does not have a photo, a default placeholder image should be shown. If the photo or placeholder does not load, the alt text should provide a description of the image.
2. Long member name: Long member names should wrap correctly and must not break or extend outside the member section or card.
3. Long role name: Long role names should remain readable and stay within the member section or card without causing the layout to break.
4. Long blurb: Long blurb text should wrap correctly and must not overflow outside its container.
5. Different content lengths: Team member sections or cards should remain visually consistent even when members have different amounts of text.


## 5. Requirements Summary

The feature should provide a visually restyled Login Page while keeping the existing authentication and session behaviour unchanged.

After the login experience, users should be able to view a Team Page containing:

- Team name
- Member photo or placeholder
- Member name
- Member role
- Short member blurb

The UX design and implementation should follow the field, display, and edge-case requirements defined in this document.


## 6. Handoff – What happens next?

For UX/Design:
- Design the updated Login Page, including colours, typography, spacing, buttons, input fields, error states, and responsive layout.
- Design the Team Page based on the requirements defined in Section 2.
- Include a default photo placeholder for team members who do not have a photo.
- Ensure the Team Page design can accommodate long names, roles, and blurbs without breaking the layout.
- Ensure team member sections remain visually consistent when content lengths differ.
- Provide the final approved designs for the Development team to use.

For Development:

- Implement the approved Login Page design.
- Keep the existing authentication logic, login validation, Firebase authentication, session behaviour, and sign-in flow unchanged.
- Implement the Team Page based on the requirements defined in Section 2.
- Implement the photo placeholder for team members without a photo.
- Ensure long member names, role names, and blurbs wrap correctly without overflowing their containers.
- Ensure the pages remain usable and visually consistent across different screen sizes.
- Test the implementation against the edge cases defined in Section 4.

Important constraint: The Login Restyling task is only about the visual design of the login page. Developers should not change the existing login or authentication logic, as stated in this document.
