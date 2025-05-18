import React from 'react';

const EventsCard = ({ event1, event2, event3 }) => {
  return (
    <div className="bg-slate-900 text-white p-4 rounded-lg">
      <div className="space-y-4">
        <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
          <span className="text-xl">{event1 || "Event 1"}</span>
        </div>
        <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
          <span className="text-xl">{event2 || "Event 2"}</span>
        </div>
        <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
          <span className="text-xl">{event3 || "Event 3"}</span>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
