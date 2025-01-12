import React, { PureComponent } from 'react'



class Rate extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>

                <div className="flex flex-row justify-between max-md:text-center w-max-fit pt-6 bg-white px-24 max-md:hidden">
                  <h2 className="text-xl font-semibold max-md:text-sm">Featured in</h2>
                  <img src="src/photos/logo1.png" alt="" className="h-[60px] w-[px] max-md:h-[px] max-md:w-[100px] "/>
                  <img src="src/photos/logo1.png" alt="" className="h-[60px] w-[px] max-md:h-[px] max-md:w-[100px]"/>
                  <img src="src/photos/logo1.png" alt="" className="h-[60px] w-[px] max-md:h-[px] max-md:w-[100px]"/>
                  <img src="src/photos/logo1.png" alt="" className="h-[60px] w-[px] max-md:h-[px] max-md:w-[100px]"/>
                </div>


             <div className="flex flex-row max-md:flex-col w-max-fit w-100 px-32 max-md:px-6  pt-8 py-6 max-md:pt-6 bg-white">
                
                <div className="w-[100px] my-6 justify-start">
                    <h1 className="text-4xl max-md:text-2xl font-semibold">4.8</h1>
                    <div className="flex flex-row content-start justify-start mt-2">
                    <img width="16" height="16" src="https://img.icons8.com/color/48/000000/filled-star--v1.png" alt="filled-star--v1"/>
                    <img width="16" height="16" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>
                    <img width="16" height="16" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>
                    <img width="16" height="16" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>
                    <img width="16" height="16" src="https://img.icons8.com/color/48/star-half-empty.png" alt="star-half-empty"/>
                    </div>
                    <h2 className="font-bold text-sm mt-2 max-md:text-xs max-md:mt-[4px]">2,394 ratings</h2>
                    <h2 className="font-bold text-sm max-md:text-xs max-md:mt-[4px]">Reviews</h2>
                </div>

                <div className="w-[100px]  my-6 justify-start mx-20 max-md:mx-2 max-md:my-2">
                    <h1 className="text-4xl font-semibold max-md:text-2xl">A+</h1>
                    <div className="flex flex-row content-start justify-start mt-2">
                    <img width="16" height="16" src="https://img.icons8.com/color/48/000000/filled-star--v1.png" alt="filled-star--v1"/>
                    <img width="16" height="16" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>
                    <img width="16" height="16" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>
                    <img width="16" height="16" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>
                    <img width="16" height="16" src="https://img.icons8.com/color/48/star-half-empty.png" alt="star-half-empty"/>
                    </div>
                    <h2 className="font-bold text-sm mt-2 max-md:text-xs max-md:mt-[4px]">125 reviews</h2>
                    <h2 className="font-bold text-sm max-md:text-xs max-md:mt-[4px]">BBB rating</h2>
                </div>

                <div className="ml-16 my-4 max-md:ml-2 max-md:my-2">
                  <h1 className="text-2xl font-semibold max-md:text-xl">What our satisfied customers say</h1>
                  <h2 className="text-sm text-green-600 uppercase mt-4 font-semibold max-md:text-xs max-md:mt-2">jhon carter</h2>
                  <p className="text-sm text-slate-600 mt-4 text-balance max-md:text-xs max-md:mt-2">GeoCityDatabase offers an impressive database with accurate and up-to-date information on cities worldwide. Thier data sourcing services are second to none, and thier customer support is excellent.</p>
                </div>
             </div>
    
          </>
        )
    }
}

export default Rate