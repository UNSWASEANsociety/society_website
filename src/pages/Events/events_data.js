const events = [
  {
    id: 1,
    name: "Young Entrepreneurs Case Competition",
    image: "/seminar.png",
    date: "21 June 2021",
    location: "UNSW",
    price: "free",
    speaker: "none",
    description: `
    Have you always thought of a solution to a problem no one has ever done before?
    Do you have what it takes to start your entrepreneurial journey?
    Time to make all those dreams one step closer to reality! The ASEAN Society Young Entrepreneur Case Competition is aimed at generating real solutions to economic, political, and socio-cultural problems faced by ASEAN businesses. You’ll be contributing to the solution of real issues in Southeast Asia and facilitating discussion of innovative ideas!
    The prizes? A seat in Guru Advantage’s Global Virtual Internship Program (worth over $1000), a Business Leaders Masterclass, personalized letters of commendation from The Australian-ASEAN Business Council, and more!*
    Think you got a winning pitch? Apply now! The internship is also eligible for international and remote students 🤩`,
    }, 
];

const getEvents = () => {
  return events;
}

export default getEvents;
