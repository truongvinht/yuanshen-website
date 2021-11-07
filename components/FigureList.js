import FigureItem from "./FigureItem";
import listStyles from '../styles/FigureList.module.css'

const FigureList = ({figures}) => {
    return (
        <div>
            <ul className={listStyles.figures}> 
                {figures.map((figure) => (
                    <FigureItem figure={figure} />
                ))}
            </ul>
        </div>
    );
};

export default FigureList