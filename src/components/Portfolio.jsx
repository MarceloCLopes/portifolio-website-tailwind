import { Projects } from './Projects'

export const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-8 before:-left-3/4 before:hidden before:lg:block'>
            My latest work
          </h2>
          <p className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quae
            voluptate modi doloribus iure, cum dolorem alias tenetur ex, unde
            facilis quod adipisci quidem. Temporibus tempora itaque minus quod
            ipsum.
          </p>
        </div>
        <Projects />
      </div>
    </section>
  )
}
