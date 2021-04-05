import { TextAreaStyled } from './styles';

interface Props {
  onChange(e): void;
  name: string;
  value: string | number;
}

const TextArea: React.FC<Props> = ({ value, name, onChange }) => (
  <TextAreaStyled value={value} name={name} onChange={onChange} />
);

export default TextArea;