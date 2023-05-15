import "../App.css";
import "./CSS/Ghome.css";
import TripCard from '../components/TripCard';

function Ghome() {
  return (
    <div>
      <section id="hero">
        <div id="hero-content">
          <h1>
            Explore,
            <br />
            Discover,
            <br />
            Repeat.
          </h1>
          <h4>YOUR PERSONALIZED TRAVEL COMPANION.</h4>
          <div id="Searchbar"><i class="bi bi-question-circle"></i><input type='text' placeholder="Where you want to go?"/><button>Search Location</button></div>

        </div>
      </section>
      <section id="trips">
      <div className="center">
        <h4>TOP TRIPS AROUND PAKISTAN</h4>
        <h2>Explore Top Destination</h2>
      </div>
      <div className="card-grid">
          <TripCard
          image1="https://mir-s3-cdn-cf.behance.net/project_modules/1400/35ee6f84992701.5d6e870eac299.jpg"
          image2="https://mir-s3-cdn-cf.behance.net/project_modules/1400/9549e184992701.5d735663624f5.jpg"
          image3="https://mir-s3-cdn-cf.behance.net/project_modules/1400/fd9ac684992701.5d6e870eac734.jpg"
          plannerName="Clut Trips"
          From="Islamabad"
          To="Amazin"
          num_days="2 days"
          num_ppl= "40"
          total_ppl="50"
          rating={4.5}
          price="5000"
          />
          <TripCard
          image1="https://mir-s3-cdn-cf.behance.net/project_modules/1400/1d76f4167506323.642a8efcdabd0.jpg"
          image2="https://mir-s3-cdn-cf.behance.net/project_modules/1400/28b7c3167506323.642a8efcdd2f2.jpg"
          image3="https://mir-s3-cdn-cf.behance.net/project_modules/fs/d1755a167506323.642a8efcd9088.jpg"
          plannerName="NorthX"
          From="Islamabad"
          To="Kashmir"
          num_days="2 days"
          num_ppl= "40"
          total_ppl="50"
          rating={4.5}
          price="5000"
          />
          <TripCard
          image1="https://mir-s3-cdn-cf.behance.net/project_modules/1400/472a3191211895.5e2b7eee6d0de.jpg"
          image2="https://mir-s3-cdn-cf.behance.net/project_modules/1400/046c5391211895.5e2b7eee6ddb6.jpg"
          image3="https://mir-s3-cdn-cf.behance.net/project_modules/1400/aba85091211895.5e2b7eee6f166.jpg"
          plannerName="plannerName"
          From="Islamabad"
          To="Islamabad"
          num_days="2 days"
          num_ppl= "40"
          total_ppl="50"
          rating={4.5}
          price="5000"
          />
          <TripCard
          image1="https://mir-s3-cdn-cf.behance.net/project_modules/1400/ff1bf2162893975.63dcd79ac1781.jpg"
          image2="https://mir-s3-cdn-cf.behance.net/project_modules/1400/4db3bf162893975.63dcd79ab9234.jpg"
          image3="https://mir-s3-cdn-cf.behance.net/project_modules/1400/8b21a1162893975.63dcd79abb10c.jpg"
          plannerName="plannerName"
          From="Islamabad"
          To="Muree"
          num_days="2 days"
          num_ppl= "40"
          total_ppl="50"
          rating={4.5}
          price="5000"
          />
          </div>
      </section>
      <section id="services"></section>
      <section id="reviews"></section>
      <section id="contact"></section>
    </div>
  );
}
export default Ghome;