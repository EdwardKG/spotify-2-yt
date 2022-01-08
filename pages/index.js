import { getSession } from "next-auth/react";
import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import Player from "../components/Player";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
        {/*<h1>This is a DOPE spotify 2.0 build</h1>*/}

        <main className="flex">
            <Sidebar />
            <Center />
        </main>

        <div>
        <Player />
        </div>
    </div>
  );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    return {
        props: {
            session,
        },
    };
}
