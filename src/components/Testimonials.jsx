import { TestimonialSlider } from './TestimonialSlider'

export const Testimonials = () => {
  return (
    <section id='testimonials' className='section bg-secondary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-8 before:-left-64 before:hidden before:lg:block'>
            What other people say
          </h2>
          <p className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quae
            voluptate modi doloribus iure, cum dolorem alias tenetur ex, unde
            facilis quod adipisci quidem. Temporibus tempora itaque minus quod
            ipsum.
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  )
}
