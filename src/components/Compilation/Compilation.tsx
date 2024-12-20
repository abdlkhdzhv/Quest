import image1 from '../../assets/pod1.svg'
import image2 from '../../assets/pod2.svg'
import image3 from '../../assets/pod3.svg'
import image4 from '../../assets/pod4.svg'
import image5 from '../../assets/pod5.svg'
import image6 from '../../assets/pod6.svg'
import style from './ui.module.css'

export const Compilation = () => {
  return (
    <div className={style.wrapSection}>
      <div className={style.header}>
        <h1>Подборки</h1>

        <p>Смотреть все</p>
      </div>

      <div className={style.container}>
        <div>
            <img src={image1} alt="" />
        </div>
        <div>
            <img src={image2} alt="" />
        </div>
        <div>
            <img src={image3} alt="" />
        </div>
        <div>
            <img src={image4} alt="" />
        </div>
        <div>
            <img src={image5} alt="" />
        </div>
        <div>
            <img src={image6} alt="" />
        </div>
      </div>
    </div>
  );
};
