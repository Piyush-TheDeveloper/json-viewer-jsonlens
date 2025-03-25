import React from 'react';

export const TableSection = ({ data }) => {
    const flattenObject = (obj, parent = '', result = {}) => {
        for (const key in obj) {
            const propName = parent ? `${parent}.${key}` : key;
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                flattenObject(obj[key], propName, result);
            } else {
                result[propName] = obj[key];
            }
        }
        return result;
    };

    const flattenedData = flattenObject(data);

    return (
        <div className="table-container">
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(flattenedData).map(([key, value], index) => (
                        <tr key={index}>
                            <td>{key}</td>
                            <td>{String(value)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
