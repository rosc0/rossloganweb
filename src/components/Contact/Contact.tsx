import Title from '../Title'

interface ContactProps {
  contactRef: React.RefObject<HTMLDivElement>
}

function Contact({ contactRef }: ContactProps) {
  return (
    <article ref={contactRef} className='mt-16 mb-12 lg:mt-36 lg:mb-20'>
      <Title text='Contact' />
      <div className='text-white'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ipsum eget dolor tincidunt interdum. In finibus gravida metus id maximus. Sed et luctus dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vitae lorem eros. Pellentesque a neque consequat, venenatis erat eleifend, sollicitudin diam. Nunc tortor erat, malesuada id interdum sit amet, vestibulum eu mauris.
        <br />
        <br />
        Ut vitae lacus augue. Maecenas volutpat, justo ac pretium convallis, mauris nisi eleifend mi, semper dapibus sem mi non ante. Morbi rutrum erat molestie, consectetur massa blandit, pellentesque risus. Suspendisse eget sapien erat. Mauris et malesuada lacus, ut suscipit arcu. In bibendum sem vitae massa fermentum, sagittis viverra felis malesuada. Cras a iaculis urna. Pellentesque neque est, dapibus eu auctor at, lobortis at mi. Vivamus mattis nec elit vitae volutpat. Praesent augue lorem, mollis sed laoreet eget, accumsan eu ligula. Donec sit amet tellus augue. In ac sodales nibh.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ipsum eget dolor tincidunt interdum. In finibus gravida metus id maximus. Sed et luctus dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vitae lorem eros. Pellentesque a neque consequat, venenatis erat eleifend, sollicitudin diam. Nunc tortor erat, malesuada id interdum sit amet, vestibulum eu mauris.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ipsum eget dolor tincidunt interdum. In finibus gravida metus id maximus. Sed et luctus dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vitae lorem eros. Pellentesque a neque consequat, venenatis erat eleifend, sollicitudin diam. Nunc tortor erat, malesuada id interdum sit amet, vestibulum eu mauris.
        <br />
        <br />
        Ut vitae lacus augue. Maecenas volutpat, justo ac pretium convallis, mauris nisi eleifend mi, semper dapibus sem mi non ante. Morbi rutrum erat molestie, consectetur massa blandit, pellentesque risus. Suspendisse eget sapien erat. Mauris et malesuada lacus, ut suscipit arcu. In bibendum sem vitae massa fermentum, sagittis viverra felis malesuada. Cras a iaculis urna. Pellentesque neque est, dapibus eu auctor at, lobortis at mi. Vivamus mattis nec elit vitae volutpat. Praesent augue lorem, mollis sed laoreet eget, accumsan eu ligula. Donec sit amet tellus augue. In ac sodales nibh.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ipsum eget dolor tincidunt interdum. In finibus gravida metus id maximus. Sed et luctus dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vitae lorem eros. Pellentesque a neque consequat, venenatis erat eleifend, sollicitudin diam. Nunc tortor erat, malesuada id interdum sit amet, vestibulum eu mauris.
        <br />
        <br />
        Ut vitae lacus augue. Maecenas volutpat, justo ac pretium convallis, mauris nisi eleifend mi, semper dapibus sem mi non ante. Morbi rutrum erat molestie, consectetur massa blandit, pellentesque risus. Suspendisse eget sapien erat. Mauris et malesuada lacus, ut suscipit arcu. In bibendum sem vitae massa fermentum, sagittis viverra felis malesuada. Cras a iaculis urna. Pellentesque neque est, dapibus eu auctor at, lobortis at mi. Vivamus mattis nec elit vitae volutpat. Praesent augue lorem, mollis sed laoreet eget, accumsan eu ligula. Donec sit amet tellus augue. In ac sodales nibh.
      </div>
    </article>
  )
}

export default Contact
