import { Row, Form, Input, Button } from "antd";
import { useMutation, useQueryClient } from "react-query";
import { createPokeList } from "../../api/pokemonApi";
import { Pokemon } from "../../interface";
export const CreatePokemonForm = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(createPokeList, {
    onMutate:() =>{
        console.log('on mutate')
    },
    onSuccess: () => {
      console.log('susscessfully');
      queryClient.invalidateQueries('pokemons');
    },
    onError:()=>{
        console.log('error');
    },
    onSettled:()=>{
        console.log('settle');
    }
  });
  const onFinish = (values: Pokemon) => {
    mutation.mutate(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row style={{ marginTop: 40 }}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input pokemon name   !" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please input description!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Avatar"
          name="url_avatar"
          rules={[{ required: true, message: "Please input url avatar!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};
