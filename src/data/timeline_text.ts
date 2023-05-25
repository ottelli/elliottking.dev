import { ITimelineEntry } from "../components/Timeline"

export const timeline_text: ITimelineEntry[] = [
  {
    title: "Persistence",
    date: "Jan 2022 - ongoing",
    description:
      "Health and fitness app, with personal dashboard, interactive calendar, and data-driven insights.",
    link: "www.trainpersistent.com",
    stack: [
      "Go",
      "Python",
      "Flask",
      "Vite",
      "TypeScript",
      "React",
      "Redux",
      "Sass",
      "GCP",
    ],
    points: {
      About:
        "In my journey with Persistence, I have grown the project from a Matlab script analysing watch data I wrote in university, to static HTML, to a fully responsive progressive web app. As the project's complexity increased, I evolved the architecture and embraced new tools and technologies, learning on the job to take the project to each new level. This process required extensive research, planning, iterative development, and effective utilization of my increasingly diverse skill set. Consequently, I have continually improved user experience across devices and platforms, striving to deliver a quality product that meets user expectations and the high standards I set myself.<br/><br/>Working independently, I manage the full lifecycle of product development, from ideation and planning to implementation and maintenance. This involves overseeing the architecture of the application, thinking deeply about the user experience, implementing best practices for optimal performance and secure authentication, while strategically allocating time to each aspect.",
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
    title: "Auth API",
    date: "Feb 2023",
    description:
      "Written in Go, implementing JWTs, with OAuth2 and concurrency",
    link: "github.com/ottelli/auth-service",
    stack: ["Go", "GCP"],
    points: {
      "Why did I make this?":
        "Building on the minimum-viable-product release of Persistence, I identified the authentication and authorization workflow as an area of potential improvement. The previous implimentation used access tokens to protect resource routes, but these were long lived and did not conform to OAuth2 standard. The logic was also part of a monolithic backend server that I wanted to break up for ease of maintenance and development.<br/><br/>I often build small toy projects to try out technologies I'm interested in, and had starting using Go in this sort of project whilst still building the first release of Persistence. Despite really enjoying the experience, I did not want to switch language part way through development.<br/><br/>Starting a new service gave me the opportunity to use Go in a larger project, and leverage its strengths in production code.",
      "What I built":
        "The service consists of a REST API with endpoints to register and authenticate users. The client application recieves access tokens to include in resource requests. The service also implements refresh tokens, so that access tokens can be limited to short lifespans, improving security, while clients can obtain new ones to provide a seamless user experience.",
      "What I learned":
        "When developing this service I tried to take advantage of the concurrency features in Go where they're useful, using goroutines to process requests once they're validated. I also enjoyed the clarity and robustness of static typing and the general error handling process in Go, especially for this kind of service where I always want to deliver clear, actionable feedback to a client. It can feel almost like Error-Driven-Development at times, but it gives a lot of confidence in the final application without using catch-all approaches as you might see in Python.",
    },
  },
  {
    title: "Document Resource API",
    date: "Nov 2022",
    description: "REST API to access document database resources",
    // link: "github.com/ottelli/persistence-document-service",
    stack: ["Python", "Flask", "GCP"],
    points: {
      "Why did I make this?":
        "The first minimum-viable-product release of Persistence featured a monolithic backend server that, for the sake of maintenance and development, I decided to break up into independent APIs. Another limitation was the resource storage and retrieval architecture, which I chose to migrate into a document database to improve scalability.",
      "What I built":
        "This service exposes a REST API giving a client application access to document resources hosted on Google Cloud. It's a part of the next iteration of the Persistence full-stack application which holds users training session data consisting of session metadata and sensor streams from sportswatches. The original monolith was written in Python and a core feature was the parsing, indexing, retrieval and filtering of this dataset. For this reason I chose to continue with Python and the Flask microframework for this service.<br/><br/>I made changes to the base resources and the way they are formatted for the client based on changes and new features I hope to implement on the client application. I also wanted to improve the performance to open possibilities for larger response payloads and more complex queries.",
      "What I learned":
        "Having made programs with simple integrations into Google Cloud (for hosting etc.), this was my first complex application on Google Cloud with multiple APIs and services, and has spearheaded my migration of the full stack onto the platform. I feel this was a good service to start this migration as the Python SDK for GCP is extensive and well documented. At this point, I've built many applications with Python and Flask so it feels a lot like home and I'm built up familiarity with the wider suite of tools that surround these applications like ORMs and middlewares.",
    },
  },
  {
    title: "Rho Technologies",
    date: "Oct 2022",
    description: "Landing page for my business",
    link: "www.rhotechnologies.co.uk",
    stack: ["NextJS", "TypeScript", "Tailwind", "GCP"],
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
  // {
  //   title: "Sportswatch Data Analysis",
  //   date: "Feb 2021",
  //   description: "<>",
  //   stack: ["Python"],
  //   points: {},
  // },
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
      Experiment:
        "I conducted multiple trials with each of the 13 participants. There were two data streams output from the trials; gas analysis to assess metabolic efficiency, and gait analysis using an IMU to assess running mechanics.",
      Analysis:
        "In handling the wealth of data derived from the experiment, I employed several mathematical and computational tools. For time series analysis, I utilized Detrended Fluctuation Analysis (DFA) and Sample Entropy (SampEnt). DFA is a method used to identify long-term correlation properties in time series data. In the context of gait analysis, it allowed me to assess the structure of variability within and between the runners' strides. On the other hand, SampEnt was used to determine the informational complexity of gait dynamics over time, shedding light on the regularity and predictability of gait patterns. I used vectorization to greatly improve the efficiency of the processing pipeline.",
      Conclusion: [
        "The key findings from this research showed that every runner has a velocity-variability sweet-spot in their running gait, which is the most energy efficient for them. The relationship between velocity and variability forms a J-shaped function, with the most efficient point representing the trough of the 'J'.",
        "Expert runners typically show a shift to the right on this graph, indicating higher velocity for the same variability, with a deeper and wider trough, suggesting a broader range of efficient speeds.",
        "Both DFA and SampEnt correlated with metabolic efficiency, suggesting that an IMU could be used to estimate gait efficiency. This approach would open up possibilities for more research to be undertaken outside of the lab, and for the development of better training products able to integrate classic performance metrics with previously opaque factors like gait efficiency."
      ],
      Reflection:
        "This research prompted further hypotheses and questions, particularly around the topic of adaptation to terrain. The results suggest that training could be tailored to exploit the individual's sweet-spot and potentially enhance efficiency on different terrain types. It's an exciting avenue for future exploration in sports technology.",
    },
  },
  {
    title: "Computer Vision & Biofeedback",
    date: "Mar 2018",
    description: "Prototype and business plan",
    stack: ["Android"],
    points: {
      "Assigned Task": "Use technology to help prevent sports injuries.",
      "Chosen Design Brief":
        "We concentrated on mitigating the risk of back injuries that frequently occur from deadlifting incorrectly. Our aim was to devise a solution that was technologically innovative, practical, and beneficial to both individuals and the fitness community.",
      Solution:
        "Our proposed solution was a camera to be installed in gyms, with a companion app to provide real-time feedback on the user's form during deadlifts, assessing and alerting them to potential injury risk. The app would also record sessions for later review, enabling personal coaches or trainers to monitor and provide more detailed guidance.",
      "Team Role":
        "I took responsibility for two key aspects of the project. Firstly, I led the work on the business model and financial planning for the implementation of our solution, ensuring that our idea was not only innovative but also economically viable. Secondly, I designed the user interface and experience in Android Studio, thinking about how to clearly and effectively provide feedback to someone during their workout.",
      Conclusion: [
        "We were able to deliver a prototype computer-vision system and clearly communicate our ideas for the user experience, technical rationale behind our solution and our business plan.",
        "The pitch for our solution was well-received. The innovative combination of real-time biofeedback, post-hoc review and business model, resonated with our audience, showing promise in terms of adoption and potential impact on injury prevention.",
      ],
      Reflection:
        "The project was a significant learning experience for me. I strengthened my thinking and technical skills in designing and planning a user experience. However, some of the biggest takeaways came from the business side. I gained valuable insights into the process of financial planning for a tech solution.",
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
        "How does shoe choice effect lower limb shock while running?",
      Experiment:
        "I recruited 5 people to run 3 laps of ~12min around a local park. Each time wearing a different type of shoe. Using an IMU, I measured accelerations at the top of the shin.",
      Analysis:
        "I wrote a MATLAB script to; apply a high- and low-pass filter, detect peaks, and plot the result.<br/>To model the effects on the bones, I constructed a free body diagram, and input values from medical journal papers.<br/>Finally, I conducted a factorial analysis, with factors such as bone density, weight, speed of bone remodelling and impact cycle frequency, to provide context for the differences in transmitted shock between the shoes.",
      Conclusion: [
        "In general, more foam on the shoe, less shock through the shin.",
        "But, materials are <b>very</b> important and a poor quality foam will offer little impact damping.",
        "Shoes are the second principal component after body mass, and account for ~30% of the variance in total strain on the lower leg.",
      ],
      Reflection:
        "This was my first project using IMUs, working with participants, and scripting in MATLAB, so I learnt a great deal from the entire process. There are aspects that I would do differently in follow up work, such as testing on multiple shorter courses with differing surfaces.",
    },
  },
]

export default timeline_text
