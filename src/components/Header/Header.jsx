import { useSelector } from "react-redux";
import "./header.css";

const Header = ({ setEdit }) => {
  const user = useSelector((state) => state.user);

  const handleEdit = () => {
    setEdit(true);
  };

  return (
    <>
      <header
        style={{
          backgroundColor: `${user.themeColor}`,
          backgroundImage: `linear-gradiant(180deg, ${user.themeColor} 2%, ${user.themeColor}, 65%, #181818 100%)`,
        }}
      >
        <div className="info-container">
          <div className="info-edit" onClick={handleEdit}>
            Edit
          </div>
          <img src={user.avaUrl} alt="" className="info-ava" />
          <div className="info-username">{user.name}</div>
          <div className="info-age">{user.age}</div>
          <div className="info-about">{user.about}</div>
        </div>
      </header>
    </>
  );
};

export default Header;
