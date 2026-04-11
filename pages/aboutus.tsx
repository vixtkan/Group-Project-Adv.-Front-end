// "use client";

import { useState } from "react";

import Footer from "@/components/footer";
import styles from "@/styles/ContactPage.module.css";


export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.kicker}>About us / Contact</p>
            <h1 className={styles.heroTitle}>Travel inspiration starts with people</h1>
            <p className={styles.heroText}>
              LonelyPlanet is a student tourism project focused on helping users
              discover destinations, cultures, and recommendations before choosing
              their next trip.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.editorial}>
            <h2>Built to help travelers explore before they go.</h2>

            <div className={styles.editorialText}>
              <p>
                Our project is designed to make travel planning easier by letting
                users explore countries, discover cultural highlights, and save ideas
                for future trips.
              </p>
              <p>
                We wanted the experience to feel inspiring, simple, and useful —
                something that helps people imagine their next destination before
                making a decision.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.twoColumn}>
            <div>
              <p className={styles.label}>Team</p>
              <h2 className={styles.subheading}>Group 7</h2>
              <ul className={styles.teamList}>
                <li>
                  <strong>Viktoriia Tsurkan</strong> — Styles, API / Fetch
                </li>
                <li>
                  <strong>Shuang Liu</strong> — Front-end, state management, component logic
                </li>
              </ul>
            </div>

            <div>
              <p className={styles.label}>Project</p>
              <h2 className={styles.subheading}>CPAN144</h2>
              <p className={styles.infoText}>
                This phase focuses on setting up the foundation of the website,
                building core pages, styling the layout, and creating interactive
                features like routing and state-based components.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.formSection}>
          <div className={styles.formIntro}>
            <p className={styles.label}>Contact us</p>
            <h2 className={styles.subheading}>Send us a message</h2>
            <p className={styles.infoText}>
              Have feedback or suggestions for our tourism website? Send us a message below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            {submitted && (
              <p className={styles.success}>
                Thank you! Your message has been submitted.
              </p>
            )}

            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />

            <input
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />

            <textarea
              rows="6"
              placeholder="Your message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            ></textarea>

            <button type="submit">Send message</button>
          </form>
        </section>
      </main>

      
    </>
  );
}