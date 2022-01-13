import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Nandini Gupta's</span>
        <span className="headerTitleLg">Under The Acacia</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/4577589/pexels-photo-4577589.jpeg?cs=srgb&dl=pexels-rachel-claire-4577589.jpg&fm=jpg"
        alt=""
      />
    </div>
  );
}
