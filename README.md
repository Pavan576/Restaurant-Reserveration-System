<<<<<<< HEAD
# Reservation System

This is a simple Reservation System built using React.js. It allows users to enter their name and reserve a slot. The application supports light and dark themes and has a visually appealing background video.

## Features
- 📅 User can book a reservation by entering their name.
- 🎨 Supports Light and Dark mode.
- 🎥 Background video for better UI experience.
- 🗑️ Option to delete a reservation.
- 📱 Fully responsive design.

## Project Structure
```
📂 reservation-system
├── 📁 src
│   ├── 📂 components
│   │   ├── ReservationSystem.jsx
│   ├── 📂 assets
│   │   ├── reswall.mp4
│   ├── App.jsx
│   ├── App.css
│   ├── styles.css
├── package.json
├── README.md
```

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/Pavan576/reservation-system.git
   ```
2. Navigate into the project folder:
   ```sh
   cd reservation-system
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
5. Open `http://localhost:3000` in your browser.

## Usage
- Enter your name in the input field and click the "Book" button to make a reservation.
- Click the "Clear" button to reset the input.
- The reservation list is displayed in a table format.
- Click the "Delete" button to remove a reservation from the list.
- Toggle between Light and Dark mode using the theme switch button.

## Technologies Used
- React.js ⚛️
- CSS3 🎨
- JavaScript (ES6) 🚀

## Assets Used
- `reswall.mp4` (Video background)
- `styles.css` (Custom styling)

## Screenshots
![Reservation System Screenshot](https://via.placeholder.com/600x300)

## Author
[Pavan576](https://github.com/Pavan576)

## License
This project is licensed under the MIT License.

=======
## React

This is a simple React application. This application serves as a basic template for a react applications.  
This project is bootstrapped with [Vite](https://vitejs.dev/guide/).

## How to run

1. Before running the application, make sure all dependencies are installed. To install dependencies, run following command in terminal:
   ```sh
   npm install
   ```

2. Once dependencies are installed, run the following command to start the application:
   ```sh
   npm run dev
   ```

3. Refresh the URL in simple browser to see the output. As shown below 
   ![](https://static.onecompiler.com/images/posts/3zzkbysj7/studio-react-vite-reload.png)


## FAQs & Debugging

 ### 1. I do not see browser in my workspace
 Studio will automatically open the app in a new browser tab. If not, you can use the following steps to open the simple browser 

1. From VS Code command pallette(`Ctrl/Cmd + Shift + P`), run **Studio Manager: SimpleBrowser Default URL** command. This will open the app in a new browser tab.

2. Your app runs on hosted env which can be accessed using host id, port provided in file **.vsocde/.studio/studio-env.json**. Use values to create the URL as follows:
   `https://<STUDIO_HOST_ID>-3000.ocws.app`

 ### 2. Getting `vite: not found` error
 This means node_modules are missing in your workspace, please refer the 'How to run' section and make sure you have followed the steps in sequence

 ### 3. Can I use create-react-app instead Vite?
 Yes, you can use create-react-app instead Vite, the default workspace is loaded with Vite setup, you can remove the Vite dependencies, add create-react-app dependencies and update the scripts to start using create-react-app.
>>>>>>> 0e52a3b (Initial commit)
