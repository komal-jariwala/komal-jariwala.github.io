import "./styles/SectionHeading.css";

type Props = {
  index: string;
  title: string;
  subtitle?: string;
};

const SectionHeading = ({ index, title, subtitle }: Props) => (
  <header className="section-heading">
    <span className="section-heading__index">{index}</span>
    <div>
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  </header>
);

export default SectionHeading;
