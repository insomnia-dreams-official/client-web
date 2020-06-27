import React from "react";
import {COMPANY_PHONE_NUMBER} from '../../../constants'
import theme from '../../../styles/theme'

interface Props {
    color?: string;
}

export default function (props: Props) {
    return (
        <>
            <a className="phone-link" href={`tel:${COMPANY_PHONE_NUMBER.tel}`}>{COMPANY_PHONE_NUMBER.render}</a>
            <style jsx>{`
              a {
                text-decoration: none;
                color: ${props.color || theme.colors.blue}
              }
            `}</style>
        </>
    )
}

