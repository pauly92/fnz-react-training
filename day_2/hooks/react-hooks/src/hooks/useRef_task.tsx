import { useRef } from "react";

export const ScrollToSection = () => {
    const sectionRef = useRef(null);
  
    const scrollToSection = () => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <div>
        <button onClick={scrollToSection}>Scroll to Section</button>
        <div style={{ height: '100vh' }}></div> {/* Spacer to create scrollable area */}
        <div ref={sectionRef} style={{ height: '100vh', backgroundColor: 'lightblue' }}>
          <h2>This is the section to scroll to</h2>
        </div>
      </div>
    );
  };