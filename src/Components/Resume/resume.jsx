import React from 'react'
import "./resume.css"


const Resume = () => {

let obj = [
    {"logo" : "https://upload.wikimedia.org/wikipedia/commons/b/b0/General_Motors_%282021%29.svg",
    'description': 'Committed code to customer and business-facing React and NodeJS ecommerce applications with emphasis in frontend development. Built a strong understanding of JavaScript and its developer ecosystem.',
    'bulletPoint': 
        [
            'Devised and created a developer utility to view and manage frontend environment variables in development mode to expedite their troubleshooting.', 
            'Strengthened application security through several fixes related to Webpack bundling.',
            'Implemented and iterated on many components throughout GM’s parts and accessories websites, including vehicle pickers, product pages, checkout forms, and more.',
            'Contributed to a rewrite of an internal application used to manage orders, catalogs, and inventory by dealers and distribution centers, speeding up their experiences through migration to React.',
            'Added code formatting as a pre-commit action and regularly pushed for higher utilization of unit testing across development pipelines and a team of 20-30 developers across projects.'
        ],
    'label': 'professional Experience'
}, 
{"logo" : "https://upload.wikimedia.org/wikipedia/commons/b/b0/General_Motors_%282021%29.svg",
'description': `I started my undergraduate at Clemson University in fall 2016, not at all confident that I'd be an electrical engineer, but then I found Computer Science. After one introductory course on the track to add it as a minor, I made it my major and never looked back.

I transferred to Coastal Carolina University, which was closer to home, at the start of my junior year and wrapped up my studies on time. I was one class away from a minor in Applied Mathematics, but life got complicated at the wrong time for me and I couldn't quite wrap it up. I had a good experience at Coastal, and would certainly recommend it to anyone looking to get a degree on the coast of South Carolina.`,
'bulletPoint': [],
    'label': 'education'
}]

  return (
   <section className='resume section container' id="resume">
      <h4 className='resume_title'> This is where i've honed my skills</h4>
      <p className='resume_intro_paragraph'>I have four years of full-time experience, well versed in frontend technologies like UI component frameworks and features of the DOM, accustomed to JavaScript and TypeScript techniques, and familiar with deployment utilities ranging from Webpack to Docker. Above all (at least professionally) I value innovation and continuous learning.</p>
        
   </section>
  )
}

export default Resume
