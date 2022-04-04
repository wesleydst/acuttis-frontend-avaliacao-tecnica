import React from "react";
import { convertMinutesToHHmm } from "../../util/TimeUtil";

const tdPadding = { padding: "5px" };

function Items(props) {
  const fontSizeForLast = { fontSize: "18px" };
  const items = props.items.map((item, i) =>
    <tr key={i} style={i === 0 ? fontSizeForLast : {}}>
      <td style={tdPadding}>{item.start} até {item.end}</td>
      <td style={tdPadding}>{convertMinutesToHHmm(item.daytimeInMinutes)}</td>
      <td style={tdPadding}>{convertMinutesToHHmm(item.nocturnalInMinutes)}</td>
    </tr>
  );
  return items;
}

export default function History(props) {
  if(props.items === undefined || props.items.length === 0) {
    return <></>;
  }

  return (
    <table className='striped centered'>
      <caption>Histórico</caption>
      <thead>
        <tr>
          <th style={tdPadding}>Período</th>
          <th style={tdPadding}>Diurno</th>
          <th style={tdPadding}>Noturno</th>
        </tr>
      </thead>
      <tbody>
        <Items items={props.items} />
      </tbody>
      <tfoot>
        <tr>
          <td className='center' colSpan={3}>
            <small>{props.footerMessage}</small>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};