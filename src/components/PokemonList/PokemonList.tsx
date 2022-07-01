import { Row, Col, Card, Pagination, Button } from "antd";
import { useIsFetching } from "react-query";
import { Pokemon, PokeResponse } from "../../interface";
const { Meta } = Card;
interface Props {
  setUrlPokemon: Function;
  pokemonResponse: PokeResponse;
}

export const PokemonList = ({ pokemonResponse, setUrlPokemon }: Props) => {
const isFetching = useIsFetching();
  
  return (
    <>
      <div className="header-title">Pokemon List</div>
      <Row style={{ height: "calc(100% - 40px)" }}>
        {pokemonResponse.pokemons.map((pokemon) => (
          <Col
            span={3}
            style={{ height: "calc(100% - 40px)", overflowY: "auto" }}
          >
            <Card
              hoverable
              style={{ width: 200 }}
              cover={
                <img
                  style={{ width: 96, margin: "auto" }}
                  alt="example"
                  src={pokemon.sprites.front_default}
                />
              }
            >
              <Meta
                style={{ justifyContent: "center" }}
                title={pokemon.name}
                description={pokemon.description}
              />
            </Card>
          </Col>
        ))}
      </Row>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => setUrlPokemon(pokemonResponse.next)}
          disabled={!pokemonResponse.previous}
          style={{ marginRight: 20 }}
        >
          Previous
        </Button>
        <Button  style={{ marginRight: 20 }} onClick={() => setUrlPokemon(pokemonResponse.next)}>
          Next
        </Button>
        {!!isFetching && <div><div className="loader"></div></div> }
      </Row>

      {/* <Pagination style={{display:"flex",justifyContent:"center"}} defaultCurrent={1} total={props.pokemons.count} /> */}
    </>
  );
};
