import { ITimelineEntry } from "../components/Timeline"

export const timeline_text: ITimelineEntry[] = [
  {
    title: "Persistence",
    date: "Jan 2022 - ongoing",
    description:
      "Health and fitness app, with personal dashboard, interactive calendar, and data-driven insights.",
    link: "www.trainpersistent.com/about",
    stack: [
      "Go",
      "Python",
      "Flask",
      "Vite",
      "TypeScript",
      "React",
      "Redux",
      "Sass",
    ],
    points: {
      About:
        "In my journey with Persistence, I have grown the project from a Matlab script analysing watch data I wrote in university, to static HTML, to a fully responsive progressive web app. As the project's complexity increased, I evolved the architecture and embraced new tools and technologies, learning on the job to take the project to the each new level. This process required extensive research, planning, iterative development, and effective utilization of my increasingly diverse skill set. Consequently, I have continually improved user experience across devices and platforms, striving to deliver a quality product that meets user expectations and the high standards I set myself.<br/><br/>Working independently, I manage the full lifecycle of product development, from ideation and planning to implementation and maintenance. This involves overseeing the architecture of the application, thinking deeply about the user experience, implementing best practices for optimal performance and secure authentication, while strategically allocating time to each aspect.",
      Progress: [
        "Version 1 released in Jan 2023",
        "Fully responsive design for Web and Mobile, with offline available on Mobile through PWA features.",
        "The Calendar is highly interactive, users have extensive tools for planning sessions as well as logging and reviews that help to capture the story of the session.",
        "Insights is comprehensive and presents data not seen on other platforms users may have seen, but I hope to make it more sophisticated to provide more interesting and actionable insight in the future.",
      ],
      "Next Steps": [
        "For Version 2 I have radically expanded the backend, creating two new services.",
        "In v2 users will be able to authenticate using Google, and import and synchronise data from Strava and Garmin.",
        "When I started v1, I wasn't sure about what data structures would be best suited to the features I wanted to implement. This is something I want to improve for v2, so I've made updates to database schemas, the Garmin data parsing strategy and API resources.",
        "There will also be big updates to the public facing pages which I had intentionally left barebones up to now.",
        "The Dashboard will also see an update, with more graphics, and new goal setting tools.",
        "In a future release, Insights will include analyses with temporal information algorithms I've previously used in research, and more personalised feedback with automated classifiers.",
      ],
    },
  },
  {
    title: "Rho Technologies",
    date: "Oct 2022",
    description: "Landing page for my business",
    link: "www.rhotechnologies.co.uk",
    stack: ["NextJS", "TypeScript", "Tailwind"],
    points: {
      Implemention:
        "I decided to build this site with the <b>NextJS</b> framework to take advantage of optional API routes, as only contact form submissions are required on day-one, with scope for adding more functionality as needed, such as content delivery for marketing materials, or handling support tickets. As this is a small project, I used TailwindCSS to style it with utility classes rather than building up a component library.",
      Progress: [
        "<a href='https://www.rhotechnologies.co.uk'>Go to the site</a>",
        "The site is live through Google Cloud",
      ],
      "Next Steps": [
        "As more products and services are released, a product page template will be needed.",
      ],
    },
  },
  {
    title: "First Python Code",
    date: "Nov 2019",
    description: "My favourite card game, on the command line",
    // link: "github.com/ottelli/elPresidente",
    stack: ["Python"],
    points: {
      About:
        "I thoroughly enjoyed learning to program at university, but we had used Matlab and my license soon ran out after graduating. I settled on Python and always learn better with projects so set about coding the card game that me and my friends were always playing. Having had no frame of reference before, I soon realised why Matlab is ranked as the least loved programming language in the Stack Overflow developer survey.",
      "Gameplay & Interface":
        "Text based on the command line. All players on one machine, with the screen cleared between each. Players are told the last cards played and have their hand, split into multiples, sorted by value, shown to them as an indexed list. They input an index to play their turn. Based on the game state there may be follow up decisions, like splitting cards or using the joker.",
      Conclusion: [
        "I achieved what I set out to do! I declared this project a success when my friends and I were playing and began to feel some of the tension that exists in our real games...",
      ],
      Reflection: [
        "Coming from Matlab, I enjoyed learning Python a lot! A major change was moving from the Matlab IDE with f1-Help to a text editor and terminal, open-source packages and learning from documentation.",
        "I was familiar with some basic programming concepts, so in this project I focused on using classes and inheritance and learning language features like list comprehension.",
        "Finishing this project, I felt confident to start working on technical projects using Python.",
      ],
    },
  },
  {
    title: "IMUs for Gait Variability and Efficiency",
    date: "Jun 2018",
    description: "Masters thesis project",
    stack: ["IMU", "MATLAB"],
    points: {
      "Research Question":
        "Can non-linearities in gait predict running economy?",
      Experiment: "Recruited [n] people. Gas analysis + Gait analysis.",
      Analysis: "Vectorisation. DFA. SampEnt.",
      Conclusion: [
        "Everyone has a velocity-variability sweet-spot in their running gait, which is most efficient for them.",
        "J-shape Function. Expert is shifted to the right, deeper and wider trough",
      ],
      Reflection: ["Consequent Hypotheses: Adaptation to terrain."],
    },
  },
  {
    title: "Computer Vision & Biofeedback",
    date: "Mar 2018",
    description: "Prototype and business plan",
    stack: ["Android", "MATLAB"],
    points: {
      "Assigned Task": "Help a sports injury, with technology.",
      "Chosen Design Brief": "How to prevent back injuries from deadlifting?",
      Solution:
        "A camera purchased by gyms, placed to the side when deadlifting. Together with an Android app to give live feedback and record sessions.",
      "Team Role": "I handled the financial plan and app design",
      Conclusion: [""],
      Reflection: "",
    },
  },
  {
    title: "Table Tennis Simulator",
    date: "Dec 2017",
    link: "github.com/ottelli/table-tennis-physics",
    description: "Physics model with GUI in Matlab",
    stack: ["MATLAB"],
    points: {
      "Assigned Task":
        "Simulate and evaluate the effects of a change to a rule in a sport.",
      "Chosen Rearch Question":
        "Would Table Tennis be more entertaining on a bigger table?",
      Model:
        "The physics of Tabble Tennis can be divied into two states: flight and impact. In flight, the trajectory of a small, smooth projectile is strongly subjected to spin forces, while also going through a ballistic transition. The hardness of both table and ball contribute to one of the briefest impacts in sport, but still surface and deformation effects are influential.",
      Program:
        "From starting position, strike angle and outgoing velocity, animate and trace the balls flight across the table, then displays flight time and end velocity at the end of the table.",
      Conclusion: [
        "Looked great on a workstation, almost killed my laptop..",
        "Together with the accompanying report, the model recieved 90/100 (70 for a Distinction grade).",
      ],
    },
  },
  {
    title: "IMUs for Running Injury Risk",
    date: "Apr 2017",
    description: "Bachelors dissertation project",
    stack: ["IMU", "Arduino", "MATLAB"],
    points: {
      "Chosen Research Question":
        "How does shoe choice effect lower limb [shock / vibrations] while running?",
      Experiment:
        "I recruited [n] people to run 3 laps of ~12min around a local park. Each time wearing a different design of shoe. Using an IMU, I measured accelerations at the top of the shin.",
      Analysis:
        "I wrote a MATLAB script to; apply a high- and low-pass filter, detect peaks, and plot the result.<br/>To model the effects on the bones, I constructed a free body diagram, and input values from medical journal papers.<br/>Finally, I conducted a factorial analysis, [with factors such as] bone density, weight, speed of bone remodelling... , to provide context for the differences in shock between the shoes.",
      Conclusion: [
        "More foam on the shoe, less shock through the shin",
        "Materials are <b>very</b> important",
        "Shoes are the [x] principal component, and account for [y]% of the variance in total strain on the lower leg.",
      ],
      Reflection: [""],
    },
  },
]

export default timeline_text
