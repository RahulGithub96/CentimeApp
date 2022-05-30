import React from 'react';
import Sankey, {
  Tooltip,
  Link,
  Node,
} from 'devextreme-react/sankey';
import useTransactions from '../../useTransactions';


const SankeyChart=({title})=> {
const {chartData}=useTransactions(title);

    return (
      <Sankey id="sankey"
        dataSource={chartData.datasets1}
        sourceField="source"
        targetField="target"
        weightField="weight"
        title="Income and Expanses"
      >
        <Tooltip
          enabled={true}
          customizeLinkTooltip={customizeLinkTooltip}
        >
        </Tooltip>

        <Link
          colorMode="gradient">
        </Link>
        <Node
          width={8}
          padding={30}>
        </Node>

      </Sankey>
    );
}

function customizeLinkTooltip(info) {
  return {
    html: `<b>From:</b> ${info.source}<br/><b>To:</b> ${info.target}<br/><b>Weight:</b> ${info.weight}`,
  };
}

export default SankeyChart;
