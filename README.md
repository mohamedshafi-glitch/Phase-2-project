# PetPal

PetPal is a simple React Single Page Application (SPA) that helps users find and add pets available for adoption.  
It was built as part of the Phase 2 React Project to demonstrate components, routing, state management, and API interaction.

---

## Features

- View a list of adoptable pets  
- Add a new pet using a controlled form  
- Real-time updates after adding a pet  
- Navigate between pages using React Router  
- Simple, clean, and responsive design  

---

## Components

- App.js – Main component with routes and state  
- NavBar.js – Navigation bar for routing  
- PetList.js – Displays pets from the backend  
- PetCard.js – Shows each pet’s information  
- AddPetForm.js – Controlled form for adding pets  
- About.js – Information about the project  

---

## Routes

| Route | Description |
|--------|--------------|
| `/` | Home page |
| `/pets` | All pets |
| `/add-pet` | Add a new pet |
| `/about` | About page |

---

## Tech Stack

- React (Vite)  
- React Router DOM  
- JSON Server (backend API)  
- CSS for styling  

---

## Setup Instructions

### Backend
Create a file called `db.json`:
```json
{
  "pets": [
    {
      "id": 1,
      "name": "Bella",
      "type": "Dog",
      "age": 2,
      "image": "https://placedog.net/400/300"
    }
  ]
}
