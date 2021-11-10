import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const Dummy_Products=[
    {id: 'p1',price:200,title:"the power of habbit",description:"a book about habbits"},
    {id:'p2',price:300,title:"how to win friends and influence people",description:"how to win friends and influence people"},
    {id:'p4',price:400,title:"you are too good to see this bad ",description:"a book that everyone must read"},
    {id:'p5',price:500,title:"eco is the enemy",description:"Ryan Holiday"},
    {id:'p6',price:500,title:"secret",description:"Secret"},
    {id:'p7',price:320,title:"Autobiography of Benzamin Franklin",description:"banjamain "},
  {id:'p8',price:400,title:'the light of asia',description:"gautam Bhuddha"},
  {id:'p10',price:400,title:'deep work',description:"kal newport"}
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Products.map((product)=>(<ProductItem
        id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />))}
        
      </ul>
    </section>
  );
};

export default Products;
