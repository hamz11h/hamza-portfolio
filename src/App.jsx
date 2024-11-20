import Button from "./components/Button/Button";
import Carousel from "./components/Carousel/Carousel";
import Container from "./components/Container/Container";
import Description from "./components/Description/Description";
import Flex from "./components/Flex/Flex";
import Header from "./components/Header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  const items = [
    { image: "../../../public/images/demo-carousel.png", alt: "Cool Cat" },
    { image: "../../../public/images/project-1.png", alt: "Phone Display" },
  ];
  return (
    <>
      <Navbar />
      <Container className="flex flexYcenter">
        <div style={{ width: "40%" }}>
          <Flex
            direction={"vertical"}
            compact={true}
            block
            wrap={false}
            align="start"
          >
            <Header title="Project N°1" />
            <Description description="Lorem ipsum dolor sit amet consectetur. Nibh pulvinar magna nec fermentum ipsum libero nibh interdum varius. Sagittis vitae nibh velit purus sem etiam. Morbi convallis vulputate quisque morbi. Morbi purus mi sagittis interdum dignissim tempus." />
            <Button />
          </Flex>
        </div>

        <Carousel items={items} />
      </Container>
    </>
  );
}

export default App;
