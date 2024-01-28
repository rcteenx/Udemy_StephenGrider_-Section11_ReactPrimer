function ProfileCard({ title, handle, img, description }) {
  // console.log(title, handle);
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={img} alt="pda logo" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <h3 className="title is-4">{title}</h3>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
