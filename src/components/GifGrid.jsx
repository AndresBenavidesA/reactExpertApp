
import { useFetchGifs } from '../hooks/useFetchGifs';
import ItemGif from './ItemGif';


export const GifGrid = ({ category}) => {

    const {images, isLoading} =useFetchGifs( category );
    
    return (
    <>
      <h3>{ category }</h3>

      <div className='card-grid'>
      {
        images.map((image ) =>(
          <ItemGif 
            key={image.id}
            { ...image}
          />
        ))
      }
      </div>
    </>
  )
};

