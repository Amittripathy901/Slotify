# Slotify

**Multi-Industry Service Appointment Booking Platform for Bhubaneswar**

---

## Table of Contents

- Features
- Demo
- Tech Stack
- Getting Started
- Folder Structure
- Usage
- Data Model
- Customization
- Future Improvements
- License

---

### Features

- Seamless booking for Healthcare, Beauty & Lifestyle, Car Garage, Pet Care, and more
- Real service provider data for Bhubaneswar
- Glass-morphism, animated, modern UI
- Login and Register pages with fake session persistence
- Dashboard with search, category filtering, and quick booking
- My Profile: update profile picture, name, age (with live preview and local storage persistence)
- My Bookings: tabbed section for Booked / Cancelled / Completed appointments
- Rate your completed appointments; ratings affect provider scores app-wide
- Mobile-first, fully responsive interface
- No backend required (JS-only demo, uses localStorage)

---

### Demo

Try it live:  
[Slotify Online App](https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/9a7b9bc0c6feaa697e720c3916b162fc/dc7df5ea-04d4-4cff-8422-8f6ae9e17043/index.html)

---

### Tech Stack

- HTML5, CSS3, JavaScript (Vanilla)
- Responsive Layout: Flexbox, CSS Grid, Media Queries
- Local Storage for data persistence
- Advanced CSS for animations, transitions, theme

---

### Getting Started

1. Download or clone the repository and extract all files.
2. Open `index.html` directly in any modern web browser.
    - No servers or dependencies required.
3. Register a new account, or log in with saved credentials.
4. Use the app as an end-user would: book services, manage profile, and manage your appointments.

---

### Folder Structure

/
├── index.html # Main HTML (all app views)
├── style.css # All CSS (responsive, animated)
├── app.js # JS app logic, state, UI routing
├── README.md # This file
└── /assets # (optional) For profile default images, icons


---

### Usage

- **Book Appointments:** choose a service provider by browsing or searching; “Book Now” triggers a dummy but dynamic calendar
- **Manage Profile:** click "My Profile" at any time to edit user details and upload a new profile picture (stored in localStorage as base64 image)
- **Manage Bookings:** click "My Bookings" to see all appointments filtered as Booked, Cancelled, or Completed
- **Ratings:** for completed bookings, assign a star rating; provider ratings app-wide will immediately update and reflect your input

---

### Data Model

- **Users:** name, email, password, age, profilePic (base64)
- **Service Providers:** id, name, category, subcategory, location, contact, rating (auto-updated)
- **Bookings:** 
  - { id, providerId, service, provider, date, status (booked/cancelled/completed), rating (1-5 if completed) }

All persisted in `window.localStorage` for a “real app” feel with no backend.

---

### Customization

- Add new categories/subcategories by editing the service providers in `app.js`
- Change default city or expand database as needed
- To use with a backend, replace the data read/write points in `app.js`

---

### Future Improvements

- Real backend and authentication
- Email/SMS notifications
- Provider dashboard portal for real-time slot management
- Payment gateway integration
- Multi-city support

---

### License

MIT License.  
You may use, modify, and distribute with attribution.

---

Built with ❤️ for service discovery and booking in Bhubaneswar.


