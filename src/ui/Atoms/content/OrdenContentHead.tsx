import { Select, Space } from 'antd';
import React from 'react';
import SearchBar from '../SearchBar';

function OrdenContentHead() {
  const handleChange = (value: string) => {
    console.log(value);
  };
  return (
    <div className="flex gap-4">
      <SearchBar />
      <Space wrap>
        <Select
          defaultValue="All"
          style={{ width: 120, marginBottom: '12px' }}
          onChange={handleChange}
          options={[
            { value: 'pending', label: 'pending' },
            { value: 'dispatched', label: 'dispatched' },
          ]}
        />
      </Space>
    </div>
  );
}

export default OrdenContentHead;
