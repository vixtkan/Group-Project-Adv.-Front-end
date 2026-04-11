import TripPlanner from "@/components/TripPlanner";
import Footer from "@/components/footer";
import styles from "@/styles/TripPlanner.module.css";


export default function TripsPage() {
  return (
    <>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.kicker}>LonelyPlanet journeys</p>
            <h1 className={styles.heroTitle}>Trips worth dreaming about</h1>
            <p className={styles.heroText}>
              Discover inspiration for your next destination, save travel ideas,
              and start planning the kind of journey that fits your interests,
              pace, and style.
            </p>
            <a href="#planner" className={styles.heroButton}>
              Start planning
            </a>
          </div>
        </section>

        <section className={styles.stats}>
          <div className={styles.statsItem}>
            <span>Explore</span>
            <strong>Dream destinations</strong>
            <p>Keep a personal list of the places you want to experience next.</p>
          </div>

          <div className={styles.statsItem}>
            <span>Plan</span>
            <strong>Build your own journey</strong>
            <p>Organize travel ideas before choosing where your next trip goes.</p>
          </div>

          <div className={styles.statsItem}>
            <span>Travel</span>
            <strong>Make it personal</strong>
            <p>Shape trips around culture, food, scenery, and unforgettable moments.</p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.editorial}>
            <h2>Travel inspiration starts with the places that stay on your mind.</h2>

            <div className={styles.editorialText}>
              <p>
                Some journeys begin with a city, others with a feeling. A coastline,
                a mountain road, a food market, or a dream you have kept for years.
              </p>
              <p>
                Use this page to collect destinations you want to visit and turn
                those ideas into a simple travel plan. Start small, save what
                inspires you, and build from there.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.imageBand}>
          <img
            src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1600&q=80"
            alt="Travel landscape"
          />
          <p className={styles.imageCaption}>
            Save places that inspire you and begin shaping your next journey.
          </p>
        </section>
      </main>

      
    </>
  );
}