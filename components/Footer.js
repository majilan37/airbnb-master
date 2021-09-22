import React from 'react'

const Footer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 bg-gray-50 md:space-x-[50%] gap-y-4 py-14 px-32" >
            <div className="md:ml-[50%] space-y-2 text-xs text-gray-900" >
                <h5 className="font-bold mb-3" >About</h5>
                <p>How Airbnb works ?</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
            <div className="space-y-2 text-xs text-gray-900" >
                <h5 className="font-bold mb-3" >Community</h5>
                <p>Accessibility</p>
                <p>Present</p>
                <p>Majilan Mohamed</p>
                <p>React dev</p>
                <p>Next.js & React.js</p>
            </div>
            <div className="space-y-2 text-sm text-gray-900" >
                <h5 className="font-bold mb-3" >Host</h5>
                <p>Papa react</p>
                <p>Presents</p>
                <p>Zero to Hero</p>
                <p>Node.js</p>
                <p>This not a real site</p>
            </div>
            <div className="space-y-2 text-xs text-gray-900" >
                <h5 className="font-bold mb-3" >Support</h5>
                <p>Help center</p>
                <p>Trust & Center</p>
                <p>Youtube</p>
                <p>millionaire</p>
                <p>Random</p>
            </div>
        </div>
    )
}

export default Footer
