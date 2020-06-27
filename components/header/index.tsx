import React from "react";
import HeaderTop from './top'
import HeaderMain from './main'

export default function Header() {
    return (
        <header>
            <HeaderTop/>
            <HeaderMain/>

            <style jsx>{`
                header {
                    position: sticky;
                    top: 0;
                    z-index: 1;
                }
            `}</style>
        </header>
    )
}
