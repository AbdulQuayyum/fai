import React from 'react'

import { Transition, SlideIn } from '../Utilities/Transitions';

const Education = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center gap-y-3'>
                <SlideIn>
                    <span className='text-xl font-bold md:text-3xl' >
                        What is Faidah's academic background?
                    </span>
                </SlideIn>
            </div>
            <Transition>
                <div>

                </div>
            </Transition>
        </div>
    )
}

export default Education