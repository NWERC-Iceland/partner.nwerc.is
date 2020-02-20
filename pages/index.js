import Link from 'next/link';
import Opportunity from '../components/Opportunity.js';
import Head from 'next/head';

import "../styles/index.css";

const Check = () => pug`
  div.check
    svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20")
      path(d="M8.294 16.998c-.435 0-.847-.203-1.111-.553L3.61 11.724a1.392 1.392 0 01.27-1.951 1.392 1.392 0 011.953.27l2.351 3.104 5.911-9.492a1.396 1.396 0 011.921-.445c.653.406.854 1.266.446 1.92L9.478 16.34a1.39 1.39 0 01-1.12.656c-.022.002-.042.002-.064.002z")
`;

const SectionHeader = (props) => pug`
  h1.text-4xl.font-bold.text-gray-900.text-center.mx-6= props.children
  hr.w-64.mx-auto.mb-8
`;

const CallingCard = (props) => pug`
  div.pb-10.text-gray-200.mx-8.w-80.-mr-2
    if props.name
      div.flex.my-3
        svg.w-6.min-w-6.fill-current(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24")
          path(d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z")
        span.ml-3.text-xl.tracking-tight= props.name
    if props.email
      div.flex.my-3
        svg.w-6.min-w-6.fill-current(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24")
          path(d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 0 1-.9 0L4 9.62V18h16V9.62z")
        a.ml-3.text-lg.text-color-gray-400.tracking-tighter.border-b.border-dotted.hover_border-solid(href="mailto:" + props.email)= props.email
    if props.phone
      div.flex.my-3
        svg.w-6.min-w-6.fill-current(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24")
          path(d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm0 2v16h8V4H8zm4 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2z")
        a.ml-3.text-lg.text-color-gray-400.tracking-tighter.border-b.border-dotted.hover_border-solid(href="tel:" + props.phone)= props.phone
`;

const tier_rows = [
  {
    title: "Company booth",
    gold: pug`
      span.text-gray-700.text-xs.font-bold.uppercase.tracking-wide Large
    `,
    silver: pug`
      span.text-gray-700.text-xs.font-bold.uppercase.tracking-wide Medium
    `,
    bronze: pug`
      span.text-gray-700.text-xs.font-bold.uppercase.tracking-wide Medium
    `,
    info: {
      title: 'Company booth',
      limit: null,
      description: `
Mingle with the contestants on the event location and show them what's so
awesome about your company, and why they should come work for you!
  `,
      image: '/images/booth.png'
    }
  },
  {
    title: "Logo in event material",
    gold: Check(),
    silver: Check(),
    bronze: Check(),
    info: {
      title: 'Logo in event material',
      limit: null,
      description: `
As an official partner your logo will be featured on our website, and in related event material.
      `,
      image: '/images/partners.png'
    }
  },
  {
    title: "Logo on T-shirts",
    gold: Check(),
    silver: Check(),
    bronze: null,
    info: {
      title: 'Logo on T-shirts',
      limit: null,
      description: `
All attendees receive their branded T-shirts
upon registering and will continue to wear
them throughout the event! Show your
support through one of the most seen sponsored
pieces within the event.
      `,
      image: '/images/shirts.png'
    }
  },
  // {
  //   title: "Logo on scoreboard",
  //   gold: Check(),
  //   silver: Check(),
  //   bronze: null,
  //   info: null
  // },
  {
    title: "Goodie bag insert",
    gold: Check(),
    silver: Check(),
    bronze: null,
    info: {
      title: 'Goodie bag insert',
      limit: null,
      description: `
All attendees receive their goodie bag upon registering. Give them a pamphlet
and a fun little item to bring home to keep them reminded of you.
      `,
      image: '/images/toy.png'
    }
  },
  {
    title: "Tech talk",
    gold: Check(),
    silver: null,
    bronze: null,
    info: {
      title: 'Tech talk',
      limit: null,
      description: `
Go in-depth about the coolest projects your company works on. Leave the
attendees with stars in their eyes by giving this year's Tech talk!
      `,
      image: '/images/talk.png'
    }
  },
  {
    title: "Follow-up email to contestants",
    gold: Check(),
    silver: null,
    bronze: null,
    info: {
      title: 'Follow-up email to contestants',
      limit: null,
      description: `
Finish off your recruitment campaign with a custom email sent out to all contestants after they've returned back home.
      `,
      image: '/images/thinking.png'
    }
  },
  {
    title: "Lanyard branding",
    gold: Check(),
    silver: null,
    bronze: null,
    info: {
      title: 'Lanyards',
      limit: null,
      description: `
All attendees receive their name badges on
lanyards upon registering and will continue to wear
them throughout the event! Show your
support through one of the most seen sponsored
pieces within the event.
      `,
      image: '/images/lanyards.png'
    }
  },
  {
    title: "Balloon branding",
    gold: Check(),
    silver: null,
    bronze: null,
    info: {
      title: 'Balloons',
      limit: null,
      description: `
Teams receive a colored balloon for every problem they solve, creating a
stunning visual effect on the venue during the competition. Get your logo on
each of the balloons to become part of this unique experience.
      `,
      image: '/images/balloons.png'
    }
  },
  {
    title: "Workstation branding",
    gold: Check(),
    silver: null,
    bronze: null,
    info: {
      title: 'Workstation branding',
      limit: null,
      description: `
During the competition, teams will spend most of their time on their
assigned workstations. Make your company stand out during the contest with your
company logo as the desktop wallpaper on each workstation.
      `,
      image: '/images/computer.png'
    }
  },
];

