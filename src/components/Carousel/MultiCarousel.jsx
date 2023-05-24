import { Card, Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";
// import { Card, Grid } from "@material-ui/core";

const MultiCarousel = () => {
  var data = [
    {
      name: "Pizza Begin",
      link: "pizza-begin.co.il",
    },
    {
      name: "Mia Luz",
      link: "mia-luz.com",
    },
    {
      name: "Nuda Swim",
      link: "nudaswim.com",
    },
    {
      name: "Nuda Swim",
      link: "nudaswim.com",
    },
    {
      name: "Nuda Swim",
      link: "nudaswim.com",
    },
    {
      name: "Nuda Swim",
      link: "nudaswim.com",
    },
    {
      name: "Nuda Swim",
      link: "nudaswim.com",
    },
    {
      name: "Nuda Swim",
      link: "nudaswim.com",
    },
  ];

  const sliderItems = data.length > 3 ? 3 : data.length;
  const items = [];

  for (let i = 0; i < data.length; i += sliderItems) {
    if (i % sliderItems === 0) {
      items.push(
        <Card raised className="Banner" key={i.toString()}>
          <Grid
            container
            spacing={0}
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            }}
            className="BannerGrid"
          >
            {data.slice(i, i + sliderItems).map((da, index) => {
              return (
                <Grid
                  item
                  key={index.toString()}
                  style={{ border: "2px solid yellow" }}
                >
                  <img
                    height="200px"
                    src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg"
                    alt=""
                  />
                </Grid>
              );
            })}
          </Grid>
        </Card>
      );
    }
  }
  return (
    <Carousel animation="slide" autoPlay={false} cycleNavigation timeout={300}>
      {items}
    </Carousel>
  );
};

export default MultiCarousel;
