import "./header.css";

const Header = ({ setEdit }) => {
  const handleEdit = () => {
    setEdit(true);
  };

  return (
    <>
      <header
        style={{
          backgroundColor: "#ff9051",
          backgroundImage:
            "linear-gradiant(180deg, #ff9051 2%, #ff9051, 65%, #181818 100%)",
        }}
      >
        <div className="info-container">
          <div className="info-edit" onClick={handleEdit}>
            Edit
          </div>
          <img
            src="https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a"
            alt=""
            className="info-ava"
          />
          <div className="info-username">Nguyen Vi</div>
          <div className="info-age">28</div>
          <div className="info-about">I'm a front end developer</div>
        </div>
      </header>
    </>
  );
};

export default Header;
