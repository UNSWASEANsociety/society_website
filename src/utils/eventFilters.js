export const parseEventDate = (dateString) => {
  const cleanDate = dateString.split('\n')[0].trim();

  const currentDate = new Date();

  if (cleanDate.includes('Term')) {
    const year = parseInt(cleanDate.match(/\d{4}/)?.[0] || currentDate.getFullYear());
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    if (year > currentYear) return { isPast: false, date: new Date(year, 6, 1) };
    if (year === currentYear && currentMonth <= 9) return { isPast: false, date: new Date(year, 6, 1) };
    return { isPast: true, date: new Date(year, 6, 1) };
  }

  try {
    const eventDate = new Date(cleanDate);
    if (isNaN(eventDate.getTime())) {
      const parts = cleanDate.split(' ');
      if (parts.length >= 3) {
        const day = parseInt(parts[0]);
        const month = getMonthNumber(parts[1]);
        const year = parseInt(parts[2]);

        if (day && month !== -1 && year) {
          const parsedDate = new Date(year, month, day);
          return {
            isPast: parsedDate < currentDate,
            date: parsedDate
          };
        }
      }
    }

    return {
      isPast: eventDate < currentDate,
      date: eventDate
    };
  } catch (error) {
    console.warn('Could not parse date:', dateString);
    return { isPast: false, date: new Date() };
  }
};

const getMonthNumber = (monthName) => {
  const months = {
    'january': 0, 'jan': 0,
    'february': 1, 'feb': 1,
    'march': 2, 'mar': 2,
    'april': 3, 'apr': 3,
    'may': 4,
    'june': 5, 'jun': 5,
    'july': 6, 'jul': 6,
    'august': 7, 'aug': 7,
    'september': 8, 'sep': 8, 'sept': 8,
    'october': 9, 'oct': 9,
    'november': 10, 'nov': 10,
    'december': 11, 'dec': 11
  };

  return months[monthName.toLowerCase()] !== undefined ? months[monthName.toLowerCase()] : -1;
};

export const filterEvents = (events, filter) => {
  switch (filter) {
    case 'upcoming':
      return events.filter(event => !parseEventDate(event.date).isPast);
    case 'past':
      return events.filter(event => parseEventDate(event.date).isPast);
    case 'all':
    default:
      return events;
  }
};

export const sortEventsByDate = (events, ascending = false) => {
  return [...events].sort((a, b) => {
    const dateA = parseEventDate(a.date).date;
    const dateB = parseEventDate(b.date).date;
    return ascending ? dateA - dateB : dateB - dateA;
  });
};
