import Presentation from '../components/presentation/presentation'
import SocialMedia from '../components/social-media/socialMedia'
import AboutMe from '../components/about-me/aboutMe'
import NavBar from '../components/nav-bar/nav-bar'


export default function Home() {
  return (
    <div >
      <NavBar />
      <Presentation />
      <SocialMedia />
      <AboutMe />
    </div>
  )
}
