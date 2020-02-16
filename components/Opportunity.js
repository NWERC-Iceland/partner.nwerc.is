
export default function Opportunity(props) {
  const rad = 10
  return pug`
    div.rounded-md.overflow-hidden.shadow-lg.bg-white.lg_flex
      if props.image
        div.h-48.lg_h-auto.lg_w-48.flex-none.bg-cover.bg-center(style={
          backgroundImage: 'url(' + props.image + ')'
        })
      div.px-6.py-4
        h1.font-bold.text-xl.text-gray-800= props.title
        if props.limit
          p.text-sm.flex.items-center.mb-2
            svg.h-5.w-5.fill-current.text-gray-500.-ml-1.mr-1(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20")
              path(d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z")
            span.text-gray-600= props.limit == 'limited' ? 'Limited availability' : props.limit + ' available'
        p.text-gray-700.text-base= props.description
`;
}
