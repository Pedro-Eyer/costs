import Item from './Item';

function List(){
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
               <Item marca="Ford" ano_lancamento={1985} />
               <Item marca="Fiat" ano_lancamento={1995} />
               <Item marca="Chhevrolet" ano_lancamento={1981} />
            </ul>
        </>
    )
}
export default List;