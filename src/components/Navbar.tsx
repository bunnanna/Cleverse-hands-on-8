import CleverseLogo from '../assets/cleverse-logo.svg'
import MoonLogo from '../assets/moon.svg'
import NavBtn from './NavBtn'
const Navbar = () => {
  return (
    <nav className="w-screen">
      <div className="flex justify-between px-6 py-3">
        <img src={CleverseLogo} alt="CleverseLogo" />
        <div className="flex gap-5 items-center">
          {['About Us', 'Blog', 'Career', 'Contact Us'].map((btnname) => {
            return <NavBtn key={btnname} btnname={btnname} />
          })}
          <img src={MoonLogo} alt="MoonLogo" />
        </div>
      </div>
    </nav>
  )
}
export default Navbar
