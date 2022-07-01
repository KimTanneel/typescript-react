import { Row, Col, Select, Input, Button } from "antd";
import { useState } from "react";
import { Todo } from "../Todo/index";
import { TodoType } from "../../interface";
import { v4 as uuidv4 } from "uuid";
import { getFilterTodoList } from "../../store/todo/selector";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTaskDone } from "../../store/todo";
import { getFilterSearchText } from "../../store/filter/selector";


export const TodoList =() => {
  const dispatch = useDispatch();

  const todoList = useSelector(getFilterTodoList);
  const filterText = useSelector(getFilterSearchText);

  const [todoName, setTodoName] = useState("");
  const [todoPriority, setTodoPriority] =
    useState<TodoType["priority"]>("High");

  const { Option } = Select;

  const handleOnChangeText = (e: any) => {
    setTodoName(e.target.value);
  };
  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: todoPriority,
      })
    );
    setTodoName("");
  };
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && todoName) handleAddTodo();
  };
  const handleOnChangePriority = (e: any) => {
    setTodoPriority(e);
  };
  const handleRemoveTaskDone = () => {
    console.log("zoooo");

    dispatch(removeTaskDone({}));
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      TodolIst
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      Todo React Query
      <Col style={{ marginTop: 10 }}>
        <Input
          style={{ width: 212 }}
          placeholder="Enter your todo"
          onChange={handleOnChangeText}
          onKeyDown={handleKeyDown}
          value={todoName}
        />
        <Select
          style={{ maxWidth: 71.5 }}
          onChange={handleOnChangePriority}
          defaultValue="High"
          className="select-after"
        >
          <Option value="High">High</Option>
          <Option value="Medium">Medium</Option>
          <Option value="Low">Low</Option>
        </Select>
        <Button
          onClick={handleAddTodo}
          style={{ marginLeft: "auto" }}
          type="primary"
        >
          Submit
        </Button>
      </Col>
      <Col
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <Button
          onClick={handleRemoveTaskDone}
          style={{ marginTop: 30, marginLeft: "auto" }}
          type="dashed"
        >
          Remove Task Done
        </Button>
      </Col>
    </Row>
  );
};
