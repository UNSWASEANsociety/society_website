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
    name: "ASEANSoc Movie Night",
    image: "/events/movienight.jpg",
    date: "23 July 2025 6.30pm",
    location: "Colombo Theatre A, UNSW",
    price: "free",
    speaker: [],
    schedule: [],
    description: `🎬 Looking for a midweek breather? Come unwind at our ASEANSoc Movie Night! We're bringing you a chill evening packed with snacks, laughs, and one chaotic K-pop-infused adventure on the big screen — K-POP DEMON HUNTERS! 💥🎤
                Expect plenty of fun as we take over Colombo Theatre A for a night you won’t forget. Whether you’re flying solo or bringing friends along, everyone’s welcome!
                `,
  },

    {
    id: 5,
    name: "Discover a Future With Salesforce",
    image: "/events/salesforce.jpg",
    date: "30th September 2025, 2-5pm",
    location: "Salesforce Tower, Sydney",
    price: "free",
    speaker: [],
    schedule: [],
    description: `Discover a Future with Salesforce!
                Salesforce is the world's leading CRM platform, helping businesses connect with their customers in smarter ways with AI, data, and automation solutions at its core. As a global leader in the tech industry, it's taking centre stage in the new era of AI.
                We invite you to step inside the world of Salesforce at our Circular Quay office to learn more about who we are. You will hear from employees about their diverse careers, get hands-on with AI by learning how to build an agent, tour the office, and connect with experts and peers during an informal networking session.
                Whether you’re curious about tech, exploring career options after university, or ready to dive into the future of AI and CRM, this is your chance to gain real insights and get a taste of the Salesforce ecosystem!
                `,
  },

];

const getEvents = () => {
  return events;
};

export default getEvents;
