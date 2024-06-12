import CustomIcon from "../UI/CustomIcon";

export default function ToolCard({ aria, icon }) {
  return (
    <li className="tool" aria-label={aria}>
      <CustomIcon icon={icon} />
    </li>
  );
}
