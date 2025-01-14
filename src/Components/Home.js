import React, { useState, useRef } from 'react';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../Components/Home.css'
import Navbar from './Navbar'; // Adjust the path based on your file structure
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import motion from framer-motion


function Home() {
    const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const testimonials = [
    {
      name: "John",
      testimonial:
        "Royal Aqua has truly changed the way I consume water. The taste is incredible, and I love how clean and crisp it feels! Highly recommend to anyone looking for top-tier water.",
    },
    {
      name: "Sarah L",
      testimonial:
        "I’ve been using Royal Aqua water for months, and I can’t imagine going back. The water is refreshing, and I love that I’m supporting a company committed to quality.",
    },
    {
      name: "David K",
      testimonial:
        "After trying Royal Aqua, I noticed a significant improvement in the taste of my water. It's now the only brand I trust for my daily hydration needs.",
    },
    {
      name: "Anna",
      testimonial:
        "The best decision I made was switching to Royal Aqua. The taste is so much better, and I feel more hydrated and healthier. I highly recommend it to everyone.",
    },
    {
      name: "Mark",
      testimonial:
        "Royal Aqua has provided me with consistent, clean, and safe drinking water. It's made a real difference in my daily routine. I can't imagine going back to anything else.",
    },
  ];


  return (
    <>

      {/* Navbar Section */}
      <Navbar
        onScrollToSection={scrollToSection}
        refs={{ homeRef, aboutRef, productsRef, blogRef, contactRef }}
      />

<motion.section
        ref={homeRef}
        className="home-section text-center"
        style={{
          backgroundImage: 'url(/shopping.jpg)', // Replace with your image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          height: '100vh',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} // Fade-in animation
      >
  {/* Semi-transparent overlay for opacity */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)', // Adjust opacity here
      zIndex: 1,
    }}
  />
  
  {/* Content of the section */}
  <Container
    className="text-light d-flex justify-content-center align-items-center"
    style={{
      position: 'relative',
      zIndex: 2,
      minHeight: '100vh', // Ensures content stays centered
      textAlign: 'center',
    }}
  >
    <div>
      <h1 className="display-4">Welcome to <span className="span-home">Royal Aqua</span></h1>
      <p className="lead">Providing clean and safe water through advanced reverse osmosis technology.</p>
    </div>
  </Container>
  </motion.section>

{/* Products Section */}
<motion.section
        ref={productsRef}
        className="py-5 bg-light"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
  <Container>
    <h2 className="text-center">Our Products</h2>
    <Row className="mt-4">
      {[
        {
          id: 1,
          size: '10 Litres',
          price: 'Ksh 100',
          description: 'Perfect for families and events.',
          imageUrl: '/10litre.png',
        },
        {
          id: 2,
          size: '1.5 Litres',
          price: 'Ksh 300 per carton',
          description: 'Carton contains 12 bottles. Ideal for daily hydration.',
          imageUrl: '/1.5litre.png',
        },
        {
          id: 3,
          size: '0.5 Litres',
          price: 'Ksh 300 per carton',
          description: 'Carton contains 24 bottles. Great for on-the-go use.',
          imageUrl: '/0.5litre.png',
        },
        {
          id: 4,
          size: '20 Litres - Soft Container',
          price: 'Ksh 450',
          description: 'Convenient and affordable for office or home use.',
          imageUrl: '/5litre.png',
        },
        {
          id: 5,
          size: '20 Litres - Hard Container',
          price: 'Ksh 1500',
          description: 'Durable and reusable for long-term use.',
          imageUrl: '/20litre.png',
        },
        {
          id: 6,
          size: '1 Litre',
          price: 'Ksh 300 per carton',
          description: 'Carton contains 12 bottles. A handy option for daily use.',
          imageUrl: '/1litre.png',
        },
        {
          id: 7,
          size: '5 Litres',
          price: 'Ksh 330 per carton',
          description: 'Carton contains 4 bottles. Perfect for small gatherings.',
          imageUrl: '/5litre.png',
        },
        {
          id: 8,
          size: 'Refills Available',
          price: 'Affordable Prices',
          description: 'We offer refills for small to big containers. Visit us today!',
          imageUrl: '/refill.png',
        },
      ].map((product, index) => (
        <Col key={index} md={4} className="mb-4 slide-in-left"> {/* 4 cards per row on medium screens */}
          <Card className="product-card h-100"> {/* Ensuring uniform card heights */}
            {/* Image container */}
            <div className="image-container">
              <Card.Img
                variant="top"
                src={product.imageUrl}
                alt={product.size}
                className="product-image"
              />
            </div>

            <Card.Body className="d-flex flex-column justify-content-between text-center">
              <Card.Title className="text-dark fw-bold">{product.size}</Card.Title>
              <h5 className="text-success fw-bold mt-2">{product.price}</h5> {/* Price styled in a different color */}
              <Card.Text className="text-muted">{product.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</motion.section>



       {/* About Section */}
       <motion.section
       ref={aboutRef}
        className="py-5 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
  <Container>
    <Row className="align-items-center">
      {/* Image on top on small screens and left on medium or larger screens */}
      <Col md={6} className="text-center text-md-left mb-4 mb-md-0">
        <img
          src="/water.jpg"  // Replace with your image path
          alt="About Us"
          className="img-fluid rounded"  // img-fluid makes the image responsive
        />
      </Col>

      {/* Text Section */}
      <Col md={6} className="text-center text-md-left">
        <h2>About Us</h2>
        <p>
          Located in Malindi, Kenya, we specialize in purifying water using reverse osmosis
          technology to ensure you get the best quality drinking water.
        </p>
      </Col>
    </Row>
  </Container>
</motion.section>

<motion.section
        className="py-5 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
  <Container>
    <h2 className='text-center'>What Sets Our Water Apart</h2>
    <p className="mb-4 text-center">
      At Royal Aqua, we are committed to providing you with the purest and safest drinking water.
      What sets our water apart from others is our advanced filtration process, which ensures every drop is free from impurities.
      We use the latest in reverse osmosis technology, combined with multiple stages of filtration, to guarantee that our water not only meets but exceeds health and safety standards.
    </p>

    <Row>
      {/* Image for Reverse Osmosis Process */}
      <Col md={6} className="mb-4">
        <img
          src="RO.jpg" // Replace with your image path
          alt="Reverse Osmosis Process"
          className="img-fluid rounded"
        />
      </Col>

      {/* Reverse Osmosis Benefits Section */}
      <Col md={6}>
        <h3>Benefits of Using Reverse Osmosis</h3>
        <ul className="text-left" style={{listStyle: 'none'}}>
          <li><i className="fas fa-check-circle mr-2" style={{color: '#233871'}}></i><strong> Removes Contaminants:</strong> Reverse osmosis effectively removes harmful contaminants such as chlorine, bacteria, heavy metals, and other impurities, ensuring that only clean and safe water reaches your glass.</li>
          <li><i className="fas fa-tint mr-2" style={{color: '#233871'}}></i><strong> Improved Taste and Odor:</strong> The filtration process enhances the taste and odor of water by removing undesirable chemicals, resulting in crisp and fresh-tasting water.</li>
          <li><i className="fas fa-heart mr-2" style={{color: '#233871'}}></i><strong> Protects Your Health:</strong> By eliminating harmful substances, reverse osmosis protects your body from potential toxins, contributing to overall health and wellness.</li>
          <li><i className="fas fa-leaf mr-2" style={{color: '#233871'}}></i><strong> Environmental Responsibility:</strong> While we use plastic bottles to package our water, we are committed to sustainability. We encourage customers to recycle our bottles and reduce plastic waste wherever possible.</li>
          <li><i className="fas fa-cogs mr-2" style={{color: '#233871'}}></i><strong> Low Maintenance:</strong> Once set up, a reverse osmosis system requires minimal maintenance while delivering reliable, high-quality water on demand.</li>
        </ul>
      </Col>
    </Row>

    <p className="mt-4">
      We pride ourselves on offering water that not only meets rigorous quality standards but also provides you with the confidence that you are drinking the purest water available.
    </p>
  </Container>
</motion.section>

  <motion.section
        className="testimonials fade-in py-5 bg-light" 
        style={{position: 'relative'}}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container className='w-100'>
          <h2 className="text-center mb-4">What Our Customers Say</h2>

          {/* Testimonials Carousel */}
          <Carousel
            interval={5000}
            controls={false}
            indicators={false}
            activeIndex={index}
            onSelect={handleSelect}
            pause="hover"
          >
            {testimonials.map((testimonial, idx) => (
              <Carousel.Item key={idx}>
                <Row className="justify-content-center">
                  <Col md={6}>
                    <Card className="shadow-lg rounded mb-5">
                      <Card.Body>
                        <Row>
                          <Col md={9}>
                            <Card.Title className="h4" style={{color: '#233871'}}>{testimonial.name}</Card.Title>
                            <Card.Text>{testimonial.testimonial}</Card.Text>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>

          {/* Prev and Next Buttons */}
          <div className="carousel-nav mt-4">
            <Button variant="link" className="carousel-prev" onClick={() => setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)}>
              <FaArrowLeft size={30} />
            </Button>
            <Button variant="link" className="carousel-next" onClick={() => setIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}>
              <FaArrowRight size={30} />
            </Button>
          </div>
        </Container>
      </motion.section>

      <motion.section
  className="delivery-section py-5"
  style={{ position: "relative" }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <Container>
    <h2 className="text-center mb-4">How We Deliver</h2>

    {/* Image Section */}
    <div className="text-center mb-4">
      <img
        src="delivery.png" // Replace with actual image path
        alt="Delivery"
        style={{
          maxWidth: "100%",
          height: "auto",
          display: "block",
          margin: "0 auto",
        }}
      />
    </div>

    {/* Delivery Text Layout */}
    <Row className="align-items-center">
      {/* Left Text Section */}
      <Col xs={12} md={6} className="text-center text-md-end mb-4 mb-md-0">
        <div className="delivery-info">
          <p>
            We offer a reliable delivery system tailored to your needs. Whether
            you need a large amount of water or a small refill, we have the
            perfect delivery method for you.
          </p>
        </div>
      </Col>

      {/* Right Text Section */}
      <Col xs={12} md={6} className="text-center text-md-start">
        <div className="delivery-info">
          <p>
            Our fleet includes spacious lorries for bulk deliveries and agile
            tuk-tuks for fast, local deliveries. No matter where you are, we
            ensure your water reaches you safely and on time.
          </p>
        </div>
      </Col>
    </Row>
  </Container>
</motion.section>


    
    <motion.section
        ref={blogRef} 
        className="blog-section py-5" 
        style={{position: 'relative'}}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
    <div className="container">
      <h2 className="text-center mb-4">Blog</h2>
      <Row>
        {/* Blog Post 1 */}
        <Col md={4}>
          <Card className="shadow-lg mb-2">
            <div className="blog-image-container">
              <Card.Img variant="top" src="/beach.jpg" className="blog-image" />
            </div>
            <Card.Body>
              <Card.Title style={{color: '#233871'}}>Why Royal Aqua Is Your Trusted Water Provider in Malindi</Card.Title>
              <Card.Text>
                At Royal Aqua, we are committed to providing you with the purest and safest drinking water...
              </Card.Text>
              <Link to="/blog/pure-water-malindi">
                <Button className="w-100" style={{backgroundColor: '#233871'}}>Read More</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
  
        {/* Blog Post 2 */}
        <Col md={4}>
          <Card className="shadow-lg mb-2">
            <div className="blog-image-container">
              <Card.Img variant="top" src="/reverse.jpg" className="blog-image" />
            </div>
            <Card.Body>
              <Card.Title style={{color: '#233871'}}>Reverse Osmosis: The Key to Clean and Safe Drinking Water</Card.Title>
              <Card.Text>
                Reverse osmosis is one of the most effective methods for purifying water, and it’s how we ensure Royal Aqua...
              </Card.Text>
              <Link to="/blog/reverse-osmosis">
                <Button className="w-100" style={{backgroundColor: '#233871'}}>Read More</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
  
        {/* Blog Post 3 */}
        <Col md={4}>
          <Card className="shadow-lg">
            <div className="blog-image-container">
              <Card.Img variant="top" src="/environ.jpg" className="blog-image" />
            </div>
            <Card.Body>
              <Card.Title style={{color: '#233871'}}>Environmental Responsibility with Royal Aqua</Card.Title>
              <Card.Text>
                At Royal Aqua, we are committed to sustainability. We use plastic bottles but encourage recycling to reduce waste...
              </Card.Text>
              <Link to="/blog/environmental-responsibility">
                <Button className="w-100" style={{backgroundColor: '#233871'}}>Read More</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  </motion.section>
  


     {/* Contact Section */}
<motion.section
         ref={contactRef} 
         className="py-5 text-center bg-light" 
        style={{position: 'relative'}}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
  <Container>
  <h2>Contact Us</h2>
  <Row className="mt-2">
  
    {/* Social Media */}
    <Col
      md={6}
      className="mb-4 d-flex flex-column align-items-center justify-content-center"
    >
       <div className="contact-info mt-2">
        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
          <i className="fas fa-user" style={{ color: '#233871', marginRight: '8px' }}></i>
          Name: Cynthia Magongwe
        </p>
        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
          <i className="fas fa-phone" style={{ color: '#25D366', marginRight: '8px' }}></i>
          Phone no.: 0796118880
        </p>
        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
          <i className="fas fa-envelope" style={{ color: '#ff9800', marginRight: '8px' }}></i>
          Email: cynthia.triza@yahoo.com
        </p>
      </div>

      <h4 className="mb-3" style={{ color: '#233871' }}>Follow Us</h4>
      <p className="text-muted">Connect with us on social media</p>
      <div className="d-flex justify-content-center align-items-center gap-4">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/15aUxXWmzF/?mibextid=wwXlfr"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          style={{ color: '#4267B2', fontSize: '2rem' }}
        >
          <i className="fab fa-facebook-f"></i>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/254796118880"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          style={{ color: '#25D366', fontSize: '2rem' }}
        >
          <i className="fab fa-whatsapp"></i>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/marisa_malisha?igsh=ZmoxcG96azUzaXA%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          style={{
            background: 'linear-gradient(45deg, #fd5949, #d6249f, #285AEB)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontSize: '2rem',
          }}
        >
          <i className="fab fa-instagram"></i>
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@cynthiati17?_t=ZN-8t2BAnjPQNq&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          style={{ color: '#000000', fontSize: '2rem' }}
        >
          <i className="fab fa-tiktok"></i>
        </a>
      </div>
     
    </Col>

      {/* Location with Map */}
        <Col md={6} className="mb-4">
      <h4 className="mb-3" style={{ color: '#233871' }}>Our Location</h4>
      <div className="map-container" style={{ borderRadius: '10px', overflow: 'hidden' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1005.4203855651417!2d40.123933734962634!3d-3.227305208986012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1815858c3247b11d%3A0xf36eb07da27fc1c3!2sRoyal%20Aqua%20Depot!5e1!3m2!1sen!2ske!4v1736596316460!5m2!1sen!2ske" 
          width="100%"
          height="300"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          title="Royal Aqua Depot Location Map"
        ></iframe>
      </div>
    </Col>
  </Row>
</Container>

</motion.section>


    </>
  );
}


export default Home;