import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import Logo from "@/assets/Logo.png"


type Props = {}

const Navbar = (props: Props) => {
    const flexBetween = "flex items-center justify-between"
  return (
    <nav>
        <div className = {`${flexBetween} fixed top-0 w-full z-30 py-6`}>
            <div className = {`${flexBetween} mx-auto w-5/6`}>

                {/* LEFT SIDE */}
                <div className = {`${flexBetween} w-full gap-16`}>
                    <img alt = "logo" src = {Logo} />
                </div>

                {/* RIGHT SIDE */}
                <div className = {`${flexBetween} w-full`}>
                    <div className = {`${flexBetween} gap-8 text-sm`}>
                        <p>Home</p>
                        <p>Benefits</p>
                        <p>Our Classes</p>
                        <p>Contact Us</p>
                    </div>
                    <div className = {`${flexBetween} gap-8`}>
                        <p>Sign In</p>
                        <button>Become a Member</button>

                    </div>

                </div>

            </div>
            
        </div>
    </nav>
  )
}

export default Navbar