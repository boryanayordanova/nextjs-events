import { getAllEvents } from "../../helpers/api-util";
import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function EventsPage(props) {
    const router = useRouter();
    const { events } = props; //const events = props.events();

    function findEventHandler(year, month){
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return (
        <Fragment>
            <EventsSearch onSearch={findEventHandler} />
            <EventList items={events}/>
        </Fragment>
    )
}

export async function getStaticProps(){
    const events = await getAllEvents();
    return {
        props: {
            events: events
        },
        revalidate: 60
    }
}

