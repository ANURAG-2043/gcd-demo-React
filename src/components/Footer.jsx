import React, { PureComponent } from 'react'



class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
            <div className="flex flex-col mt-12 content-center items-center">
                <h1 className="py-2 text-4xl font-semibold max-md:text-2xl max-md:text-center">Subscribe to Newsletter</h1>
                <h2 className="text-sm text-center">Enter your email address to register to our newsletter subscription!</h2>
                <input className="flex h-8 w-96 max-md:h-6 max-md:w-36  rounded-md border py-2 px-4 mt-6 mb-2 shadow-md" type="email" placeholder="Email"/>
                <button className="btn btn-primary bg-sky-700 px-4 max-md:px-[10px] max-md:text-[10px] max-md:py-[6px] py-2 text-white rounded-md text-xs my-3 shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Send</button>
            </div>


            <div className="mt-20 max-md:mt-10 flex flex-row mb-6 justify-center ">
            <img width="25" height="25" className="mx-2 max-md:mx-1" src="https://img.icons8.com/ios/50/prequel-app.png" alt="prequel-app"/>
            <img width="25" height="25" className="mx-2 max-md:mx-1" src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="facebook-new"/>
            <img width="25" height="25" className="mx-2 max-md:mx-1" src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png" alt="linkedin"/>
            <img width="25" height="25" className="mx-2 max-md:mx-1" src="https://img.icons8.com/ios-filled/50/000000/youtube-play.png" alt="youtube-play"/>
            <img width="25" height="25" className="mx-2 max-md:mx-1" src="https://img.icons8.com/ios-filled/50/000000/twitterx--v1.png" alt="twitterx--v1"/>
            </div>
    
            </>
        )
    }
}

export default Footer