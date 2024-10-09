const workshops = [
  {
    name: "3D Printing and Design",
    id: "3d-printing-and-design",
    sessions: [
      {
        name: "3D Printing with Metal",
        id: "3d-printing-metal",
        desc: "See the latest in metal 3D printing technologies, from desktop machines (you need a really big desk!) to those designed for machine shops creating high-end and high-volume pieces.",
        speaker: {
          name: "Tobias Grundvig",
          title: "Fabrication Specialist",
          org: "3dCorp Inc.",
          bio: "Tobias Grundvig has metal in his veins. Starting out in traditional steel and aluminum fabrication, he's become obsessed with new technologies that can create finished metal parts quickly and affordably.",
        },
      },
      {
        name: "Homebuilding and 3D Printing",
        id: "homebuilding-and-3d-printing",
        desc: "A new house in 24 hours—can this be our practical solution for making affordable housing for all? See what has been done in this very vertical industry, and discuss how it will grow and be truly affordable—both for those living in the homes, and for the builders that create them.",
        speaker: {
          name: "Jesper Tjørnelund",
          title: "Urban Planner",
          org: "JesperEco Inc.",
          bio: "Jesper Tjørnelundhas been driven to find ways to make efficient, affordable housing for all ever since he was a kid living on the streets with his single dad.",
        },
      },
    ],
  },
  {
    name: "AI and Robotics",
    id: "ai-and-robotics",
    sessions: [
      {
        name: "Automating User Testing",
        id: "automating-user-testing",
        desc: "Eliminating human error and saving time and money are key reasons user testing—at least parts of it—is an ideal job for automation. We'll discuss the advantages and disadvantages of using machines to test a product that will be used by humans.",
        speaker: {
          name: "Thomas Hartmann",
          title: "UX Designer",
          org: "Globe Bank International",
          bio: "Thomas Hartmann believes in humans, and spends her time utilizing ai and robotics to make products more human-manageable.",
        },
      },
      {
        name: "Security in the Age of AI",
        id: "security-in-age-of-ai",
        desc: "With security crises gaining in prevalence, it's more important than ever for us to make sure that our AI can't be hacked. How can we avoid all the data noise out there?",
        speaker: {
          name: "Daniel Ellebæk",
          title: "Cyber Security Specialist",
          org: "Hansel & Petal",
          bio: "Daniel Ellebæk has been with Hansel & Petal for six years. His leadership in AI security is well-documented in his many articles for top security publications.",
        },
      },
    ],
  },
  {
    name: "Arts, Crafts, Fashion, and Fare",
    id: "arts-crafts-fashion-fare",
    sessions: [
      {
        name: "Ideas into Business",
        id: "ideas-into-business",
        desc: "From 3D printed jewelry to hand embroidery, epoxy river tables to boat making, many makers find that there is a market for what they create, and embark on a business. Meet successful makers who have turned their maker energy into successful enterprises.",
        speaker: {
          name: "Jon Bertelsen",
          title: "Art Director",
          org: "CPH Academy",
          bio: "Jon Bertelsen has run a successful side business selling her paintings for the last seven years, and founded the local arts-makerspace in her neighborhood. We have no idea how she finds time to work for us, we're just glad she does.",
        },
      },
      {
        name: "Making Things from Other Things",
        id: "making-things-from-other-things",
        desc: "When you think 'maker', you don't usually think about olive oil. But olive oil's use has gone far beyond its role on the dinner table. This session shows and tells about artisanal creations that include olive oil and other usually-used-for-something-else ingredients, from soap to wood polish.",
        speaker: {
          name: "Tess Løvgreen",
          title: "Product Development Specialist",
          org: "Two Trees Olive Oil",
          bio: "Tess Løvgreen's favorite part of her job is getting to invent things with people and companies from all over the world. She also heads up the annual customer maker contest, featuring people who make amazing things with Two Trees Olive Oil.",
        },
      },
    ],
  },
  {
    name: "Community Service",
    id: "community-service",
    sessions: [
      {
        name: "Community Service Event: CPHAcademyCares ",
        id: "cph-academy-cares",
        desc: "Join your fellow makers at our Annual Red30Cares community service event. Red30Cares work in concerted effort to improve the lives of others and to inspire community, activism, and philanthropy on a large scale",
        speaker: {
          name: "Kim Melkane",
          title: "Account Executive",
          org: "CPH Academy",
          bio: "Kim Melkane likes to tell others that there is literally a maker or two inside of her since she has spent most of her life morbidly obese due to a rare medical condition. She credits the maker community with giving her the confidence and courage to create.",
        },
      },
    ],
  },
  {
    name: "Education and Training",
    id: "education-and-training",
    sessions: [
      {
        name: "The End Product is Human",
        id: "end-product-is-human",
        desc: "The aspects of the learning experience continually changes, and has been forced to take some giant leaps in this past year. Learn how to develop new technology and experiences while keeping in mind that the end “product” is a human that is counting on you to learn.",
        speaker: {
          name: "Jörg Oertel",
          title: "LEX Designer",
          org: "Binaryville",
          bio: "Jörg Oertel is widely known as a champion of accessible education, receiving awards for ingenuity in online learning for students with special needs.",
        },
      },
      {
        name: "Hands-On Hacks",
        id: "hands-on-hacks",
        desc: "Join your fellow makers in learning their favorite hacks in popular maker categories.",
        speaker: {
          name: "Steffen S Helbo",
          title: "President",
          org: "Fabler Innovations",
          bio: "Steffen S Helbo is a maker hack geek, or so he says, and loves collecting and distributing crowdsourced maker information.",
        },
      },
    ],
  },
  {
    name: "Entertainment",
    id: "entertainment",
    sessions: [
      {
        name: "Experience Makers Festival",
        id: "experience-makers-festival",
        desc: "While composed music has long been considered an art, sound is still considered more of a technical skill than an art. As a broadcast engineer, Beverley has been an advocate for sound to be treated as an art, with the BE conducting the blend of voice, music, background noise, and sound effects to create content that greatly enhances the visual aspects of a broadcast.",
        speaker: {
          name: "Maria Zoey Sommer",
          title: "Broadcast Engineer",
          org: "CPH Academy",
          bio: "While Maria Zoey Sommer is known as a tech head, she also has a secret musical side playing Viennese oboe and other woodwinds.",
        },
      },
    ],
  },
  {
    name: "Ethics and Environment",
    id: "ethics-and-environment",
    sessions: [
      {
        name: "The Solar Bowler",
        id: "solar-bowler",
        desc: "Meet the makers of The Solar Bowler, a fictional character that uses unique and sustainable ways to power his favorite pastime.",
        speaker: {
          name: "Marc Kluge",
          title: "Controls System Lead",
          org: "KinetEco Inc.",
          bio: "Marc Kluge balances his serious job with another serious job: Keeping The Solar Bowler busy creating new ways to power his bowling alley.",
        },
      },
      {
        name: "Managing Virtual Teams",
        id: "managing-virtual-teams",
        desc: "How do you keep your team invested in projects if they are all or partly remote? What are your biggest challenges and the best tools to meet those challenges? Join these managers in a roundtable discussion as they share the tools and methodologies that work for them.",
        speaker: {
          name: "Mathias Nielsen",
          title: "Chief Innovation Officer",
          org: "The Landon Hotel",
          bio: 'Mathias Nielsen calls himself a "permanently remote" employee as part of the executive team that manages a worldwide accommodation business.',
        },
      },
    ],
  },
  {
    name: "Keynote",
    id: "keynote",
    sessions: [
      {
        name: "We are All Makers",
        id: "we-are-all-makers",
        desc: "There is a maker inside of each of us—and some get out more often than others. From innovating a way to make a job easier, to renovating a tired chest of drawers into a piece of statement home decor, bits of maker make it into our days on a regular basis. Here's how to embrace and encourage that maker in everyone around us.",
        speaker: {
          name: "Caroline Simonsen",
          title: "Account Executive",
          org: "CPH Academy",
          bio: "Caroline Simonsen likes to tell others that there is literally a maker or two inside of her since she has spent most of her life morbidly obese due to a rare medical condition. She credits the maker community with giving her the confidence and courage to create.",
        },
      },
      {
        name: "Making a Maker Community",
        id: "making-a-maker-community",
        desc: "One of the things we hear most often is that the favorite part of a makerspace is being able to socialize with other people interested in the same things you are, and learning about areas of making that you want to learn about. How do we build and nurture this community?",
        speaker: {
          name: "Steven Albury",
          title: "Director of Special Projects",
          org: "City of Orange Valley",
          bio: "Steven Albury thinks all of his projects are special, especially the one in which he actively interacts with people in local makerspaces, and talks to the community about taking advantage of these spaces. Her ultimate goal is to help more women and seniors get involved.",
        },
      },
    ],
  },
  {
    name: "Virtual and Augmented Reality",
    id: "virtual-and-augmented-reality",
    sessions: [
      {
        name: "Augmented Real(ity) Estate",
        id: "ar-estate",
        desc: "Imagine if your company is moving you to a state too far away to spend time looking for a new place to live. Wouldn't it be nice to be able to meet an agent, walk through a house, open doors, go up steps, and check out the neighborhood from the comfort of your couch? Check out the latest innovations in augmented reality in the real estate market, and discuss its economic benefits.",
        speaker: {
          name: "Grant Jacobson",
          title: "Owner",
          org: "Dimitrova Gmbh ",
          bio: "Todorka Dimitrova  has been creating virtual walkthroughs for real estate clients for years, so it only makes sense for her to become an augmented reality go-to creative. About 40 percent of his clients use Grant's proprietary augmented reality services.",
        },
      },
      {
        name: "VR in Town and City Planning",
        id: "vr-town-and-city-planning",
        desc: "The City of Orange Valley is one of the first in the state to embrace the use of VR in its town planning. Panelists share examples of zoning request mockups, a proposed development, and other infrastructure proposals and plans that help both citizens and developers envision and edit prior to implementation.",
        speaker: {
          name: "Michael Svejstrup",
          title: "Wastewater Management Specialist",
          org: "Leaf & Mortar",
          bio: "Michael Svejstrup has worked tirelessly in helping organizations design and model systems that bring normally 'hidden' infrastructures—such as the wastewater management systems he designs and implements—to life using virtual reality.",
        },
      },
    ],
  },
];

export function getSession({ sessionId, workId }) {
  return workshops
    .find(({ id }) => id === workId)
    .sessions.find(({ id }) => id === sessionId);
}

export function getWorkshop(workId) {
  return workshops.find(({ id }) => id === workId);
}

export function getWorkshops() {
  return workshops.map(({ name, id }) => ({ name, id }));
}
