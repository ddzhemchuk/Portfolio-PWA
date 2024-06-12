import CustomIcon from "../UI/CustomIcon";

export default function TechCard({ title, icon, description, type }) {

  return (
    <li className={`technology ${type}`}>
      <div className="technology__icon">
        <CustomIcon icon={icon} />
      </div>
      <h3 className="technology__name">{title}</h3>
      <p className="technology__description">{description}</p>
    </li>
  );
}
