interface Item {
    id: number
    name: string
    link: string
}

interface Props {
    items: Array<Item>
}

export default function (props: Props) {
    return (
        <div className="side-navigation__desktop">
            {props.items.map(item => (
                <div key={item.id}>
                    <a href={item.link}>
                        {item.name}
                    </a>
                </div>
            ))}
            <style jsx>{`
                .side-navigation__desktop {
                    position: fixed;
                }
            `}</style>
        </div>
    )
}