
# React Project with Vite and Debouncing Hook

This project is a React application scaffolded with Vite, a fast and opinionated development tool that aims to provide a seamless experience for building React applications.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/react-vite-debouncing.git
   cd react-vite-debouncing

   ## Install Dependencies:
    npm install

   ## Run the Development Server:
    npm run dev

   ## Project Structure
       .
      ├── public/                  # Public assets and HTML template
      ├── src/                     # React source code
      │   ├── components/          # React components
      │   ├── utils/               # Utility functions, hooks, and constants
      │   ├── App.jsx              # Main application component
      │   ├── index.jsx            # Entry point for React application
      │   ├── assets/              # Images and other assets
      │   ├── hooks/               # Custom global hooks 
      ├── .gitignore               # Git ignore file
      ├── package.json             # Node.js dependencies and scripts
      ├── vite.config.js           # Vite configuration file
      ├── README.md                # Project documentation


# Custom Debouncing Hook

### In this project, we have implemented a custom debouncing hook named useDebounce to efficiently handle search input changes. The hook can be found in the src/utils/helpers.js file.

<pre>
import React, { useState } from 'react';
import { useDebounce } from '../utils/helpers';

const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState('');

  // Using the custom useDebounce hook
  const debouncedSearchValue = useDebounce(searchValue, 300);

  // Rest of your component logic...
};

export default SearchComponent;
</pre>

## Additional Information

    Vite Documentation - https://vitejs.dev/
    React Documentation - https://react.dev

## Sample Snapshots

![image](https://github.com/akashbhadouria/react-debounce/assets/25353461/677e1c07-7660-42be-8f3b-36793355f6b1)

![image](https://github.com/akashbhadouria/react-debounce/assets/25353461/fdc74422-272f-41a0-becf-ad5e2f576b3e)


Pagination View
![image](https://github.com/akashbhadouria/react-debounce/assets/25353461/c4bf1b14-9f25-4eee-afbe-a41a8af76af4)




