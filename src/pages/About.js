import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography, useTheme } from "@mui/material";


const About = () => {
  const theme = useTheme();

  return (
    <Layout>
      <Box
        sx={{
          position: "relative",
          my: 10,
          textAlign: "center",
          p: 2,
          display: "flex", // Set display to flex
          justifyContent: "center", // Center align content horizontally
          alignItems: "center", // Center align content vertically
          flexDirection: "column", // Stack elements vertically
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
            opacity: 0.9,
            color: "darkcyan",
            mb: 3,
          },
          "& p": {
            textAlign: "justify",
            fontSize: "1rem",
            fontFamily: "'Marianda', cursive",
            lineHeight: "1.5",
            maxWidth: "1000px", // Limit the text width
            margin: "20px 0", // Add margin to the text
          },
          "@media (max-width:1000px)": {
            mt: theme.spacing(5), // Apply margin top for screens <= 600px
            "& h4": {
              fontSize: "1.5rem",
            },
          },
          mb: 3,
        }}
      >
       
        <Typography variant="h3">Welcome To My Restaurant</Typography>
        <p>
          Welcome to our Restaurant, where culinary excellence meets unparalleled hospitality. Nestled in the heart of Rajkot, our restaurant is more than a dining destination; it's a celebration of flavors, a testament to craftsmanship, and a haven for those who appreciate the finer things in life.

          At our Restaurant, we believe that every dish tells a story. Our chefs, driven by passion and creativity, meticulously craft each menu item to offer a gastronomic journey that transcends expectations. From the freshest locally sourced ingredients to the artful presentation of every plate, we strive to create an experience that captivates the senses.

          Our commitment to providing an exceptional dining experience extends beyond the kitchen. Step inside and immerse yourself in an inviting ambiance that seamlessly blends modern sophistication with warmth. Whether you're seeking an intimate dinner, a lively celebration with friends, or a casual gathering, our carefully designed space caters to diverse occasions.

          At the heart of our philosophy is the belief in impeccable service. Our dedicated and friendly staff is here to ensure your comfort and satisfaction, guiding you through a memorable culinary adventure. We take pride in being a gathering place for families, friends, and food enthusiasts alike.

          Beyond our restaurant walls, we extend our commitment to excellence to every event we cater. 
        </p>
        <br />
        <p>
          Our Restaurant is not just a place to dine; it's a venue for creating cherished memories. Discover our versatile event spaces designed to host private celebrations, weddings, corporate gatherings, and more.

          Embrace the convenience of modern dining with our online reservation system and delivery services. Whether you're planning a special evening or enjoying a gourmet meal at home, our Restaurant brings our signature dishes directly to you.

          Join our culinary community by following us on social media and staying connected. Be the first to know about seasonal menus, exclusive events, and special offers. Your journey into the world of our Restaurant begins here, and we can't wait to share our passion for food and hospitality with you.

          Experience the extraordinary at Our Restaurant — where every meal is a story, and every visit is a celebration.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
