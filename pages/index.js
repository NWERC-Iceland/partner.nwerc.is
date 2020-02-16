import Link from 'next/link';
import Opportunity from '../components/Opportunity.js';

import "../styles/index.css";

const Check = () => pug`
  svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20")
    path(d="M8.294 16.998c-.435 0-.847-.203-1.111-.553L3.61 11.724a1.392 1.392 0 01.27-1.951 1.392 1.392 0 011.953.27l2.351 3.104 5.911-9.492a1.396 1.396 0 011.921-.445c.653.406.854 1.266.446 1.92L9.478 16.34a1.39 1.39 0 01-1.12.656c-.022.002-.042.002-.064.002z")
`;

const SectionHeader = (props) => pug`
  h1.text-4xl.font-bold.text-gray-900.text-center.mx-6= props.children
  hr.w-64.mx-auto.mb-8
`;

const opportunities = [
  {
    title: 'Company visit',
    limit: 'limited',
    description: `
      After the practice contest attendees are off to excursions. Invite the
      contestants to your office and show them what is so great about working at
      your company.
    `,
    image: '/images/company-visit.png'
  },
  {
    title: 'Lanyards',
    limit: 1,
    description: `
All attendees receive their name badges on
lanyards upon registering and will continue to wear
them throughout the event! Show your
support through one of the most seen sponsored
pieces within the event.
    `,
    image: '/images/lanyards.png'
  },
  {
    title: 'Balloons',
    limit: 1,
    description: `
Teams receive a colored balloon for every problem they solve, creating a
stunning visual effect on the venue during the competition. Get your logo on
each of the balloons to become part of this unique experience.
    `,
    image: '/images/balloons.png'
  },
  {
    title: 'Excursion',
    limit: 'limited',
    description: `
TODO: Something about sponsoring an excursion
    `,
    image: '/images/excursion.png'
  },
  {
    title: 'Event banquet',
    limit: 1,
    description: `
TODO: Something about sponsoring the dinner
    `,
    image: '/images/banquet.png'
  },
//  {
//    title: 'Video recording',
//    limit: 1,
//    description: `
//Extend your presence long after the live event
//concludes with this video recording sponsorship.
//This sponsor will be recognized for providing
//recordings of the  for attendees to
//review and reference post-conference.
//    `,
//    image: '/images/banquet.png'
//  },
  {
    title: 'Desktop background',
    limit: 1,
    description: `
During the competition, teams will spend most of their time on their
assigned workstations. Make your company stand out during the contest with your
company logo as the desktop wallpaper on each workstation.
    `,
    image: '/images/computer.png'
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
    title: 'Exhibit booth',
    limit: 'limited',
    description: `
TODO: Booth
    `,
    image: '/images/booth.png'
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
];

// Website logo
// Scoreboard logo
// Tech talk (1 available)
// Follow up email (1 available)

export default function Index() {
  return pug`
    div.parallax.text-gray-900
      div.background
        div.pt-64.sm_pt-128.pb-56.sm_pb-32.bg-center.bg-cover(style={ backgroundImage: 'url(/images/banner_small.png)' })
      div.foreground.mt-64.sm_mt-128
        div.h-56.sm_h-32(style={ backgroundColor: 'rgba(0,0,0,0.5)' })
          div.container.m-auto.flex.sm_flex-row.flex-col.items-center.justify-center.h-full
            img.mx-auto.sm_mx-0.h-20(src="/images/nwerc-2020-logo-white.png")
            h1.sm_ml-8.text-3xl.text-gray-200.font-bold.text-center.sm_text-left.mt-3.sm_mt-0 Partnership opportunities

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
              div.w-full.overflow-y-scroll.px-10
                table#tiers.max-w-4xl.w-full.mx-auto.relative
                  div.margin-hack
                  thead
                    tr
                      th
                      th
                        div.text-xl.-mb-1 Gold
                      th
                        div.text-xl.-mb-1 Silver
                      th
                        div.text-xl.-mb-1 Bronze
                    tr
                      th
                      th.text-lg.font-normal.font-mono.text-green-700 &euro;20,000
                      th.text-lg.font-normal.font-mono.text-green-700 &euro;10,000
                      th.text-lg.font-normal.font-mono.text-green-700 &euro;5,000
                    tr
                      th
                      th.font-normal.text-sm.text-gray-700.pb-3 1 available
                      th.font-normal.text-sm.text-gray-700.pb-3 2 available
                      th.font-normal.text-sm.text-gray-700.pb-3 3 available
                  tbody
                    tr
                      td Exhibit booth
                      td 30x30
                      td 20x20
                      td 10x10
                    tr
                      td Logo on website
                      td
                        div.check
                          Check
                      td
                        div.check
                          Check
                      td
                        div.check
                          Check
                    tr
                      td Logo on T-shirts and scoreboard
                      td
                        div.check
                          Check
                      td
                        div.check
                          Check
                      td
                    tr
                      td Goodie bag insert
                      td
                        div.check
                          Check
                      td
                        div.check
                          Check
                      td
                    tr
                      td Tech talk
                      td
                        div.check
                          Check
                      td
                      td
                    tr
                      td Follow-up email to contestants
                      td
                        div.check
                          Check
                      td
                      td

            div.mt-12
              SectionHeader A la carte opportunities
              div.grid.grid-cols-1.sm_grid-cols-2.md_grid-cols-3.lg_grid-cols-2.gap-6.py-6.px-6.sm_px-0.mx-6
                each opp in opportunities
                  Opportunity(key=opp.title,
                              title=opp.title,
                              limit=opp.limit,
                              description=opp.description,
                              image=opp.image)

            div.mt-12
              SectionHeader Get in touch
              span TODO
`;
}
