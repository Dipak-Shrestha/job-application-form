import { ReactNode } from "react";

const Container = ({children,className}: {children:ReactNode,className?:string})=> {
    return (
        <div className={`mt-[3.5rem] mb-[2rem] ${className}`}>
            {children}
        </div>
    )
}

export default Container;