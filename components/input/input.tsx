import { InputStyled } from './styles';

interface Props {
  onChange(e): void;
  type: string;
  name: string;
  pattern?: string;
  value: string | number;
}

const Input: React.FC<Props> = ({ onChange, type, name, pattern }) => (
  <InputStyled type={type} name={name} pattern={pattern} onChange={onChange} />
)

export default Input;