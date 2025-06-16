const events = [
  {
    id: 1,
    name: "Young Entrepreneurs Case Competition",
    image: "/events/YECC.jpg",
    date: "21 June 2021",
    location: "UNSW",
    price: "free",
    speaker: [],
    schedule: [],
    // Organisers: [],
    // eventType: {isFormal: true, isInternal: true},
    description: `
    Have you always thought of a solution to a problem no one has ever done before?
    Do you have what it takes to start your entrepreneurial journey?
    Time to make all those dreams one step closer to reality! The ASEAN Society Young Entrepreneur Case Competition is aimed at generating real solutions to economic, political, and socio-cultural problems faced by ASEAN businesses. You’ll be contributing to the solution of real issues in Southeast Asia and facilitating discussion of innovative ideas!
    The prizes? A seat in Guru Advantage’s Global Virtual Internship Program (worth over $1000), a Business Leaders Masterclass, personalized letters of commendation from The Australian-ASEAN Business Council, and more!*
    Think you got a winning pitch? Apply now! The internship is also eligible for international and remote students 🤩`,
  },

  {
    id: 2,
    name: "UNSW ASEANSoc Case Competition 2025",
    image: "/events/casecomp2023.png",
    date: "Week 7",
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
];

const getEvents = () => {
  return events;
};

export default getEvents;
