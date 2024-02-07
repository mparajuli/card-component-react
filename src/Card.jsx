import profile from "./assets/profile.png";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profile} alt="profile picture"></img>
      <h2 className="card-title">Mausam Parajuli</h2>
      <p className="card-text">I am a software engineer, and I enjoy coding.</p>
    </div>
  );
}

export default Card;
