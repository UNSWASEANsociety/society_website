/**
 * Page for when user clicks into a specific event/article/blog
 */
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useParams } from "react-router-dom";
import { Block } from "../../components/Block";
import { Card } from "../../components/Card";

const cards = [1, 2, 3];

const Article = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Block style={{ backgroundColor: "white" }}>
        <Typography component="h6" align="center" gutterBottom>
          15/5/2021
        </Typography>
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Article
        </Typography>

        <img
          src="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="random"
          width="100%"
        />
        <Typography variant="h5" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          in risus id tortor euismod elementum. Mauris vitae sollicitudin dolor.
          Phasellus ac magna ultricies, viverra justo nec, cursus elit. Sed ac
          egestas odio. Maecenas ullamcorper elit in orci porttitor, fringilla
          cursus nibh pulvinar. Quisque gravida facilisis iaculis. Sed dictum at
          turpis at luctus. Aenean in mi lorem. Proin ultricies felis quis
          consectetur finibus. Aenean nec consequat risus, pulvinar commodo
          justo. Sed at magna vehicula, aliquet justo at, vestibulum libero.
          Vivamus ultrices in est id interdum. Nulla feugiat elit nec massa
          commodo varius. Pellentesque ultricies velit mauris, in blandit arcu
          elementum id. Aenean lobortis mauris quis velit convallis, ut finibus
          nisi auctor. Morbi pulvinar est non lacus molestie lobortis. Duis
          tincidunt laoreet dui, facilisis vulputate libero interdum tristique.
          Curabitur gravida neque aliquet, auctor elit sed, semper quam. Duis
          ultricies nunc vel egestas gravida. Integer imperdiet nisl nec nisl
          bibendum tincidunt. Suspendisse at dignissim neque. Aenean lobortis
          erat purus, in tincidunt magna viverra aliquet. Etiam varius libero
          ipsum, ut aliquet mi vehicula eget. Proin tempus placerat aliquam. Nam
          semper sodales sapien in commodo. Aliquam luctus sapien laoreet
          vulputate molestie. Pellentesque lacus tortor, consectetur gravida
          dolor non, mattis ullamcorper mauris. Maecenas tortor nibh, rutrum a
          dictum id, porta id augue. Fusce suscipit sapien vitae consectetur
          vestibulum. Fusce luctus justo ligula, nec consectetur sapien posuere
          vitae. Donec nec magna mi. Curabitur et pulvinar felis, vitae lacinia
          felis. Vivamus ac nibh sed risus pulvinar scelerisque sit amet a
          risus. Curabitur sit amet mi eu massa iaculis pulvinar. Pellentesque
          ultrices purus metus, vel consectetur massa blandit et. Morbi sagittis
          dictum nisi, in commodo metus egestas quis. Ut lectus velit,
          sollicitudin ultrices quam nec, fermentum vehicula purus. Quisque
          rutrum, mauris a faucibus lobortis, velit ante fringilla lacus, in
          porta neque eros non ex. Vivamus vitae lobortis ex, id iaculis purus.
          Suspendisse id magna vel ex maximus scelerisque in vel metus. Nullam
          pellentesque nulla sit amet ipsum facilisis consequat. Nulla non nisi
          vehicula, gravida leo sit amet, interdum arcu. Vivamus mi purus,
          ornare eget convallis a, rutrum et neque. Mauris cursus magna at
          molestie commodo. Proin nec turpis leo. Nam vitae est ac neque laoreet
          iaculis. Duis tristique, risus vitae tristique cursus, dolor eros
          molestie massa, in suscipit metus mauris vestibulum mauris. Nulla sed
          laoreet diam. Nam elementum magna est, in varius magna commodo eu.
          Quisque vel libero eu odio pharetra bibendum et ut dui. Ut
          sollicitudin, nulla eget ultricies feugiat, nibh orci aliquam lectus,
          a luctus ligula nisl at ipsum. Maecenas consequat mollis velit, a
          ultricies magna ultricies eu. Etiam accumsan, magna ac tempor egestas,
          sem neque dapibus orci, consequat fermentum nisl libero eu nisl.
          Quisque nibh eros, lobortis ut est vitae, iaculis molestie nisi. Nulla
          sed nulla finibus, posuere quam eu, tincidunt velit. Etiam eget mauris
          nisl. In vel turpis massa. Nunc maximus tortor purus, sit amet posuere
          nunc mattis feugiat.
        </Typography>
      </Block>

      <Block>
        <Typography component="h3" variant="h3" align="center" gutterBottom>
          Checkout other articles
        </Typography>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Card image="https://source.unsplash.com/random">
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </Card>
            ))}
          </Grid>
        </Container>
      </Block>
    </>
  );
};

export default Article;
