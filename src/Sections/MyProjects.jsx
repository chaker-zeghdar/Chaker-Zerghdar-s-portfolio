import React from 'react'

const MyProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Thi9ati",
      description: "A digital platform built to enhance trust and transparency between users.",
      image: "https://res.cloudinary.com/dfxhtf6xh/image/upload/v1766090423/Screenshot_2025-12-18_213009_ecpi0u.png",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "API Integration"],
      link: "https://thi9ati.vercel.app/"
    },
    {
      id: 2,
      title: "HZ Phone",
      description: "A modern web platform showcasing smartphones with a clean UI and smooth user experience.",
      image: "https://res.cloudinary.com/dfxhtf6xh/image/upload/v1766090423/Screenshot_2025-12-18_213043_nmyn00.png",
      techStack: ["React", "supabase", "Tailwind CSS"],
      link: "https://hz-phone-store-yvxa.vercel.app/"
    },
    {
      id: 3,
      title: "GDG Batna Landing Page",
      description: "Responsive landing page for GDG Batna, showcasing events and community activities.",
      image: "https://res.cloudinary.com/dfxhtf6xh/image/upload/v1766090422/Screenshot_2025-12-18_213349_y5syji.png",
      techStack: ["next", "Chart.js", "API Integration"],
      link: "https://gdg-batna.vercel.app/"
    },
    {
      id: 4,
      title: "Zer3aX",
      description: "A hybrid platform combining web and mobile features, designed to streamline user interactions and enhance productivity.",
      image: "https://res.cloudinary.com/dfxhtf6xh/image/upload/v1766090422/Screenshot_2025-12-18_213212_jzdkbk.png",
      techStack: ["React", "Tailwind CSS", "GSAP","AI models"],
      link: "https://zer3a-x-landing-page.vercel.app/"
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
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className='relative z-10 mt-4 w-full py-2 px-4 rounded-lg bg-gradient-to-r from-purple-500/20 to-purple-500/10 border border-purple-500/30 text-purple-300 font-semibold hover:bg-gradient-to-r hover:from-purple-500/40 hover:to-purple-500/20 hover:border-purple-500/60 hover:text-purple-200 transition-all duration-300 flex items-center justify-center gap-2'>
                    View Project
                    <span className='group-hover:translate-x-1 transition-transform duration-300'>→</span>
                  </a>
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
