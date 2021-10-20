import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './TechnicalData.css';

import ToggleButton from '../../ToggleButton/ToggleButton';

function TechnicalData({ data }) {
  const [isTable,setIsTable] = useState(false);

  function generateTable() {
    const header = data[0];
    const amount = data[0].values.length;
    const body = data.slice(1);

    function toggleTable(){
      setIsTable(!isTable);
    }

    return (
      <div className="technical-data">
        <div className="technical-data__header">
          <h5>Dane techniczne</h5>
          <ToggleButton state={isTable} action={toggleTable} withLabel/>
        </div>
        <div className={`technical-data__content ${isTable ? "technical-data__content--visible":""}`}>
          <table className="technical-data__table">
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
