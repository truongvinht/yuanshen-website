import Link from 'next/link'

const FigureItem = ({figure}) => {
    return (
        <div>
            <li>
                <Link href="/character/[id]" as={`/character/${figure.name}`}>
                    <a>{figure.name}</a>
                </Link>
            
            </li>
        </div>
    );
};

export default FigureItem