import { LandingPage, Navbar } from "../components";
import styles from "./page.module.css";

import { getData } from "../lib/client";

export default async function Home() {
  const data = await getData()
  const bannerData = data.banner;
  console.log(data.products)
  return (
    <main className={styles.main}>
      <div className="homepage">
      {/* <Navbar /> */}
      </div>
      <LandingPage bannerData={bannerData[0]} />
    </main>
  );
}
