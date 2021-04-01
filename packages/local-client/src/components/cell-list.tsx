import { useTypedSelector } from "../hooks/use-typed-selector"
import AddCell from "./add-cell";
import CellListItem from "./cell-list-item";
import { Fragment } from "react"
import "./cell-list.css"
import {useActions} from "../hooks/use-actions"
import {useEffect} from "react"

const CellList: React.FC = () => {

    const cells = useTypedSelector(({ cells }) => cells?.order.map((id) => cells.data[id]));

    const {fetchCells}=useActions()

    useEffect(() => {
        fetchCells()
    }, [])




    const renderedCells = cells?.map(cell => (
        <Fragment key={cell.id}>
            <CellListItem cell={cell} />
            <AddCell previousCellId={cell.id}  />
        </Fragment>
    ))

    return <div className="cell-list">
        <AddCell previousCellId={null} forceVisble={cells?.length===0} />
        {renderedCells}
    </div>
}

export default CellList