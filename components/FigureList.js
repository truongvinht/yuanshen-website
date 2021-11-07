import FigureItem from "./FigureItem";

const FigureList = ({figures}) => {
    return (
        <div>
            <ul> 
                {figures.map((figure) => (
                    <FigureItem figure={figure} />
                ))}
            </ul>
        </div>
    );
};

export default FigureList