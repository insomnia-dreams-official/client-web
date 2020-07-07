import React from 'react';
import theme from "../../styles/theme";

export default function () {
    return (
        <div className="advantages">
            <img src="/advantages.jpg" alt="преимущества компании"/>

            <style jsx>{`
                    .advantages {
                        background: ${theme.colors.white};
                        border-radius: ${theme.radii[2]};
                        box-shadow: ${theme.shadow};
                    }
                    .advantages img {
                        width: 100%;
                        height: 100%;
                        border-radius: ${theme.radii[2]};
                    }
                    
                    @media (max-width: ${theme.sizes.tablet}) { 
                        .advantages {
                            display: none;
                        }
                    }
            `}</style>
        </div>
    );
}
