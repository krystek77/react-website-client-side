import React from 'react';
import PropTypes from 'prop-types';
import './TechnicalData.css';

function TechnicalData({ data }) {
  function generateTable() {
    const header = data[0];
    const amount = data[0].values.length;
    const body = data.slice(1);

    return (
      <div className="technical-data">
        <h5>Dane techniczne</h5>
        <table>
          <thead>
            <tr>
              <th>{header.name}</th>
              <th>{header.unit}</th>
              {header.values.map((item) => {
                return <th key={item}>{item}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {body.map((row)=>{
              const values = row.values;
              const length = values.length;

              return (
                <tr key={row.id}>
                  <td>{row.name}</td>
                  <td>{row.unit}</td>
                  {values.map((item,index)=>{
                    if (length > 1) {
                      return <td key={index}>{item}</td>;
                    }
                    return <td colSpan={amount} key={item}>{item.split(',').map((s,index)=>{
                      return <div key={index}>{s}</div>
                    })}</td>;
                  })}
                </tr>
              );
            })}
            
          </tbody>
          <tfoot>
            <tr>
              <th>{header.name}</th>
              <th>{header.unit}</th>
              {header.values.map((item) => {
                return <th key={item}>{item}</th>;
              })}
            </tr>
            <tr>
              <th><b>*</b></th>
              <th>-</th>
              <th colSpan={amount}>= standard</th>
            </tr>
            <tr>
              <th><b>N/A</b></th>
              <th>-</th>
              <th colSpan={amount}>= nie dostępne</th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }

  return data.length !== 0 && generateTable();
}
TechnicalData.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      values: PropTypes.array,
    })
  ),
};
export default TechnicalData;
