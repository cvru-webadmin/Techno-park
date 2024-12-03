import React, { useContext, useEffect, useState } from "react";
import AddEventModal from "./event componet/AddEvent";
import { FireContext } from "../../../Context/context";
import EditEventModal from "./event componet/EditEvent";
import DeleteModal from "./event componet/DeleteConformation";

const EventPage = () => {
  const eventsData = [
    {
      id: 1,
      title: "Annual Science Fair",
      description:
        "A platform for students to showcase their scientific talents.",
      status: "Upcoming",
    },
    {
      id: 2,
      title: "Music Fest",
      description: "An evening filled with music and performances.",
      status: "Active",
    },
    {
      id: 3,
      title: "University Newsletter",
      description: "Latest updates and announcements from the university.",
      status: "News",
    },
  ];

  const totalEvents = eventsData.length;
  const upcomingEvents = eventsData.filter(
    (event) => event.status === "Upcoming"
  ).length;
  const activeEvents = eventsData.filter(
    (event) => event.status === "Active"
  ).length;

  //useState define here
  const [isOpen, setOpen] = useState(false);
  const [iseditOpen, setEditOpen] = useState(false);
  const [isloading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [isEdit, setEdit] = useState({});
  const [onEdit, setOnEdit] = useState(false);
  const [onDelete, setOnDelete] = useState(false);
  const [add, eventAdd] = useState(false);
  const [totalEvent,setToatalEvents] = useState([]);
  const [filterMode,setMode]=useState("total");

  // import method for context
  const { addEvent, GetEvents, deleteEvent, updateEvent, formatDate } =
    useContext(FireContext);

  useEffect(() => {
    setLoading(true);
    async function GetEvent() {
      try {
        let res = await GetEvents();
        let Events = res.docs.map((doc) => ({
          id: doc.id, // Include document ID
          ...doc.data(), // Spread the document data
        }));
        // console.log(res.docs[0]);
        setEvents(Events);
        setToatalEvents(Events)
        // console.log(Events);
        setLoading(false);
      } catch (error) {
        console.log("some error occure ->", error);
      } finally {
        setLoading(false);
      }
    }
    GetEvent();
  }, [onEdit, onDelete, add]);

  const Edit = (eventData) => {
    if (!eventData || Object.keys(eventData).length === 0) {
      console.error("Invalid eventData:", eventData);
      return;
    }
    setEdit(eventData); // Set the event data
    setEditOpen(true); // Open the modal
  };

  const editClose = () => {
    setEditOpen(false);
    setEdit({});
  };

  const[deleteId,setDeleteId]=useState(null);
  const[deleteName,setDeleteName]=useState(null);
  const[isModeldelete,setdeleteModel]=useState(false)
  const handleDelete = async (id) => {
    let res = await deleteEvent(id);
    if (res) {
      setOnDelete(!onDelete);
      setdeleteModel(false);
      alert(`${deleteName} sucessfully delete`)
      setDeleteId(null);
      setDeleteName(null);
    }
  };

  const handleConformation=(name,id)=>{
      setdeleteModel(true);
      setDeleteId(id);
      setDeleteName(name);
  }
  
  //upcoming event filter
  const [upcomingEvent,setUpcomingEvent]=useState([]);
  const UpcomingEvents=()=>{
    const UpcomingEvents=totalEvent.filter((event)=>event.status==="Upcoming").map((event)=>event);
    setUpcomingEvent(UpcomingEvents)
  }
  
  //news event filter
  const [NewsEvent,setNewsEvent]=useState([]);
  const NewsEvents=()=>{
    const NewsEvents=totalEvent.filter((event)=>event.status==="News").map((event)=>event);
    setNewsEvent(NewsEvents)
  }
  
  //Active event filter
  const [ActiveEvent,setActiveEvent]=useState([]);
  const ActiveEvents=()=>{
    const ActiveEvents=totalEvent.filter((event)=>event.status==="Active").map((event)=>event);
    setActiveEvent(ActiveEvents)
  }

  useEffect(()=>{
    ActiveEvents();
    NewsEvents();
    UpcomingEvents();
  },[onEdit,onDelete,add,totalEvent])



  return (
    <div className="h-screen w-full mx-auto p-12 pt-0 overflow-y-auto">
      {/* model box */}
      <AddEventModal
        isOpen={isOpen}
        add={add}
        EventAdd={eventAdd}
        onClose={() => setOpen(false)}
        onAddEvent={addEvent}
        formatDate={formatDate}
      />
      <EditEventModal
        isOpen={iseditOpen}
        onClose={() => editClose()}
        edit={onEdit}
        onEdit={setOnEdit}
        eventData={isEdit}
        onSave={updateEvent}
      />
      <DeleteModal
        Open={isModeldelete}
        Close={() => setdeleteModel(false)}
        Confirm={() => handleDelete(deleteId)}
        projectName={deleteName}
      />
      {/* Cards Row */}
      {/* Header Section */}
      <header className="bg-white shadow-md p-4 mb-6 rounded-lg mt-6">
        <h1 className="text-2xl font-bold text-gray-700">Admin - Events</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {/* Card Component */}
        {[
          {
            title: "Total Events",
            count: totalEvent.length,
            click: () => {
              setMode("total");
              setEvents(totalEvent);
            },
            description: "Today total number of events.",
            iconbg: "#38B2AC",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10.74 12.25L12 9.5l1.25 2.75L16 13.5l-2.75 1.26L12 17.5l-1.26-2.74L8 13.5zM16 3V1h2v2h1c.53 0 1.04.21 1.41.59c.38.37.59.88.59 1.41v14c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59H5c-.53 0-1.04-.21-1.41-.59C3.21 20.04 3 19.53 3 19V5c0-.53.21-1.04.59-1.41C3.96 3.21 4.47 3 5 3h1V1h2v2zM5 8v11h14V8z"
                ></path>
              </svg>
            ),
          },
          {
            title: "Upcoming Events",
            count: upcomingEvent.length,
            click: () => {
              setMode("upcoming");
              setEvents(upcomingEvent);
            },
            iconbg: "#F6AD55",
            description: "Future scheduled events",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15 13h1.5v2.82l2.44 1.41l-.75 1.3L15 16.69zm4-5H5v11h4.67c-.43-.91-.67-1.93-.67-3a7 7 0 0 1 7-7c1.07 0 2.09.24 3 .67zM5 21a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h1V1h2v2h8V1h2v2h1a2 2 0 0 1 2 2v6.1c1.24 1.26 2 2.99 2 4.9a7 7 0 0 1-7 7c-1.91 0-3.64-.76-4.9-2zm11-9.85A4.85 4.85 0 0 0 11.15 16c0 2.68 2.17 4.85 4.85 4.85A4.85 4.85 0 0 0 20.85 16c0-2.68-2.17-4.85-4.85-4.85"
                ></path>
              </svg>
            ),
          },
          {
            title: "Active Events",
            count: ActiveEvent.length,
            click: () => {
              setMode("active");
              setEvents(ActiveEvent);
            },
            iconbg: "#48BB78",
            description: "Events currently ongoing.",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m10.95 15.45l3.475-3.475q.3-.3.725-.3t.725.3t.3.725t-.3.725L11.65 17.65q-.3.3-.7.3t-.7-.3l-2.125-2.125q-.3-.3-.3-.725t.3-.725t.725-.3t.725.3zM5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z"
                ></path>
              </svg>
            ),
          },
          {
            title: "News",
            count: NewsEvent.length,
            click: () => {
              setMode("news");
              setEvents(NewsEvent);
            },
            description: "Latest updates and announcements.",
            iconbg: "#ED64A6",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M16.75 4a2.25 2.25 0 0 1 2.245 2.096L19 6.25V17.5a.5.5 0 0 0 .992.09L20 17.5V7.014a2.25 2.25 0 0 1 1.994 2.072L22 9.25v7.5a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V6.25a2.25 2.25 0 0 1 2.096-2.245L4.25 4zm-7.502 7h-3.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75m6.004 3.5h-2.498l-.102.007A.75.75 0 0 0 12.754 16h2.498l.102-.007a.75.75 0 0 0-.102-1.493m-6.754-2v2h-2v-2zM15.25 11l-2.498.005l-.102.006a.75.75 0 0 0 .104 1.494l2.499-.005l.101-.007A.75.75 0 0 0 15.251 11m.001-3.496H5.748l-.102.007a.75.75 0 0 0 .102 1.493h9.504l.102-.006a.75.75 0 0 0-.102-1.494"
                ></path>
              </svg>
            ),
          },
        ].map((card, index) => (
          <div key={index}>
            <div
              onClick={card.click}
              className="bg-white h-48 cursor-pointer p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-700">
                  {card.title}
                </h2>
                <div
                  className="p-3 text-white rounded-full"
                  style={{ backgroundColor: card.iconbg }}
                >
                  {card.icon}
                </div>
              </div>
              <div
                className="mt-4 text-3xl font-bold"
                style={{ color: card.iconbg }}
              >
                {card.count}
              </div>
              <p className="text-sm py-2 bg-gray-200/50 text-center text-gray-500 mt-2">
                {card.description ||
                  "This is a description of the card's purpose."}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Events Table */}
      <div className="bg-white shadow-md rounded-lg border border-gray-600/10 p-5">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-xl font-bold text-gray-700">
            {filterMode == "upcoming" && "Upcoming "}
            {filterMode == "active" && "Active "}
            {filterMode == "news" && "News "}
            Events
          </h2>
          <button
            onClick={() => setOpen(true)}
            className="bg-gradient-to-r from-indigo-400 to-indigo-500 text-white px-4 py-2 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            + Add New Event
          </button>
        </div>
        <table className="table-auto w-full bg-white border-collapse">
          <thead>
            <tr className="bg-slate-500 text-white">
              <th className="border-b-2 py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                #
              </th>
              <th className="border-b-2 py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                Title
              </th>
              <th className="border-b-2 py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                Description
              </th>
              <th className="border-b-2 py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                Status
              </th>
              <th
                colSpan={2}
                className="border-b-2 py-3 px-6 text-center text-sm font-semibold uppercase tracking-wider"
              >
                Controls
              </th>
            </tr>
          </thead>
          <tbody>
            {isloading ? (
              Array(5)
                .fill(null)
                .map((e, index) => (
                  <tr key={index} className="bg-white animate-pulse">
                    <td className="border-b py-3 px-6 text-sm text-gray-700">
                      <div className="h-5 w-6 bg-gray-200 rounded"></div>
                    </td>
                    <td className="border-b py-3 px-6 text-sm text-gray-700">
                      <div className="h-5 w-24 bg-gray-200 rounded"></div>
                    </td>
                    <td className="border-b py-3 px-6 text-sm text-gray-700">
                      <div className="h-5 w-32 bg-gray-200 rounded"></div>
                    </td>
                    <td className="border-b py-3 px-6 text-sm text-gray-700">
                      <div className="h-5 w-20 bg-gray-200 rounded"></div>
                    </td>
                    <td className="border-b py-3 px-6 text-sm text-gray-700">
                      <div className="h-5 w-16 bg-gray-200 rounded"></div>
                    </td>
                    <td className="border-b py-3 px-6 text-sm text-gray-700">
                      <div className="h-5 w-16 bg-gray-200 rounded"></div>
                    </td>
                  </tr>
                ))
            ) : (
              <>
                {totalEvent.length > 0 ? (
                  events.map((event, index) => (
                    <tr
                      key={event.title + index + 1}
                      className="bg-white text-sm text-gray-700 hover:bg-gray-200 transition"
                    >
                      <td className="border-b py-3 px-6">{index + 1}</td>
                      <td className="border-b py-3 px-6 capitalize text-nowrap">
                        {event.title}
                      </td>
                      <td className="border-b py-3 px-6">
                        {event.description}
                      </td>
                      <td className="border-b py-3 px-6">{event.status}</td>
                      <td className="border-b py-3 px-6">
                        <button
                          onClick={() => Edit(event)}
                          className="text-indigo-500 hover:scal-105 hover:shadow-lg hover:bg-white px-3 py-2 rounded-md flex gap-1 items-center hover:text-indigo-700 mr-4"
                        >
                          Edit
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3"
                            viewBox="0 0 24 24"
                          >
                            <rect width="24" height="24" fill="none" />
                            <path
                              fill="currentColor"
                              d="M3 21V3h10.925l-2 2H5v14h14v-6.95l2-2V21zm6-6v-4.25L19.625.125L23.8 4.4L13.25 15zM21.025 4.4l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"
                            />
                          </svg>
                        </button>
                      </td>
                      <td className="border-b py-3 px-6 text-sm text-gray-700">
                        <button
                          onClick={() => handleConformation(event.title,event.id)}
                          className="text-red-500 hover:scal-105 hover:shadow-lg hover:bg-white px-3 py-2 rounded-md hover:text-red-700"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="bg-white">
                    <td
                      colSpan="6"
                      className="border-b text-center py-3 px-6 text-sm text-gray-700"
                    >
                      currently don't have any event
                    </td>
                  </tr>
                )}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventPage;
