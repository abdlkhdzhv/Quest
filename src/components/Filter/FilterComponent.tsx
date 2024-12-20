import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/slices/filterSlice';
import { FilterState } from '../../redux/slices/filterSlice'

const FilterComponent = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFilter({ key: name as keyof FilterState, value }));
  };

  return (
    <div>
      <select name="questType" onChange={handleFilterChange}>
        <option value="">Все типы</option>
        <option value="horror">Хоррор</option>
        <option value="adventure">Приключения</option>
      </select>

      <select name="players" onChange={handleFilterChange}>
        <option value="">Все</option>
        <option value="1 - 8 человек">1 - 8 человек</option>
        <option value="9 - 16 человек">9 - 16 человек</option>
      </select>

      <input
        type="date"
        name="date"
        onChange={handleFilterChange}
        defaultValue="2024-12-07"
      />

      <input
        type="time"
        name="time"
        onChange={handleFilterChange}
        defaultValue="12:00"
      />
    </div>
  );
};

export default FilterComponent;
