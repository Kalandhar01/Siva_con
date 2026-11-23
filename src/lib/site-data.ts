export const projects = [
  { title: "Kerala Heritage Veranda", category: "Architecture / Interior", image: "/sivra/arch-kerala-veranda.jpg" },
  { title: "Backwaters Houseboat", category: "Architecture", image: "/sivra/arch-kerala-backwaters.jpg" },
  { title: "Kerala Canal House", category: "Architecture", image: "/sivra/arch-kerala-canal-house.jpg" },
  { title: "Chettinad Courtyard House", category: "Heritage / Interior", image: "/sivra/arch-tamil-chettinad.jpg" },
  { title: "Meenakshi Temple Gopuram", category: "Architecture", image: "/sivra/arch-tamil-gopuram.jpg" },
  { title: "Shore Temple, Mahabalipuram", category: "Architecture", image: "/sivra/arch-tamil-shore-temple.jpg" },
  { title: "Luxury Bathroom Interior", category: "Decor / Furniture", image: "/sivra/project-7.jpg" },
  { title: "Loft Kitchen Interior", category: "Architecture", image: "/sivra/project-8.jpg" },
  { title: "White Italian Villa", category: "Decor", image: "/sivra/project-9.jpg" },
];

export const services = [
  { slug: "premium-constructions", title: "Premium Constructions", text: "End-to-end premium construction with quality materials and timely delivery.", bg: "/sivra/card-bg-1.jpg", hover: "/sivra/card-bg-1-hover.jpg", icon: "/sivra/service-icon-1.png" },
  { slug: "interiors", title: "Interiors", text: "Thoughtful interior design that balances aesthetics and function.", bg: "/sivra/card-bg-2.jpg", hover: "/sivra/card-bg-2-hover.jpg", icon: "/sivra/service-icon-2.png" },
  { slug: "architectural-design", title: "Architectural Design", text: "Innovative architectural solutions tailored to your site and lifestyle.", bg: "/sivra/card-bg-3.jpg", hover: "/sivra/card-bg-3-hover.jpg", icon: "/sivra/service-icon-3.png" },
  { slug: "2d-3d-plan-approval", title: "2D / 3D Plan Approval", text: "Accurate 2D/3D drawings and hassle-free plan approvals.", bg: "/sivra/card-bg-4.jpg", hover: "/sivra/card-bg-4-hover.jpg", icon: "/sivra/service-icon-4.png" },
  { slug: "real-estate-promoters", title: "Real Estate - promoters", text: "Trusted real estate promotion and property development services.", bg: "/sivra/card-bg-5.jpg", hover: "/sivra/card-bg-5-hover.jpg", icon: "/sivra/service-icon-5.png" },
];

export type ServiceDetail = {
  eyebrow: string;
  heading: string;
  intro: string;
  paragraphs: string[];
  carousel: string[];
  wideImage: string;
  stats: { label: string; value: number; text: string[] }[];
};

const referenceCarousel = [
  "/sivra/reference/service-silder1.jpg",
  "/sivra/reference/service-silder2.jpg",
];

const referenceStats: ServiceDetail["stats"] = [
  {
    label: "3D modeling",
    value: 50,
    text: ["Studio provides a full range", "of 3D interior modeling"],
  },
  {
    label: "ROOM MEASUREMENT",
    value: 75,
    text: ["Development of iperfect design", "of the project"],
  },
  {
    label: "2d planning",
    value: 85,
    text: ["We provide 2D planning", "for great visualization"],
  },
];

