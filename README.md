# 🎉 Events App

This web application was developed as a team project for a course at Business College Helsinki. The goal was to gain experience in both teamwork and full-stack web development by combining Laravel (backend) and React (frontend) into a single app while collaborating as a team.

The Event App is about finding and managing local events in Finland. The website allows you to add, edit, delete and view events, with all changes saved to database. It includes many features like a "Read more" section, dark mode toggle, weather forecast and map for event locations, input validation, emojis that indicate event type, calendar view and multiple ways to search for events.

___

## 👥 Team Members & Their Roles
* Habiba – Frontend, Backend
* Beniitta – Frontend, Backend
* Vitalis – Frontend
* Shihab – Frontend


___

## ⚙️ Setup Instructions
1. Clone the repository
2. Backend Setup (Laravel) In terminal:
    * composer install
    * cp .env.example .env
    * php artisan key:generate
    * php artisan serve
Create your database
    * php artisan migrate
    * php artisan config:clear
    * php artisan serve

1. React Setup
    * npm install
    * npm run dev
2. Additional Packages (React)
    * npm install axios
    * npm install react-spinners
    * npm install react-toggle-dark-mode
    * npm install react-scroll-to-top
    * npm install @fullcalendar/react @fullcalendar/daygrid 
    * npm install @fullcalendar/timegrid @fullcalendar/interaction 

## ✅ Notes:
* Make sure your Laravel cors.php file includes your React app’s URL.
* Make sure your React .env file has the correct backend URL.

_____

## Improvements for the Future:
* Improve mobile responsiveness, dark mode and overall CSS styling
* Add backend for the newsletter
* Add user authentication
* Clean up code and organize file structure
* Finalize and polish code (cleaning, Lighthouse fixes, etc.)
* Add image compression and different image sizes
* Find better ways to work with branches and version control
* Find better ways to connect Laravel and React

_____

## What we learned: 

“I learned how to work as a team by dividing tasks and managing everything through GitHub so everyone could stay updated and contribute. I want to improve my skills in  management all the task in a timely manner and React related tools to work more efficiently on the frontend and backend” - Shihab 


“ I found working with multiple branches while collaborating with others a bit tricky at first. There were quite a few merging issues and I ended up doing a fair amount of copy-pasting just to make everything work. At one point, I accidentally pushed the .env file to GitHub, which caused more trouble. Deleting it from version history was harder than I expected, and it made merging with others even more difficult afterward.

Even though it was challenging, I learned a lot from the experience. In the future, I definitely want to explore better ways to work with Git, branches and team collaboration. It taught me how important communication and good version control practices really are” - Beniitta


“I contributed to both the frontend and backend development of this project. On the frontend, I used React to build reusable components such as the landing page, event form, and calendar view. I focused on ensuring mobile responsiveness, implementing CSS styling, and integrating APIs including weather and map services.
On the backend, I worked on input validation for both forms and APIs, implemented unique IDs, managed database migrations, and handled data storage and retrieval.

Throughout this project, I gained valuable experience in team collaboration, version control with Git, and keeping the codebase up to date. I faced and overcame challenges such as connecting the frontend with the backend and resolving merge conflicts on GitHub—with support from my teammate Beniitta and by seeking solutions online. These experiences significantly contributed to my growth as a developer.” - Sonia

____

## Tech Stack:
* React, CSS, Laravel, MySQL, OpenWeather API

## Links:
- [Live figma link](https://www.figma.com/proto/qPCo1mK3aG9hwXWdOm6ABm/Finnish-Event-Planner?node-id=1-2&p=f&t=Cf3bQNAagTilugmn-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2)
