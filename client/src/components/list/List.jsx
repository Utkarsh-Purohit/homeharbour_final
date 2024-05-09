import './list.scss';
import Card from "../card/Card";

function List({ posts }) {
  return (
    <div className='list'>
      {posts.length === 0 ? (
        <p>No properties found.</p>
      ) : (
        posts.map(item => (
          <Card key={item.id} item={item}/>
        ))
      )}
    </div>
  );
}

export default List;