export const serviceDetails: Record<string, ServiceDetail> = {
  "premium-constructions": {
    eyebrow: "[ what we offer ]",
    heading: "Our Goal is to Build Premium Spaces That Last",
    intro:
      "Every premium build begins with a clear vision and a plan that respects it. Our construction team turns drawings into carefully crafted spaces, managing materials, craftsmanship and site coordination with equal attention.",
    paragraphs: [
      "We treat construction as a disciplined craft. From foundation to finishing, every stage is supervised by experienced engineers who coordinate trades, check tolerances and keep quality consistent across the site.",
      "Clients stay close to the process through transparent updates and open communication. The result is a building that feels considered in every detail and continues to perform long after handover.",
    ],
    carousel: referenceCarousel,
    wideImage: "/sivra/reference/image1-service1.jpg",
    stats: referenceStats,
  },
  interiors: {
    eyebrow: "[ what we offer ]",
    heading: "Our Goal is to Create Incredible Custom Interior Design",
    intro:
      "The interior design of your dream begins with a concept that is reflected in the blueprints, project plans, in 3D visualizations. It is possible to make any place more interesting, attractive and functional, for this it is worth to trust the real professionals and then the money will not be spent in a vain.",
    paragraphs: [
      "In design, we bring characteristics of the natural world into built spaces, such as water, greenery, and natural light, or elements like wood and stone. Encouraging the use of natural systems and processes in design allows for exposure to nature, and in turn, these design approaches improve health and wellbeing. There are a number of possible benefits, including reduced heart rate variability and pulse rates, decreased blood pressure, and increased activity in our nervous systems, to name a few.",
      "Over time, our connections to the natural world diverged in parallel with technological developments. Advances in the 19th and 20th centuries fundamentally changed how people interact with nature. Sheltered from the elements, we spent more and more time indoors. Today, the majority of people spend almost 80-90% of their time indoors, moving between their homes and workplaces. As interior designers embrace biophilia.",
    ],
    carousel: referenceCarousel,
    wideImage: "/sivra/reference/image1-service1.jpg",
    stats: referenceStats,
  },
  "architectural-design": {
    eyebrow: "[ what we offer ]",
    heading: "Our Goal is to Shape Architecture Around Your Lifestyle",
    intro:
      "Architecture should respond to the way you live. We study the site, the climate and the routines of the people who will use the building, then shape a design that feels natural in its surroundings and effortless in daily life.",
    paragraphs: [
      "Our architects work from the first sketch to the final detail, balancing proportion, light and material character. Every elevation is developed with construction practicality in mind so the design can be delivered exactly as it is imagined.",
      "We value long-term performance as much as appearance. Passive strategies, thoughtful circulation and durable finishes are built into the concept from the beginning, creating buildings that stay relevant and comfortable for years.",
    ],
    carousel: referenceCarousel,
    wideImage: "/sivra/reference/image1-service1.jpg",
    stats: referenceStats,
  },
  "2d-3d-plan-approval": {
    eyebrow: "[ what we offer ]",
    heading: "Our Goal is to Turn Precise Drawings Into Approved Spaces",
    intro:
      "Accurate drawings are the foundation of a smooth project. We prepare clear 2D documentation and expressive 3D visuals, then guide the plan through the approval process so design decisions are easy to understand and approve.",
    paragraphs: [
      "Our drafting team works directly from measured site data and coordinated design intent. Plans, sections, elevations and schedules are checked for consistency before submission, reducing revisions and avoiding costly confusion on site.",
      "The 3D studies help clients and authorities see the proposal before work begins. With one coordinated set of information, discussions move faster and the transition from approval to construction is far more confident.",
    ],
    carousel: referenceCarousel,
    wideImage: "/sivra/reference/image1-service1.jpg",
    stats: referenceStats,
  },
  "real-estate-promoters": {
    eyebrow: "[ what we offer ]",
    heading: "Our Goal is to Develop Landmarks With Lasting Value",
    intro:
      "We promote developments with a clear understanding of market demand, location potential and long-term livability. From concept positioning to handover, each decision is made with the end community in mind.",
    paragraphs: [
      "Our team coordinates design, approvals, construction and presentation under one roof. That integrated approach keeps the project narrative consistent and ensures the delivered development matches the promise made to buyers and partners.",
      "We believe a successful property is measured beyond its opening day. Careful planning, durable materials and thoughtful amenities create places that hold their character and continue to attract residents and investors over time.",
    ],
    carousel: referenceCarousel,
    wideImage: "/sivra/reference/image1-service1.jpg",
    stats: referenceStats,
  },
};

export const serviceTestimonials = [
  {
    quote:
      "You will never fake the feeling of being in such a place. The live minimalism base on the natural materials & alive unprocessed.",
    name: "Anna Paulina",
    role: "Client of Company",
    image: "/sivra/reference/testi1.png",
  },
  {
    quote:
      "You will never fake the feeling of being in such a place. The live minimalism base on the natural materials & alive unprocessed.",
    name: "Pablo Gusterio",
    role: "Client of Company",
    image: "/sivra/reference/testi2.png",
  },
  {
    quote:
      "You will never fake the feeling of being in such a place. The live minimalism base on the natural materials & alive unprocessed.",
    name: "Kristina Lee",
    role: "Client of Company",
    image: "/sivra/reference/testi3.png",
  },
];

export const stats = [
  { value: 180, suffix: "+", label: "Current Clients" },
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 35, suffix: "+", label: "Awards Winning" },
  { value: 5, suffix: "+", label: "Offices Worldwide" },
];

export const pricing = [
  {
    name: "Basic Plan",
    price: 29,
    featured: false,
    features: ["Structure of a project", "Measurement of the room", "3D-Visualization of premises", "Dismantling plan", "Scheme of interior finishing", "Floor & ceiling plan"],
  },
  {
    name: "Ultra Plan",
    price: 39,
    featured: true,
    features: ["Structure of a project", "Measurement of the room", "3D-Visualization of premises", "Dismantling plan", "Scheme of interior finishing", "Floor & ceiling plan"],
  },
  {
    name: "Maximal Plan",
    price: 49,
    featured: false,
    features: ["Structure of a project", "Measurement of the room", "3D-Visualization of premises", "Dismantling plan", "Scheme of interior finishing", "Floor & ceiling plan"],
  },
];

export const testimonials = [
  {
    quote:
      "You will never fake the feeling of being in such a place. The live minimalism base on the natural materials and alive unprocessed textures — true, authentic, close to nature. It has memory and appreciates to the culture, roots, archetypes.",
    name: "Pablo Gusterio",
    role: "Client of Company",
    image: "/sivra/testimonial-left.jpg",
  },
  {
    quote:
      "I’m always impressed with the services. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    name: "Anna Paulina",
    role: "Client of Company",
    image: "/sivra/testimonial-left-2.jpg",
  },
  {
    quote:
      "I have very much enjoyed with your services. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    name: "Kristina Lee",
    role: "Client of Company",
    image: "/sivra/testimonial-left-3.jpg",
  },
];

export const posts = [
  { title: "Top 10 Tips for Your Kitchen Interior Design", category: "Interior", date: "March 20, 2020", author: "Tom Black", image: "/sivra/blog-2.jpg" },
  { title: "The Golden Ratio Rule for Best 2D Sketch", category: "Architecture", date: "March 20, 2020", author: "Tom Black", image: "/sivra/blog-3.jpg" },
  { title: "Use Pastel Colors & Natural Materials", category: "Interior", date: "March 20, 2020", author: "Tom Black", image: "/sivra/blog-1.jpg" },
];

export const partners = [1, 2, 3, 4, 5, 6];

export const footerProjects = projects.slice(0, 3);
