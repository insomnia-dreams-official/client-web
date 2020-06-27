import React from "react";
import Link from "next/link";

export default function () {
    return (
        <div className="header-main__help">
            <Link href="/help">
                <a className="header-main__link">Помощь</a>
            </Link>

            <style jsx>{``}</style>
        </div>
    )
}