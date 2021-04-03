import Layout from '../components/layout/layout';
import WorkItem from '../components/workItem/workItem';
import { RowWorks, TitleWorks } from './styles/home';

const data = [
  {
    title: 'Description job',
    data: '2020',
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.",
    image: '/profile.jpg',
  },
  {
    title: 'Description job',
    data: '2020',
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.",
    image: '/profile.jpg',
  },
  {
    title: 'Description job',
    data: '2020',
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.",
    image: '/profile.jpg',
  },
];

const Works: React.FC = () => {
  return (
    <Layout title="Works">
      <RowWorks>
        <TitleWorks>Work</TitleWorks>
        <WorkItem data={data} />
      </RowWorks>
    </Layout>
  )
};

export default Works;
