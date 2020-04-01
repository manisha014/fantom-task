import  React from 'react';
import Portal from './Portal/Portal';
const portals = () => {
    return(
        <div>
            <Portal
                name="developer"
                heading="Developer Portal"
                description="Open source. Scalable. Secure.."
            ></Portal>
            <Portal
                name="foundation"
                heading="The Fantom Foundation"
                description="The people, the culture."
            ></Portal>
        </div>
    )
}

export default portals;