import Banner from './components/Banner/index';
import Companies from './components/Companies/Companies';
import About from './components/About/about';
import Infocards from './components/Infocards/infocards';
import BooksWritten from './components/Book_written/book_written';
import Vision from './components/Vision/vision';
import Mentor from './components/Mentor/index';
import Courses from './components/Courses/index';
import Testimonials from './components/Testimonials/index';
import Companyimage from './components/Companyimage/companyimage';
import Newsletter from './components/Newsletter/Newsletter';
import BlogPage from './components/Blog/blog';
import Floater from './components/Floater/floatingbutton';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Banner />
      <Companies />
      <About />
      <Infocards />
      <BooksWritten/>
      <Vision/>
      {/* <Mentor/> */}
      <Courses />
      <Testimonials />
      <Companyimage/>
      <BlogPage />
      <Floater />
      {/* <Newsletter /> */}
    </main>
  )
}
