import React, { useEffect } from 'react';
import Card from '../components/card.tsx'

function MyComponent() {
  useEffect(() => {
    function handleResize() {
      // Update the state or perform any other actions when the
      // browser is resized
    }

    // Attach the event listener to the window object
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Render the component

  return <div><Card/></div>;
}
export default MyComponent