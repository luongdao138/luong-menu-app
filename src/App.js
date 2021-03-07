import React, { useContext, useReducer } from 'react';
import { data } from './data';
import Nav from './Nav';

const MenuContext = React.createContext();

const initState = {
  menu: data,
};

const reducer = (state, action) => {
  const meal = action.meal;
  if (meal === 'ALL') return { ...state, menu: data };

  const newMenu = data.filter(
    (m) => m.category.toLowerCase() === meal.toLowerCase()
  );
  console.log(newMenu);

  return { ...state, menu: newMenu };
};

function App() {
  const value = 'hello world';
  const [state, dispatch] = useReducer(reducer, initState);

  const filterMeal = (meal) => {
    dispatch({ meal });
  };

  return (
    <MenuContext.Provider value={{ menu: state.menu, filterMeal }}>
      <div className='title-wrapper'>
        <h1 className='title'>Our menu</h1>
        <div className='seperate'></div>
      </div>
      <Nav filterMeal={filterMeal} />
      <List />
    </MenuContext.Provider>
  );
}

const List = () => {
  const { menu } = useContext(MenuContext);
  return (
    <div className='container-fluid'>
      <div className='row main'>
        {menu.map((meal) => {
          return <Meal key={meal.id} {...meal} />;
        })}
      </div>
    </div>
  );
};

const Meal = (props) => {
  const { id, category, title, price, img, desc } = props;

  return (
    <article className='col-lg-6 col-md-12 col-sm-12'>
      <div className='row item'>
        <div className='img-wrapper col-lg-5 col-md-5 col-sm-12'>
          <img src={img} alt='' />
        </div>
        <div className='infor-wrapper col-lg-7 col-md-7 col-sm-12'>
          <p className='name_price'>
            <span className='name'>{title}</span>
            <span className='price'>${price}</span>
          </p>
          <p className='desc'>{desc}</p>
        </div>
      </div>
    </article>
  );
};

export default App;
