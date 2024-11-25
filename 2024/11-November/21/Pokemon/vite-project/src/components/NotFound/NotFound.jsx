import { useNavigate } from "react-router-dom";
//  useNavigate: Provides navigation function to change pages (react-router-dom)
import styles from "./NotFound.module.css";

// displays message ,navigation back to home
function NotFound() {
  // Navigation
  const navigate = useNavigate();

  //back to home page
  const handleReturn = () => {
    navigate("/");
  };

  // Render Component
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <button onClick={handleReturn} className={styles.returnButton}>
        Return to Home
      </button>
    </div>
  );
}

export default NotFound;
