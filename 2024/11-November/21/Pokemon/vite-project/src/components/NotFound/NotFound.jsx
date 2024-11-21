import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <SentimentVeryDissatisfiedIcon className={styles.icon} />
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Oh no! Wild 404 appeared!</h2>
        <p className={styles.text}>
          The page you're looking for has fled into the tall grass.
        </p>
        <Button
          variant="contained"
          startIcon={<HomeIcon />}
          onClick={() => navigate("/")}
          sx={{
            backgroundColor: "#ff5350",
            "&:hover": {
              backgroundColor: "#ff3d3a",
            },
            marginTop: "20px",
          }}
        >
          Return Home
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
