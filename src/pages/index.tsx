import type { NextPage } from "next";
import Head from "next/head";

import { Timeline } from "../components/timeline";
import { AnimateIntroduction } from "../components/animateIntroduction";
import { Link } from "../components/link";
import { INTRODUCTIONS } from "../data/introduction";
import { TIMELINES } from "../data/timeline";
import { CONTACTS } from "../data/contact";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Enzo Hespel</title>
      <meta
        name="description"
        content="Enzo Hespel, Full-Stack developper resume"
      />
      <link rel="icon" sizes="16x16" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Scada&display=swap"
        rel="stylesheet"
      ></link>
    </Head>

    <main className="container mx-auto mt-8 px-8">
      <div className="flex gap-4 sm:gap-8 mb-9">
        {CONTACTS.map((contact, i) => (
          <Link key={i} href={contact.link}>
            {contact.title}
          </Link>
        ))}
      </div>

      <AnimateIntroduction data={INTRODUCTIONS} />

      <div className="grid gap-8 lg:gap-16  grid-cols-1 lg:grid-cols-2">
        {TIMELINES.map((timeline, i) => (
          <Timeline
            key={i}
            timelineCategory={timeline.category}
            timelineData={timeline.data}
          />
        ))}
      </div>
    </main>
  </div>
);

export default Home;
