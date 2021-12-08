/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Typography } from '@mui/material';
import { getPosts } from '../actions/posts';
import useStyles from '../styles/home';

import Hero from '../components/Hero/Hero';
import Loading from '../components/Loading/Loading';
import Feedback from '../components/Feedback/Feedback';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Post from '../components/Posts/Post/Post';

function Home() {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.posts);

  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts(1));
    return () => {};
  }, [dispatch]);

  if (isLoading) return <Loading message="Ładowanie wiadomości" mt={48} />;
  if (!posts.length && !isLoading) return <Feedback message="--- Brak wiadomości ---" />;

  return (
    <Container maxWidth="false" className={classes.pageHome}>
      <Hero bgImage="home" title="PRALMA" subtitle="Producent przemysłowych urządzeń pralniczych i autoryzowany dystrybutor Primus'a" />
      <Container fixed className={classes.pageHomeMain} component="main">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eius repudiandae repellendus beatae quasi explicabo blanditiis accusantium adipisci, numquam soluta quos recusandae modi obcaecati! Veritatis non illo iste quos temporibus. Animi, vel laboriosam. Adipisci dignissimos est consectetur inventore aliquid, deleniti hic nisi repellendus rem sequi voluptates aliquam voluptatem explicabo, velit asperiores, minus iure et tempore harum ex provident veniam consequuntur! Minus consequuntur sequi laborum, consequatur nulla fuga nam tempora iusto hic aut, deleniti recusandae error adipisci suscipit dolor provident ea enim corrupti incidunt asperiores sit consectetur libero! Soluta, vero inventore. Saepe eum quidem sunt similique? Nesciunt minima adipisci sint vero, cumque rerum, esse impedit quae placeat molestias fuga alias in obcaecati consectetur? Modi earum suscipit porro ipsa. Maxime, saepe libero? Minus accusamus ut sit fugiat, necessitatibus sequi! Odio nobis, fugit, fuga error dignissimos doloribus consequuntur consequatur quae praesentium tempora repudiandae placeat, suscipit porro. Fuga veritatis voluptatum temporibus adipisci eius sed! Inventore nemo quae quam. Voluptates, perferendis sequi quas adipisci reprehenderit itaque cum nobis obcaecati, reiciendis quo quia officia cumque corrupti similique saepe mollitia dolorem? Officiis, voluptatum! Sed pariatur reiciendis fugiat! Corrupti, nobis esse, molestiae possimus ipsum pariatur optio consequuntur temporibus ducimus deserunt aliquid voluptate quibusdam veniam. Facilis, placeat consequuntur! Eveniet perferendis laboriosam explicabo rerum minima aperiam aut mollitia sint facilis? Ipsum deleniti at voluptatibus adipisci eaque esse dolor modi, dicta delectus quae! Aliquam aliquid commodi placeat eius quisquam perspiciatis ad, sint est eos iusto cumque veritatis ipsam non explicabo aperiam. Sint quod saepe ipsam, repellendus corrupti consequuntur maxime sunt mollitia, tempore corporis sed quasi enim, dolor voluptatum odio aliquid quia numquam dolore? Nulla atque tempora amet provident aliquam voluptatibus magnam? Explicabo nihil quae molestias est rerum iste incidunt accusamus voluptate debitis, perspiciatis dicta dignissimos praesentium molestiae iusto deleniti officia soluta amet alias error tempore! Dolore sapiente aliquid deleniti deserunt rem!
      </Container>
      {/** Latest posts */}
      <Grid className={classes.pageHomeLatestPosts} container component="section">
        <SectionTitle title="Najnowsze wiadomości" />
        {posts.slice(0, 4).map((post) => {
          return (
            <Grid className={classes.pageHomeLatestPostsPost} item key={post._id} xs={12} sm={6} md={6} lg={3}>
              <Post post={post} />
            </Grid>
          );
        })}
      </Grid>
      {/** END Latest posts */}
    </Container>
  );
}

export default Home;
