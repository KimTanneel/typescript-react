import React from "react";
import { Row, Typography, Input, Col, Radio, Select, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  keySearchChange,
  prioritiesChange,
  statusChange,
} from "../../store/filter";
import { getFilterStatus } from "../../store/filter/selector";

const { Search } = Input;
export const Filter = () => {
  const dispatch = useDispatch();
  const handleChangeKeySearch = (e: any) => {
    dispatch(keySearchChange(e.target.value));
  };
  const handleChangeStatus = (e: any) => {
    dispatch(statusChange(e.target.value));
  };
  const handlePriorityChange = (e: any) => {
    console.log("1111", e);
    dispatch(prioritiesChange(e));
  };
  const status = useSelector(getFilterStatus);
  console.log("status", status);

  return (
    <Row>
      <Col>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          onChange={handleChangeKeySearch}
          placeholder="input search text"
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group defaultValue={status} onChange={handleChangeStatus}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          // value={filterPriorities}
          onChange={handlePriorityChange}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
};
