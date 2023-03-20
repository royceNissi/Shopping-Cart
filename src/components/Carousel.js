import Carousel from 'react-bootstrap/Carousel';
export default function Something({imageUrl}) {
  return (
    <Carousel variant='dark' className='car' fade interval={null}>
         {imageUrl.map((u)=>{
          return(
            <Carousel.Item key={u}>
            <img
              className='product-image'
              src={u}
              alt="First slide"
            />
          </Carousel.Item>
          )
         })}
    </Carousel>
  );
}
