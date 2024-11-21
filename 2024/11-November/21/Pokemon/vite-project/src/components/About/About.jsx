import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Pokedex</h1>

      <div className={styles.content}>
        <p className={styles.description}>
          Welcome to our interactive Pokedex! This web application allows you to
          explore the fascinating world of Pokemon. You can browse through
          different Pokemon, view their details, and even create your own custom
          Pokemon.
        </p>

        <div className={styles.features}>
          <h2>Features:</h2>
          <ul>
            <li>Browse Pokemon with infinite scroll</li>
            <li>View detailed Pokemon information</li>
            <li>Add custom Pokemon to your collection</li>
            <li>Mark Pokemon as favorites</li>
            <li>Filter to show only favorite Pokemon</li>
          </ul>
        </div>

        <p className={styles.footer}>Built with React and PokeAPI</p>
      </div>
    </div>
  );
}

export default About;
