import gridStyles from '../styles/GridContainer.module.css'
import GridItem from "./GridItem";

const GridContainer = ({items}) => {
    return (
        <div>
            <div className={gridStyles.gridcontainer}>
                {items.map((item) => (
                    <GridItem item={item} />
                ))}
            </div>
        </div>
    );
};

export default GridContainer