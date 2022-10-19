import React    from 'react';
import          "./country.css";

const country = (props) => {
    const { name, region, flag, independent } = props.country;
    return (
        <div className="card" style={{ width: "13re", maxHeight: "23re" }}>
            <img src={flag} className="card-img-top" alt="flags" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{`Region: ${region}`}</p>
            </div>
        </div>
    );
};

export default country;