# Student Dashboard

A React dashboard for a college that shows student details, subjects, attendance, and placement eligibility — styled like an official academic ID card / ledger.

## Run it

```bash
npm install
npm start
```

Then open http://localhost:3000

## Where each task lives

- **Task 1 — Components**: `App`, `Header`, `StudentCard`, `SubjectList`, `Footer` are all separate components under `src/` and `src/components/`.
- **Task 2 — Header**: `src/components/Header.js` shows the college name and "Student Dashboard".
- **Task 3 — StudentCard**: `src/components/StudentCard.js` receives every value (name, register no, department, year, CGPA, attendance, photo) via **props**, passed down from `App.js`.
- **Task 4 — Subject List**: `subjects` array lives in `App.js` and is rendered as an `<ul>` in `src/components/SubjectList.js`.
- **Task 5 — JSX Expressions**: `App.js` displays `Current Semester`, `Current Year`, and `Total Subjects` using `{ }` expressions in the "Academic Record" panel.
- **Task 6 — Conditional Rendering**: `StudentCard.js` computes `isAttendanceEligible` (attendance ≥ 75) and `isPlacementEligible` (CGPA ≥ 8) and conditionally renders the status text.
- **Task 7 — Inline Styling**: `StudentCard.js` applies inline `style` objects — Name (blue), CGPA (green), Attendance (orange).
- **Task 8 — External CSS**: Each component has its own CSS file (`Header.css`, `StudentCard.css`, `SubjectList.css`, `Footer.css`), plus `App.css` and `index.css` for global/design-token styling.

## Swapping the photo or data

The student photo lives at `src/assets/student-photo.jpg`. The demo data (name, register no, CGPA, etc.) is set in the `student` object inside `App.js` — edit it there to use different values.
