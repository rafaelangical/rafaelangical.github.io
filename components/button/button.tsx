import { Btn } from './styles';

interface Props {
  onClick(e): void;
  title: string;
}

const Button: React.FC<Props> = ({ onClick, title }) => {
  return (
    <Btn onClick={onClick}>{title}</Btn>
  )
}

export default Button;