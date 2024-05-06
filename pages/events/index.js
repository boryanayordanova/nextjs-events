import { getAllEvents } from "../../helpers/api-util";
import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";

export default function EventsPage(props) {
    const router = useRouter();
    const { events } = props; //const events = props.events();

    function findEventHandler(year, month){
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return (
        <Fragment>
            <Head>
                <title>All Events</title>
                <meta 
                    name="description" 
                    content="Find a lot of great events that allow you to evolve..." 
                />
            </Head>
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

