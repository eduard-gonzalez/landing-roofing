export const SITE_CONFIG = {
  name: "LuxTorontoRoof",
  description: "Luxury Roofing in Toronto",
  url: "https://luxtorontoroof.com",
  contact: {
    phone: "(503) 7233-1104",
    email: "info@luxtorontoroof.com",
    address: "Toronto, Lorem Ipsum Street",
    schedule: "Mon - Fri: 8:00 AM - 6:00 PM",
  },
  socials: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    twitter: "https://www.twitter.com/",
  },
  form: {
    title: "Contact Us",
    description:
      "We are here to answer your questions and discuss your next project.",
    labels: {
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
    },
    errors: {
      name: "Name is required",
      email: {
        required: "Email is required",
        invalid: "Invalid email address",
      },
      phone: {
        required: "Phone is required",
        invalid: "Invalid phone number, must have 10 digits",
      },
      message: {
        required: "Message is required",
        minLength: "Message must be at least 10 characters long",
      },
    },
    buttons: {
      submit: "Send Message",
      sending: "Sending...",
    },
    status: {
      success: "Message sent successfully. We will contact you soon.",
      error:
        "There was an error sending the message. Please try again.",
    },
  },
  services: {
    title: "Our Premium Services",
    description:
      "We offer exclusive roofing solutions for luxury residences, combining premium materials with expert craftsmanship.",
    items: [
      {
        id: 1,
        title: "Tile Roofing",
        description:
          "Installation and repair of premium imported tiles with lifetime warranty. Classic and modern designs for every home style.",
        features: [
          "Imported tiles",
          "Lifetime warranty",
          "Customized designs",
        ],
      },
      {
        id: 2,
        title: "Metal Roofing",
        description:
          "High-durability metal roofing systems. Modern solutions that combine aesthetics and superior strength.",
        features: [
          "High durability",
          "Low maintenance",
          "Energy efficiency",
        ],
      },
      {
        id: 3,
        title: "Eco-Friendly Roofing",
        description:
          "Green roofs and sustainable systems that improve energy efficiency and contribute to the environment.",
        features: ["Sustainable", "Energy savings", "LEED certification"],
      },
    ],
    cta: "More Details",
  },
  about: {
    title: "Expertise and Excellence in Roofing",
    subtitle: "Over 20 years transforming homes",
    description:
      "We are dedicated to providing exceptional roofing solutions that combine expert craftsmanship, premium materials, and innovative technology. Each project is an opportunity to demonstrate our commitment to excellence and customer satisfaction.",
    stats: [
      { number: 500, suffix: "+", label: "Projects Completed" },
      { number: 20, suffix: "+", label: "Years of Experience" },
      { number: 100, suffix: "%", label: "Satisfied Customers" },
      { number: 50, suffix: "+", label: "Expert Professionals" },
    ],
    image: "/images/about.jpg",
  },
} as const;

export const PROJECTS_CONFIG = {
  title: "Featured Projects",
  description:
    "Discover our most exclusive projects, where excellence in roofing meets architectural design.",
  cta: "View More Projects",
  items: [
    {
      id: 1,
      title: "Pine Tree Drive Mansion",
      description:
        "Complete roof renovation with imported slate tiles and custom drainage system.",
      imagePath: "/images/img1.jpg",
      category: "Luxury Residential",
      details: {
        location: "Miami Beach, FL",
        area: "850 m²",
        duration: "3 months",
      },
    },
    {
      id: 2,
      title: "Beverly Hills Villa",
      description:
        "Custom copper roofing with geometric design and rainwater harvesting system.",
      imagePath: "/images/img2.jpg",
      category: "Luxury Residential",
      details: {
        location: "Beverly Hills, CA",
        area: "650 m²",
        duration: "2 months",
      },
    },
    {
      id: 3,
      title: "The Wave Building",
      description:
        "Structural glass roofing with integrated solar panels and LED lighting system.",
      imagePath: "/images/img3.jpg",
      category: "Commercial",
      details: {
        location: "Miami, FL",
        area: "2000 m²",
        duration: "6 months",
      },
    },
    {
      id: 4,
      title: "Mountain House",
      description:
        "Laminated wood roofing with acoustic insulation and underfloor heating system.",
      imagePath: "/images/img1.jpg",
      category: "Mountain Residential",
      details: {
        location: "Aspen, CO",
        area: "400 m²",
        duration: "4 months",
      },
    },
    {
      id: 5,
      title: "Ocean View Hotel",
      description:
        "Anodized aluminum roofing with photovoltaic panels and greywater harvesting system.",
      imagePath: "/images/img2.jpg",
      category: "Hospitality",
      details: {
        location: "Key West, FL",
        area: "5000 m²",
        duration: "8 months",
      },
    },
    {
      id: 6,
      title: "Beach Residence",
      description:
        "Bamboo thatch roofing with bamboo panels and passive cooling system.",
      imagePath: "/images/img3.jpg",
      category: "Beach Residential",
      details: {
        location: "Tulum, QR",
        area: "300 m²",
        duration: "3 months",
      },
    },
  ],
} as const;

export const HERO_CONFIG = {
  title: {
    first: 'Transforming Roofs into',
    highlighted: 'Masterpieces'
  },
  subtitle: 'Luxury roofing experts with over 20 years of experience in exclusive residences',
  cta: {
    primary: 'Request a Quote',
    secondary: 'View Projects'
  }
} as const;