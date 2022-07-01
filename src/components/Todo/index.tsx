import React from "react";
import { Row, Tag, Checkbox } from "antd";
import { TodoType } from "../../interface";
import { useDispatch } from "react-redux";
import { changeToggle } from "../../store/todo";

enum priorityColorMapping {
  High = "red",
  Medium = "blue",
  Low = "gray",
}

interface Props extends TodoType {}
export const Todo: React.FC<Props> = ({ id, name, priority, completed }) => {
  const dispatch = useDispatch();
  const handleToggleComplete = (id: string) => {
    dispatch(changeToggle(id));
  };

  return (
    <Row
      className={completed ? "completed" : ""}
      style={{
        textDecoration: completed ? "line-through" : "auto",
        marginBottom: 6,
      }}
    >
      <Checkbox onChange={() => handleToggleComplete(id)} checked={completed}>
        {name}
      </Checkbox>
      <Tag
        color={priorityColorMapping[priority]}
        style={{ marginLeft: "auto", marginRight: 0 }}
      >
        {priority}
      </Tag>
      {/* <Tag color={priorityColorMapping.find(priority =>priority.level===props.priority )?.color} style={{ marginLeft:'auto' }}>
      high
    </Tag> */}
    </Row>
  );
};
