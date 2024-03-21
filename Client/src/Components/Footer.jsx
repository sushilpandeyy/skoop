import React from 'react'

const Footer = () => {
    const footerNavs = [
        {
            href: 'javascript:void()',
            name: 'Terms'
        },
        {
            href: 'javascript:void()',
            name: 'License'
        },
        {
            href: 'javascript:void()',
            name: 'Privacy'
        },
        {
            href: 'javascript:void()',
            name: 'About us'
        }
    ]
  return (
    

        
       
            <footer className="pt-10 kk">
                <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                    <div className="justify-between sm:flex">
                        <div className="space-y-6 mx-auto">
                        <div className='h-20 flex items-center text-center justify-center'>
                        <a href='' className='flex-none'>
                            <h2 className="text-5xl profile	">Skoop</h2> 
                        </a>
                    </div>
                            <p className="max-w-md">
                            Dectralizing News With Public For Public
                            </p>
                        </div>
                        <div className="mt-6">
                            <div className="flex items-center gap-3 mt-3 sm:block">
                               
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 py-10 border-t md:text-center text-sm pt-4 text-center text-white/[0.64] flex items-center flex-wrap justify-center">
                        <p>Made with<svg width="13" height="11" viewBox="0 0 13 11" fill="none" class="mx-auto text-white/[0.64]" xmlns="http://www.w3.org/2000/svg"><path d="M11.4989 5.88096L6.4989 10.833L1.4989 5.88096C1.1691 5.56004 0.909327 5.17431 0.735931 4.74805C0.562534 4.3218 0.479273 3.86426 0.49139 3.40425C0.503508 2.94424 0.610741 2.49172 0.806337 2.07519C1.00193 1.65865 1.28166 1.28713 1.62789 0.984016C1.97412 0.6809 2.37937 0.452756 2.81811 0.31395C3.25684 0.175145 3.71957 0.128686 4.17714 0.177497C4.63472 0.226309 5.07723 0.369334 5.47682 0.597567C5.8764 0.8258 6.2244 1.1343 6.4989 1.50363C6.77459 1.13698 7.12299 0.831177 7.5223 0.605366C7.92161 0.379555 8.36323 0.238596 8.81952 0.19131C9.27581 0.144023 9.73695 0.191428 10.1741 0.330557C10.6112 0.469687 11.0149 0.697545 11.3599 0.999872C11.705 1.3022 11.9839 1.67249 12.1792 2.08756C12.3745 2.50263 12.4821 2.95355 12.4951 3.4121C12.5081 3.87065 12.4264 4.32696 12.255 4.75246C12.0836 5.17797 11.8262 5.56351 11.4989 5.88496" fill="rgba(255,255,255,0.64)"></path></svg>by Dictators</p>
                    </div>
                    
                </div>
            </footer>
        )
    }

export default Footer