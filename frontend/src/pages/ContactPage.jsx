import Header from '../components/navigation/Header'
import Footer from '../components/common/Footer'
import Container from '../components/common/Container'
import ContactIntro from '../components/contact/ContactIntro'
import ContactDetails from '../components/contact/ContactDetails'
import ContactActions from '../components/contact/ContactActions'
import ContactForm from '../components/contact/ContactForm'
import ContactVisual from '../components/contact/ContactVisual'

export default function ContactPage() {
  return <div className="contact-page catalogue-page"><Container><Header /></Container><main><ContactIntro/><Container className="contact-layout"><aside><ContactDetails/><ContactActions/><ContactVisual/></aside><ContactForm/></Container></main><Footer/></div>
}
