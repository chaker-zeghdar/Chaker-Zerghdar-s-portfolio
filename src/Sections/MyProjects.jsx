import React from 'react'

const MyProjects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product listings, shopping cart, and payment integration.",
      image: "/images/logos/company-logo-1.png",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      image: "/images/logos/company-logo-2.png",
      techStack: ["React", "Firebase", "Tailwind CSS"],
      link: "#"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for tracking social media metrics across multiple platforms.",
      image: "/images/logos/company-logo-3.png",
      techStack: ["React", "Chart.js", "API Integration"],
      link: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing projects and skills with smooth animations.",
      image: "/images/logos/company-logo-4.png",
      techStack: ["React", "Tailwind CSS", "GSAP"],
      link: "#"
    },
    {
      id: 5,
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts and interactive weather maps.",
      image: "/images/logos/company-logo-1.png",
      techStack: ["React", "Weather API", "Geolocation"],
      link: "#"
    },
    {
      id: 6,
      title: "Learning Platform",
      description: "Online learning platform with course management, video streaming, and progress tracking.",
      image: "/images/logos/company-logo-2.png",
      techStack: ["React", "Node.js", "PostgreSQL"],
      link: "#"
    }
  ]

  return (
    <section id='projects' className='relative overflow-hidden py-20 px-5 md:px-20'>
      <div className='flex flex-col gap-16'>
        {/* TITLE */}
        <div className='flex flex-col gap-4 items-center text-center'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
            My Projects
          </h2>
          <p className='text-white-50 text-lg md:text-xl max-w-2xl'>
            Explore my latest projects and creative works built with modern technologies
          </p>
        </div>

        {/* PROJECTS GRID - CENTERED */}
        <div className='flex justify-center'>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl'>
            {projects.map((project) => (
              <div
                key={project.id}
                className='group relative overflow-hidden rounded-lg bg-black-200 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-purple cursor-pointer flex flex-col h-full'
              >
                {/* IMAGE */}
                <div className='h-48 w-full overflow-hidden flex-shrink-0'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                  />
                </div>

                {/* GRADIENT OVERLAY ON HOVER */}
                <div className='absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />

                {/* CONTENT */}
                <div className='flex flex-col justify-between p-5 md:p-6 flex-grow'>
                  <div className='relative z-10 flex flex-col gap-3'>
                    {/* TITLE */}
                    <h3 className='text-lg md:text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 line-clamp-2'>
                      {project.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className='text-xs md:text-sm text-white-50 leading-relaxed line-clamp-2'>
                      {project.description}
                    </p>

                    {/* TECH STACK */}
                    <div className='flex flex-wrap gap-2 mt-2'>
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className='text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 group-hover:bg-purple-500/40 group-hover:border-purple-500/60 transition-all duration-300'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* VIEW BUTTON */}
                  <button className='relative z-10 mt-4 w-full py-2 px-4 rounded-lg bg-gradient-to-r from-purple-500/20 to-purple-500/10 border border-purple-500/30 text-purple-300 font-semibold hover:bg-gradient-to-r hover:from-purple-500/40 hover:to-purple-500/20 hover:border-purple-500/60 hover:text-purple-200 transition-all duration-300 flex items-center justify-center gap-2'>
                    View Project
                    <span className='group-hover:translate-x-1 transition-transform duration-300'>→</span>
                  </button>
                </div>

                {/* BORDER GLOW ON HOVER */}
                <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyProjects
