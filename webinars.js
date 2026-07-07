/* =========================================================================
   WEBINARS  —  the ONLY file you edit to change the webinar listings.
   -------------------------------------------------------------------------
   To add a webinar: copy one { ... } block below, paste it, edit the fields.
   To remove one: delete its { ... } block (including the trailing comma).
   Past-dated webinars hide themselves automatically — no need to delete them.

   Fields:
     title     text shown as the card heading
     host      presenter / source line
     dateCST   start time in U.S. Central, 24-hour, "YYYY-MM-DDTHH:MM"
     durLabel  e.g. "1 hr", "30 min", "Half-day"
     endLabel  (optional) only for half-day events, e.g. "ends 3:30 PM ET"
     skills    any of: "ai","strategy","video","accessibility","lmsdocebo","authoring"
     overview  1-2 sentence description
     link      registration URL
   ========================================================================= */

/* EDIT MONTHLY: add/remove rows below. dateCST = start in U.S. Central, 24h.
   Past dates auto-hide. For half-day events set durLabel + endLabel. */
var WEBINARS=[
  { title:"The AI Implementation Guide for L&D: Book Release Celebration",
    host:"Megan Torrance · Training Magazine Network",
    dateCST:"2026-06-24T11:00", durLabel:"1 hr",
    skills:["ai","strategy"],
    overview:"Megan Torrance shares key insights from her new ATD Press book — moving teams past AI experimentation into real implementation, using the AI Implementation Canvas for planning, data strategy, and change management.",
    link:"https://www.trainingmagnetwork.com/events/4517" },

  { title:"Create Smarter, Not Harder: Docebo Creator Best Practices & New Features",
    host:"Paul Clance · eSkillz",
    dateCST:"2026-06-25T12:00", durLabel:"30 min",
    skills:["lmsdocebo","authoring"],
    overview:"A fast, hands-on tour of Docebo Creator — best practices and the newest features for building and publishing high-impact courses in a fraction of the time.",
    link:"https://eskillz.com/events/create-smarter-not-harder-docebo-creator-best-practices-new-features/#registration" },

  { title:"Avatars, Agents, & AI, Oh My!",
    host:"Mark Itskowitch · Training Magazine Network",
    dateCST:"2026-07-22T14:00", durLabel:"1 hr",
    skills:["ai","video"],
    overview:"HeyGen Ambassador Mark Itskowitch shows how AI video tools expand what one designer can produce — build a digital twin or use ready-made avatars to bring bold ideas to life affordably.",
    link:"https://www.trainingmagnetwork.com/events/4524" },

  { title:"How Pax8 Built a Best-in-Class Partner Education Program",
    host:"Olivia Reid · eSkillz",
    dateCST:"2026-07-30T12:00", durLabel:"1 hr",
    skills:["strategy","lmsdocebo"],
    overview:"Pax8's learning-tech team shares how they scaled partner education in Docebo — the strategies, tools, and decisions behind their Docebo Inspire Award for Best Customer Education Program.",
    link:"https://eskillz.com/events/how-pax8-built-a-best-in-class-partner-education-program/#registration" },

  { title:"ATD Demo Day: Assessments",
    host:"ATD",
    dateCST:"2026-08-17T10:55", durLabel:"Half-day", endLabel:"ends 3:30 PM ET",
    skills:["strategy"],
    overview:"Free half-day event with live 30-minute demos from five leading assessment tools — see each platform in action and compare solutions side by side to inform your buying decision.",
    link:"https://webinars.td.org/atd-demo-day-assessments-august-2026" },

  { title:"The ADHD-Friendly LMS: Designing for Focus in a Distracted World",
    host:"Sheila James · eSkillz",
    dateCST:"2026-08-27T12:00", durLabel:"1 hr",
    skills:["accessibility","lmsdocebo"],
    overview:"Sheila James reprises her Docebo Inspire session on designing LMS experiences that support focus — practical strategies to reduce friction and build accessible, learner-centered training for everyone.",
    link:"https://eskillz.com/events/the-adhd-friendly-lms-designing-for-focus-in-a-distracted-world/#registration" },

  { title:"ATD Demo Day: Augment L&D with AI",
    host:"ATD",
    dateCST:"2026-06-22T10:55", durLabel:"Half-day", endLabel:"ends 3:30 PM ET",
    skills:["ai","strategy"],
    overview:"Free half-day event with live 30-minute demos from five learning-tech vendors (SmartWinnr, Administrate, The Regis Company, Chronus, Cornerstone) — see AI-driven L&D solutions in action and compare options side by side.",
    link:"https://webinars.td.org/demo-day-augment-ld-with-ai-june-2026" }
];
