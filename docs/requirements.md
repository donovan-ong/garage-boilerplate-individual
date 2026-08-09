# Login Restyling & Team Page Requirements

Project: Task 2 — Mock Sprint- Group 3
Prepared by: Raghdah Al-Gahdari – (BA)
Date: 09/08/2026

## 1. Purpose

This document covers two things for this sprint: what information should appear on the Team Page, and what parts of the Login page are allowed to change during the restyling task. It also lists a few edge cases the team should plan for before development starts.

**Note:** The character limits in this document (120 and 200 characters) are only suggested values and have not been confirmed yet. They should be reviewed and agreed on with UX and the PM before development starts, as UX can confirm what fits best in the card layout.


## 2. Team Page Fields

The team page needs two fields for the team as a whole, plus four fields for each team member:

| Field | Required | Rule |
|---|---|---|
| Team name | Yes | Shown once at the top of the page, above the list of team members. Cannot be left blank. |
| Project name | Yes | Shown near the team name, identifying which project the team is working on. Cannot be left blank. |
| Name | Yes | Shown as a heading below the photo. The name is required, so the user cannot save the page if the name field is empty. |
| Photo | No | If no photo is uploaded, show a default placeholder with the person's initials. |
| Role | Yes | The person's role on the team, e.g. "Developer" or "Business Analyst". Displayed under name in smaller, muted text. |
| Blurb | No | A short bio or description. If it is too long (over 120 characters), show only part of it with "…" in the card. The full bio can be viewed by hovering over or expanding the card. |

## 3. Login Page Scope

This task is only about changing how the login page looks. The existing login functionality should not be changed.

In scope:
- Colours, spacing, fonts, and page layout for different screen sizes.
- The appearance of buttons and input fields, including hover, disabled, and error states.

Out of scope:
- Changing how the system checks the username and password.
- Changing session length, logout behaviour, or any other authentication logic.

## 4. Edge Cases

1. No photo uploaded. Show the person's initials instead of leaving the photo blank.
2. Blurb is too long (over 200 characters). Do not allow the user to enter more than 200 characters. Show a character counter while they are typing.
3. Blurb is over 120 characters. Shorten the blurb with "…" in the card view so the layout does not break.
4. Name is left blank. The Save button should be disabled and show a message asking the user to enter a name.
5. Two team members have the same name . This is allowed for the MVP. The system does not need to check for unique names.
6. Login page on a small screen (less than 380px wide). Stack the input fields vertically and make sure there is no horizontal scrolling.
7. Team name or project name is left blank. The page should not save until both are filled in.

## 5. Handoff – What happens next?

For UX/Design:
- Design the updated Login page, including colours, fonts, spacing, buttons, input fields, error states, and responsive layout.
- Design the Team Page based on the requirements in Section 2, including the photo placeholder and how long blurbs are displayed.
- Provide the final designs for the development team to use.

For Development:
- Implement the approved Login page design.
- Keep the existing login functionality and authentication logic unchanged.
- Implement the Team Page based on the requirements in Section 2.
- Make sure the pages work correctly on different screen sizes and handle the edge cases in Section 4.

Important constraint: The Login Restyling task is only about the visual design of the login page. Developers should not change the existing login or authentication logic, as stated in this document.
