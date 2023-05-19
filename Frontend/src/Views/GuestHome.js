import "../App.css";
import "./CSS/Ghome.css";
import Reviews from "../components/reviewSection";
import Contact from "../components/Contact";
import TripSection from "../components/TripSection";

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
          <form action="/trips" method="get"><div id="Searchbar"><i class="bi bi-question-circle"></i><input type='text' name="query" placeholder="Where you want to go?"/><button>Search Location</button></div></form>

        </div>
      </section>
      <TripSection/>
      <section id="services">
      
        <div className="side">
          <h4>HOW WE WORK</h4>
          <h2>WE OFFER BEST SERVICES</h2></div>
          <div className="services">
            <div className="service">
              <div className="icon"><span class="bi bi-geo-alt"></span></div>
              <div id='service-content'>
                <h3>Personalized Recommendations</h3>
                <p>We provide personalized recommendations for activities, restaurants, 
                  and accommodations based on a your preferences and budget.</p>
              </div>
            </div>
            <div className="service">
              <div className="icon"><span class="bi bi-geo-alt"></span></div>
              <div id='service-content'>
                <h3>Customize Trips</h3>
                <p>You can book your entire vacation, including restaurants
                  , hotels, and activities, all in one place</p>
              </div>
            </div>
            <div className="service">
              <div className="icon"><span><img src="/Assets/pre-mage.svg"></img></span></div>
              <div id='service-content'>
                <h3>Pre-made trip</h3>
                <p>You can also choose pre-made trips planned by 
                  experienced planners to enjoy the journey with your family.</p>
              </div>
            </div>
            <div className="service">
              <div className="icon"><span class="bi bi-chat-right-text"></span></div>
              <div id='service-content'>
                <h3>Chat and negotiation</h3>
                <p>Trip planners can communicate with the customers about their pre-planned trips to increase their marketing 
                  it provides them the platform to showcase their trips to large amount of customers.</p>
                  
              </div>
              
            </div>
            <button>Join us as Trip Planner</button>
          </div>
          <hr />
      </section>
      <Reviews />
      <Contact />
    </div>
  );
}
export default Ghome;
