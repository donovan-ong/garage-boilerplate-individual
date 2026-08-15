# Bug Log

Mock sprint QA pass — bugs found, fixes applied, and re-test results.

## Bugs Found & Status

| # | Bug | Description | Status |
|---|-----|-------------|--------|
| 1 | Login redirect failure | Attempting to log in fails to redirect the user to the dashboard upon successful authentication. | Fixed — confirmed successful redirect to dashboard upon login. |
| 2 | Profile card width and missing shadow | Profile cards on the Our Team page stretch across the full width of the screen instead of maintaining a constrained width, and they are missing their drop shadow. | Fixed — profile card width is now constrained and drop shadows display properly. |
| 3 | Image border overlapping text area | On the Our Team page, the profile photo container border overlaps with the text container border. | Justified — due to the images currently on GitHub; acceptable for this mock sprint given time constraints. |
| 4 | Navigation bar styling mismatch | The sidebar font sizes, icons, and layout spacing do not match the design. | Out of scope — restyling the navigation bar is not planned for this sprint. |

## Other Tested Items

- [x] Direct team-page access without login (must redirect)
- [x] Missing-photo and long-blurb edge cases
