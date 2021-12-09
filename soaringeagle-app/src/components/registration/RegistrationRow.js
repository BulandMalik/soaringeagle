import PropTypes from 'prop-types';

export const CarRow = (props) => {
/*
    const carData = props.cars.map( car => {
        return (
            <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.model}</td>
                <td>{car.make}</td>
                <td>{car.year}</td>
                <td>{car.color}</td>
                <td>{car.price}</td>
            </tr>
        )
    });
*/

    const deleteMe = () => {
        console.log("props.car.id: ",props.car.id);
        props.onDeleteCar(props.car.id);
    };
/*
    //should not use dom element to store data
    const deleteCar = (e) => {
        console.log(e.target.id);
        props.onDeleteCar(e.target.id);
    };
*/
    const editCar = () => {
        console.log(props.car.id);
        props.onEditCar(props.car.id);
    };

    return (
        <tr key={props.car.id}>
            <td>{props.car.id}</td>
            <td>{props.car.model}</td>
            <td>{props.car.make}</td>
            <td>{props.car.year}</td>
            <td>{props.car.color}</td>
            <td>{props.car.price}</td>
            <td>
                <form>
                    {/* <button type="button" id={props.car.id} onClick={deleteCar}>Delete</button>*/}
                    <button type="button" onClick={deleteMe}>Delete</button>
                    <button type="button" onClick={editCar}>Edit</button>
                </form>
            </td>
        </tr>
    );
};

CarRow.defaultProps = {
    car: {
        id: 0,
        make: '',
        model: '',
        year: 1900,
        color: '',
        price: 0
    }
}

CarRow.propTypes = {
    car: PropTypes.object.isRequired,
}