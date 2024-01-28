import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import imgAlexa from "./images/alexa.png";
import imgCartana from "./images/cortana.png";
import imgSiri from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <h1 className="title">Personal Digital Assistants</h1>
        </div>
      </section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                img={imgAlexa}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                img={imgCartana}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                img={imgSiri}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
