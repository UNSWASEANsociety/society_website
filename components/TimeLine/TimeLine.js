/**
 * Using this package: 
 * https://www.npmjs.com/package/react-event-timeline
 */

import React from "react";
// import { Timeline, TimelineEvent } from "react-event-timeline";
import EventIcon from "@material-ui/icons/Event";

const TimeLine = ({events}) => {
  const icon = <EventIcon />;
  return (<></>
    // <Timeline>
    //   {events.map((event) => (
    //     <TimelineEvent
    //       title={event.title}
    //       createdAt={event.createdAt}
    //       icon={icon}
    //     >
    //       {event.body}
    //     </TimelineEvent>
    //   ))}
    // </Timeline>
  );
};

TimeLine.defaultProps = {
    events: [
      {
        title: "John Doe sent a SMS",
        createdAt: "2016-09-12 10:06 PM",
        body: "I received the payment for $543. Should be shipping the item within a couple of hours.",
      },
      {
        title: "You sent an email to John Doe",
        createdAt: "2016-09-11 09:06 AM",
        body: " Like we talked, you said that you would share the shipment details? This is an urgent order and so I am losing patience. Can you expedite the process and pls do share the details asap. Consider this a gentle reminder if you are on track already!",
      },
    ]
}

export default TimeLine;
