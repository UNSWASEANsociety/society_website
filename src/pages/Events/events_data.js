const events = [
  {
    id: 1,
    name: "Badminton Day",
    image: "/events/badmin19june.jpg",
    date: "19 June 2025 \n2-4pm",
    location: "UNSW Fitness & Aquatic Centre",
    price: "free",
    speaker: [],
    schedule: [],
    // Organisers: [],
    // eventType: {isFormal: true, isInternal: true},
    description: `
    🏸 Ready to smash some shuttlecocks? Join us for our upcoming Badminton Social Event, open to all skill levels — whether you're a seasoned player or just want to give it a go! 
    We'll be playing friendly doubles and mixing teams so everyone gets a chance to play and meet new people. 👫💥 
    Don't forget your racquets and shuttlecocks, and maybe a friend as well! Come for the sport, stay for the community vibes. 🎉🔥`,
  },

  {
    id: 2,
    name: "Munch & Mingle!",
    image: "/events/munchnmingle.jpg",
    date: "27 June 2025 \n5-8pm",
    location: "UNSW Tyree G16",
    price: "Arc member : $5 \nNon Arc member : $6",
    speaker: [],
    schedule: [],
    description: `🍱 Looking for something more laid-back? Come join us at Munch & Mingle — a social night hosted by ASEANSoc for good food, 
              great vibes, and even better company! This is your chance to meet fellow members, enjoy a spread of Southeast Asian snacks, 
              and mingle over casual convos and games. Whether you're a new face or a returning member, we'd love to see you there! 🌟🤝🎉`,
  },

  {
    id: 3,
    name: "UNSW ASEANSoc Case Competition 2025",
    image: "/events/casecomp2023.png",
    date: "2025 Term 3",
    location: "UNSW",
    price: "free",
    speaker: [],
    schedule: [],
    description: `UNSW ASEAN Soc is thrilled to unveil our upcoming case competition in collaboration with Guru Advantage! 
              👩‍💻 This is your chance to challenge yourself alongside your friends in a team of 3-4 individuals. 
              Together, you'll dive into a captivating case study and develop an innovative solution of your own! 
              🧑‍🤝‍🧑🔥 Don't worry if you're registering individually; we'll pair you up with other talented participants! 
              👀 Whether you have prior experience or not, this competition is an excellent opportunity to learn from your peers and 
              industry professionals, gaining valuable insights into real-life problem-solving with Guru Advantage. 
              👏📚🤩📢 The case competition is open worldwide to all university students, regardless of their background. 
              Our main goal is to propose positive impacts on ASEAN, encompassing various lenses like economic, socio-cultural, and 
              environmental sectors.`,
  },

  {
    id: 4,
    name: "Career Exposition - Hosted by ACYA",
    image: "/events/careerExpo.png",
    date: "Week 6",
    location: "UNSW",
    price: "free",
    speaker: [],
    schedule: [],
    description: `🚀 Ready to explore career pathways and connect with industry professionals? Join UNSW ASEAN Society at the 
              Career Exposition hosted in collaboration with ACYA (Australia-China Youth Association)! 

              🤝 This is your chance to gain valuable insights into graduate opportunities, internships, and industry expectations 
              from leading organisations across sectors such as business, consulting, government, tech, and more.

              💬 The event will feature speaker panels, recruiter Q&As, and casual networking sessions to help you build your 
              confidence and career connections. Whether you're just exploring or actively applying, there's something here for everyone.

              🎯 Don't miss out on this great opportunity to expand your network, sharpen your professional toolkit, and prepare 
              for what’s next in your career journey!`,
  },
];

const getEvents = () => {
  return events;
};

export default getEvents;
