import Link from 'next/link';
import Button from '../components/button/button';
import Layout from '../components/layout/layout';
import PostItem from '../components/postItem/postItem';
import WorkItem from '../components/workItem/workItem';
import { Img, Row, RowPosts, RowSubTitle, RowWorks, SubTitle, Title } from './styles/home';

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

const Home: React.FC = () => {
  return (
    <Layout title="Home">
      <Row>
        <Title>Hi, I am Rafael,<br /> Fullstack developer.</Title>
        <Img src="/profile.jpg" alt="me" width="100%" height="100%" />
      </Row>
      <RowSubTitle>
        <SubTitle>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </SubTitle>
        <Button title="Download resume" onClick={() => alert("Download resume")} />
      </RowSubTitle>
      <RowPosts>
        <h4>Recent posts</h4>
        <PostItem data={data.slice(0, 2)} />
      </RowPosts>
      <RowWorks>
        <h4>Featured works</h4>
        <WorkItem data={data} />
        <Link href="/works">
          <a>Show more</a>
        </Link>
      </RowWorks>
    </Layout>
  )
};

export default Home;

