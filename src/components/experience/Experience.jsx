import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Here's some of</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__totalcae'>
          <h3>Software Development Intern</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <h4>TotalCAE (Summer 2022)</h4>
              <p>
                At TotalCAE, I developed an automated drop-in replacement program for SLURM (a Job Scheduler for Linux) 
                that gives clients enhanced details such as ID, Name, Job, Partition, etc. on submitted jobs automatically
                via email. Another one of my responsibilities was to optimize and modify pre-existing job-scheduling code to
                allow it to support a much heavier load and drastically improve runtime. Additionally, I implemented 
                new customization features for clients such as a configurable tail-file size to job emails, support for multiple
                file types, and an adjustable verbosity level.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience