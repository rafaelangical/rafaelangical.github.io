import { Wrapper } from './styles';

interface IPost {
  title: string;
  data: string;
  description: string;
}

interface Props {
  data: IPost[];
}

const PostItem: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.map(item => {
        return (
          <Wrapper key={Math.random()}>
            <h4>{item.title}</h4>
            <span>{item.data}</span>
            <p>{item.description}</p>
          </Wrapper>
        )
      })}
    </>
  )
}

export default PostItem;