
import { RootState } from '@reduxjs/toolkit/query';
import { useSelector } from 'react-redux';

export const Favorite = () => {
    const quest = useSelector((state: RootState) => state.favorite.favoriteMovie || []);
    return (
        
        <div>
        {Array.isArray(quest) && quest.length > 0 ? (
          quest.map((quest) => (
            <div key={quest.id} className="movie-item">
                <h1>{quest.price}</h1>
            </div>
          ))
        ) : (
          <p className='NoFavs'>Здесь пусто... Даже слишком....</p>
        )}
        </div>
    
    )
}

export default Favorite