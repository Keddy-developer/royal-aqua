import React from 'react';
import { Container, Row, Col, Image, Navbar } from 'react-bootstrap';
import { useParams } from 'react-router-dom'; // To access the dynamic slug and handle navigation
import { Helmet } from 'react-helmet';

const BlogPage = () => {
  // Get the slug from the URL params
  const { slug } = useParams();

  const blogContent = {
    "pure-water-malindi": {
      title: "The Power of Pure Water: Why Royal Aqua Is Your Trusted Water Provider in Malindi",
      date: "Jan 9, 2025",
      image: "/beach.jpg",
      content: `
        At Royal Aqua, we believe that access to clean, safe, and fresh drinking water is not just a necessity—it's a right. Water plays an essential role in supporting health, enhancing quality of life, and sustaining communities. Located in the heart of Malindi, Royal Aqua is proud to be the leading provider of purified water, offering solutions tailored to meet the needs of households, businesses, and institutions.
  
        Our water purification process goes beyond basic filtration. Leveraging advanced reverse osmosis technology, we ensure the elimination of harmful contaminants such as bacteria, viruses, heavy metals, and other impurities that compromise water quality. The result? Crystal-clear, odor-free water that exceeds national and international standards for purity and safety.
  
        Why choose Royal Aqua? Beyond our dedication to water purity, we pride ourselves on our deep connection to the Malindi community. By choosing Royal Aqua, you're investing in your health, supporting local businesses, and joining a movement that values clean water as the foundation of well-being.
      `,
    },
    "reverse-osmosis": {
      title: "Reverse Osmosis: The Key to Clean and Safe Drinking Water",
      date: "Jan 9, 2025",
      image: "/reverse.jpg",
      content: `
        Reverse osmosis has revolutionized the way we think about water purification. As a leading technology in the industry, it is recognized for its ability to deliver exceptionally clean and safe drinking water. But what makes reverse osmosis so effective, and why should it matter to you?
  
        The science behind reverse osmosis is fascinating. Using a semi-permeable membrane, water is forced through tiny pores that block contaminants while allowing water molecules to pass. This process effectively removes impurities such as chlorine, lead, arsenic, fluoride, nitrates, and microorganisms, leaving behind water that is not only safe but also incredibly refreshing.
  
        At Royal Aqua, we have invested in state-of-the-art reverse osmosis systems to ensure that every drop of water meets the highest standards of quality. Reverse osmosis water enhances the taste of food, beverages, and even supports healthier cooking.
      `,
    },
    "environmental-responsibility": {
      title: "Environmental Responsibility with Royal Aqua",
      date: "Jan 9, 2025",
      image: "/environ.jpg",
      content: `
        At Royal Aqua, sustainability is not just a buzzword—it's a core value that drives everything we do. As Malindi's trusted water provider, we are deeply aware of the environmental challenges facing our planet, particularly the growing issue of plastic waste.
  
        Through our recycling initiatives, we encourage customers to return used bottles for proper recycling. Additionally, we are exploring innovative packaging solutions such as biodegradable materials and refillable containers to reduce our environmental footprint. Supporting Royal Aqua means supporting a company that values sustainability.
      `,
    },
  };

  const post = blogContent[slug];

  // Check if the blog exists based on slug
  if (!post) {
    return <div>Blog post not found.</div>; // Error handling if slug doesn't match
  }

  return (
    <>
      {/* Navbar */}
      <Navbar bg="light" variant="light" expand="lg" className="py-3 sticky-top">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
        </Container>
      </Navbar>

      {/* Blog Content */}
      <Container className="py-5">
  <Helmet>
    <title>{post.title} | Royal Aqua Blog</title>
    <meta
      name="description"
      content={`Learn more about Royal Aqua's commitment to clean and safe water in Malindi. ${post.title}`}
    />
  </Helmet>
  <Row>
    <Col md={8}>
      <h1>{post.title}</h1>
      <p className="text-muted">By Royal Aqua | {post.date}</p>
      <Image
        src={post.image}
        fluid
        style={{ height: '300px', objectFit: 'cover', width: '100%' }}
      />
      <p className="mt-4">{post.content}</p>
    </Col>
    <Col md={4}>
      <h3>Related Posts</h3>
      <ul>
        {Object.keys(blogContent).map((key) => (
          <li key={key}>
            <a href={`/blog/${key}`}>{blogContent[key].title}</a>
          </li>
        ))}
      </ul>
    </Col>
  </Row>
</Container>
    </>
  );
};

export default BlogPage;
