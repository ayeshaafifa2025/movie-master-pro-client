1. Website Name: FilmFusion Pro


2. Live  Link: https://kaleidoscopic-dango-5a8c6f.netlify.app/
3. showcase: <img width="1917" height="861" alt="movie" src="https://github.com/user-attachments/assets/dc9173d9-2681-4439-a2d2-b03de420d585" />


4. About:Discover meaningful, family-friendly, and inspiring films from around the world. FilmFusion Pro helps you explore movies with clean details, safe content insights, and your own personalized collection — all in one place.

5. Implemented Features:

Dynamic Movie Carousel (Hero Section) – Featured movies dynamically fetched from the database and displayed using a responsive Swiper slider.

Top Rated Movies Section – Shows the top 5 highest-rated movies with posters, title, genre, and rating.

Latest Movies – Displays the 6 latest movies added to the system.

Static Genre Section – Lists all movie genre dynamically 

ADDED Genre and rating range based filter  buy MongoDB operation

User Authentication – Email/password login and registration, including Google OAuth integration.

Protected Routes – MY COLLECTION , UPDATE MOVIE , CREATE MOVIE ,ADD TO WATCHLIST  accessible only to logged-in users.

CRUD Operations on Movies – Add, update, delete, and view movies with proper UI forms and validation.

My Collection Page – Shows only the movies added by the logged-in user with quick edit/delete options.

Responsive Design – Fully mobile, tablet, and desktop compatible layout.

Animations for Better UX – Eye-soothing fade/slide animations implemented using AOS.

Toast Notifications – Real-time feedback for all success/error actions during CRUD or login operations.

Consistent UI Design – Uniform card sizes, heading styles, spacing, and button designs across the website.

Theme Toggle – Light/Dark mode toggle for user-preferred viewing experience.

Error Handling & 404 Page – React error boundaries and user-friendly 404 page implemented.

## ⚙️ How to Run Locally

Follow these steps to set up and run the client-side project on your machine:
**Note:** This project also requires the server-side repository to be running for full functionality.

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/ayeshaafifa2025/movie-master-pro-client.git](https://github.com/ayeshaafifa2025/movie-master-pro-client.git)
    ```
2.  **Navigate to Project Directory:**
    ```bash
    cd movie-master-pro-client
    ```
3.  **Install Dependencies:**
    ```bash
    npm install
    ```
4.  **Set Up Environment Variables:**
    Create a file named `.env` in the root directory and add your Firebase configuration and server base URL:
    ```
    VITE_FIREBASE_API_KEY="Your_API_Key"
    VITE_SERVER_BASE_URL="http://localhost:5000"  # Example server URL (Replace 5000 with your actual backend port)
    ```
5.  **Start Development Server:**
    ```bash
    npm run dev
    ```
6.  The application will open in your browser (usually at `http://localhost:5173`).