const opportunities = [
  {
    title: 'Excursion',
    limit: 'limited',
    description: `
After the practice contest attendees have free time. Invite them on an
excursion and show them a good time, with your company in the spotlight.
    `,
    image: '/images/excursion.png'
  },
  {
    title: 'Company visit',
    limit: 'limited',
    description: `
       Host your own excursion! Invite the contestants to your office and
       show them what is so great about working at your company.
    `,
    image: '/images/company-visit.png'
  },
  {
    title: 'Event banquet',
    limit: 'exclusive',
    description: `
Host the exclusive event banquet, welcoming attendees with a speech and
accompanying branding. Your company's generosity will not go unnoticed.
    `,
    image: '/images/banquet.png'
  },
  {
    title: 'Sponsored task',
    limit: 3,
    description: `
The judges will create your own custom branded programming task, to be presented
to the teams during the practice contest. Your company will be at the top of
the teams' minds while they solve your task.
    `,
    image: '/images/math.png'
  },
  {
    title: 'Company team',
    limit: 'limited',
    description: `
Do you want to see how your employees rank against the top programmers in the
region, while being featured on the scoreboard? Form a company team of three
and take part in the actual contest.
    `,
    image: '/images/company-team.png'
  },
  {
    title: 'New in 2020',
    limit: null,
    description: pug`
    span Want to do something different? Get in touch &mdash; we would be happy to hear you out!
    `,
    image: '/images/balloon_cluster.png'
  },
];

