import React from 'react'

const ExperienceEvents = () => {
  const experiences = [
    {
      id: 1,
      title: "Web Development Hackathon",
      description: "Participated in a 48-hour hackathon where I built a full-stack web application. Won the Best UI/UX award for creating an intuitive and visually stunning interface.",
      image: "/images/logos/company-logo-1.png",
      date: "2024"
    },
    {
      id: 2,
      title: "React Workshop",
      description: "Attended an advanced React workshop covering state management, performance optimization, and modern hooks patterns. Enhanced my skills in building scalable applications.",
      image: "/images/logos/company-logo-2.png",
      date: "2024"
    },
    {
      id: 3,
      title: "Tech Conference 2024",
      description: "Participated as a speaker and attendee in a major tech conference. Networked with industry leaders and learned about the latest trends in web development.",
      image: "/images/logos/company-logo-3.png",
      date: "2024"
    },
    {
      id: 4,
      title: "Design Systems Seminar",
      description: "Completed an intensive seminar on building scalable design systems. Learned best practices for component documentation and design consistency across projects.",
      image: "/images/logos/company-logo-4.png",
      date: "2023"
    }
  ]

  return (
    <section id='experience' className='relative overflow-hidden py-20 px-5 md:px-20'>
      <div className='flex flex-col gap-16'>
        {/* TITLE */}
        <div className='flex flex-col gap-4 items-center text-center'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
            My Experience
          </h2>
          <p className='text-white-50 text-lg md:text-xl max-w-2xl'>
            Events, hackathons, and learning experiences that shaped my journey as a developer
          </p>
        </div>

        {/* CARDS GRID */}
        <div className='flex justify-center'>
          <div className='w-full h-250 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl'>
            {experiences.map((event) => (
            <div
              key={event.id}
              className='group relative overflow-hidden rounded-lg bg-black-200 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-purple cursor-pointer flex flex-col h-full min-h-96'
            >
              {/* IMAGE - TOP (40%) */}
              <div className='h-2/5 flex-shrink-0 overflow-hidden'>
                <div className='w-full h-full flex items-center justify-center bg-black-100 border-b border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300'>
                  <img
                    src={event.image}
                    alt={event.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                  />
                </div>
              </div>

              {/* CONTENT - BOTTOM (60%) */}
              <div className='h-3/5 flex flex-col justify-between p-4 md:p-6'>
                {/* GRADIENT OVERLAY ON HOVER */}
                <div className='absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />

                <div className='relative z-10 flex flex-col gap-3'>
                  {/* DATE */}
                  <span className='text-xs font-semibold text-purple-500'>
                    {event.date}
                  </span>

                  {/* TITLE */}
                  <h3 className='text-sm md:text-base font-bold text-white group-hover:text-purple-400 transition-colors duration-300 line-clamp-2'>
                    {event.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className='text-xs md:text-sm text-white-50 leading-relaxed line-clamp-3'>
                    {event.description}
                  </p>
                </div>

                {/* LINK ARROW */}
                <div className='relative z-10 flex items-center gap-2 text-purple-500 group-hover:text-purple-400 transition-colors duration-300 mt-3'>
                  <span className='text-xs font-semibold'>Learn more</span>
                  <span className='group-hover:translate-x-1 transition-transform duration-300'>→</span>
                </div>
              </div>

              {/* BORDER GLOW ON HOVER */}
              <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none' />
            </div>
          ))}          </div>        </div>
      </div>
    </section>
  )
}

export default ExperienceEvents
