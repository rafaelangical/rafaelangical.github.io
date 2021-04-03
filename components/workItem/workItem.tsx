import React from 'react';
import { WorkDescription, WorkImage, Wrapper } from './styles';
interface IWork {
  title: string;
  description: string;
  data: string;
  image: string;
}

interface Props {
  data: IWork[]
}

const WorkItem: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.map(item => {
        return (
          <Wrapper key={Math.random() * 11}>
            <WorkImage src={item.image} width="200px" height="150px" />
            <WorkDescription>
              <h4>{item.title}</h4>
              <span>{item.data}</span>
              <p>{item.description}</p>
            </WorkDescription>
          </Wrapper>
        )
      })}
    </>
  )
}

export default WorkItem;