class Index extends React.Component {
  componentDidMount() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    document.body.className += " " + (iOS ? "ios" : "non-ios");
  }

  render() {
    return pug`
    Head
      title NWERC Partnership opportunities
      link(rel="icon" href="/images/favicon_small.png" sizes="32x32")
      link(rel="icon" href="/images/favicon_large.png" sizes="192x192")
      link(rel="apple-touch-icon-precomposed" href="/images/favicon_large.png")
      meta(name="msapplication-TileImage" content="/images/favicon_large.png")

    div.parallax.text-gray-900
      div.background
        div.pt-64.sm_pt-128.pb-56.sm_pb-32.bg-center.bg-cover(style={ backgroundImage: 'url(/images/banner_small.png)' })
      div.foreground
        div#header.h-56.sm_h-32(style={ backgroundColor: 'rgba(0,0,0,0.5)' })
          div.container.m-auto.flex.sm_flex-row.flex-col.items-center.justify-center.h-full
            img.mx-auto.sm_mx-0.sm_ml-10.h-20(src="/images/nwerc-2020-logo-white.png")
            h1.sm_ml-8.text-3xl.text-gray-200.font-bold.text-center.sm_text-left.mt-3.sm_mt-0.mx-10.sm-mr-0 Partnership opportunities


        div.bg-gray-100.pt-6
          div.container.m-auto

            div.text-gray-800.text-lg.tracking-tight.leading-snug.text-center.pt-2.px-6.max-w-3xl.mx-auto
              p.mb-5.
                Every year #[b over 300 of the brightest Computer Science students] from over 60
                universities in Northwestern Europe compete in teams of three in a battle of
                the brains #[b programming competition] for fame and glory.

                With a dozen tough algorithmic and mathematical problems to solve in a matter
                of hours, and coding speed and accuracy being crucial, these are truly some of
                the #[b top programmers] in the region, if not the world.

              p.mb-5.
                So, #[b where do you come in?] With all of this talent #[b close to graduating], they are
                looking towards the future and deciding their next steps. You need to make sure
                your company is at the forefront of this decision process.

                #[b Become a partner] and join us for the three-day event in #[i November of 2020] at
                #[a.text-red-700.hover_text-red-600(href="https://en.ru.is/") Reykjavík University], Iceland, and make sure this top talent does not miss
                opportunities at your company.

            div.mt-12
              SectionHeader Partner tiers and benefits
              p.w-1_2.text-center.mx-auto.mb-10.text-md.text-gray-800.
                Choose a partnership tier with exposure ranging
                from a company booth to owning the event, giving the tech
                talk, along with accompanying event branding.

              div.overflow-x-auto
                table#tiers.max-w-4xl.w-full.mx-auto.mb-10
                  thead
                    tr
                      th.pad
                      th
                      th
                        div.text-xl.-mb-1 Gold
                      th
                        div.text-xl.-mb-1 Silver
                      th
                        div.text-xl.-mb-1 Bronze
                      th.pad
                    tr
                      th.pad
                      th
                      th.font-normal.text-sm.text-gray-700.pb-3 1 available
                      th.font-normal.text-sm.text-gray-700.pb-3 2 available
                      th.font-normal.text-sm.text-gray-700.pb-3 Limited availability
                      th.pad
                  tbody
                    each tier_row in tier_rows
                      tr(key=tier_row.title)
                        td.pad
                        td.title.info-wrapper
                          div.min-w-64
                            if tier_row.info
                              div.info.max-w-xs.lg_max-w-lg
                                Opportunity(key=tier_row.info.title,
                                            title=tier_row.info.title,
                                            limit=tier_row.info.limit,
                                            description=tier_row.info.description,
                                            image=tier_row.info.image)
                            span= tier_row.title
                            if tier_row.info
                              svg.fill-current.w-4.min-w-4.ml-2.text-blue-700.inline-block(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24")
                                path(d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10.59 8.59a1 1 0 1 1-1.42-1.42 4 4 0 1 1 5.66 5.66l-2.12 2.12a1 1 0 1 1-1.42-1.42l2.12-2.12A2 2 0 0 0 10.6 8.6zM12 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2z")
                        td= tier_row.gold
                        td= tier_row.silver
                        td= tier_row.bronze
                        td.pad

            div.mt-12
              SectionHeader A la carte opportunities
              p.w-1_2.text-center.mx-auto.mb-4.text-lg.text-gray-800.
                Pick and choose from these additional opportunities.

              div.grid.grid-cols-1.sm_grid-cols-2.md_grid-cols-3.lg_grid-cols-2.gap-6.py-6.px-6.sm_px-0.mx-6
                each opp in opportunities
                  Opportunity(key=opp.title,
                              title=opp.title,
                              limit=opp.limit,
                              description=opp.description,
                              image=opp.image)

            div.mt-12
              SectionHeader Get in touch
              p.w-1_2.text-center.mx-auto.mb-4.text-lg.text-gray-800.
                Have any questions, or ready to become a partner? Let us know!
              
          div.mt-10.pt-12.pb-2.bg-gray-800
            div.container.mx-auto.flex.flex-col.items-center.lg_flex-row.lg_justify-center.lg_items-start
              CallingCard(name="Bjarki Ágúst Guðmundsson",
                          email="bjarki.agust@gmail.com",
                          phone="+354 821-6233")
              CallingCard(name="Unnar Freyr Erlendsson",
                          email="unnar@google.com",
                          phone="+49 162 720 0579")

`;
  }
}

export default Index;
