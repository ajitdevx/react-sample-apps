import { PropTypes } from "prop-types";

function SearchBar({ handleChange, handleClick }) {

    return (
        <div className="container p-0 mb-3 mt-2 bg-body-tertiary rounded border">
            <div className="input-group rounded">
                <input type="text" className="form-control p-2 px-4 rounded" placeholder="Search..."
                    onChange={handleChange} />
                <button className="btn btn-outline-light bg-transparent" type="button"
                    onClick={handleClick}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22.473" height="23" viewBox="0 0 22.473 23"><path d="M12.963,3a8.963,8.963,0,1,0,4.794,16.525L24.232,26l2.241-2.241L20.08,17.383A8.943,8.943,0,0,0,12.963,3Zm0,2.109a6.854,6.854,0,1,1-6.854,6.854A6.841,6.841,0,0,1,12.963,5.109Z" transform="translate(-4 -3)" /></svg>
                </button>
            </div>
        </div>
    )
}

SearchBar.propTypes = {
    handleChange: PropTypes.func,
    handleClick: PropTypes.func
}

export { SearchBar }