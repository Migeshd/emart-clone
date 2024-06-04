import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';

interface DataType {
  key: React.Key;
  name: string;
  contact: number;
  person: string;
  address: string;
  pending: number;
  dispatch: number;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'S.N.',
    dataIndex: 'key',
    width: 150,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Contact Number',
    dataIndex: 'contact',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Pending',
    dataIndex: 'pending',
  },
  {
    title: 'Dispatch',
    dataIndex: 'dispatch',
  },
];

const data: DataType[] = [];
for (let i = 1; i < 100; i += 1) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    pending: 32,
    address: `London, Park Lane no. ${i}`,
    contact: 9840330990,
    person: 'Edward King',
    dispatch: 0,
  });
}

function OrderTable() {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: 5,
        showSizeChanger: false,
        hideOnSinglePage: true,
      }}
    />
  );
}

export default OrderTable;
