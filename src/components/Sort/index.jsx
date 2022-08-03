import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortType } from "../../redux/slices/filterSlice";

export const sortList = [
  { name: "популярности (вер)", sortProperty: "rating" },
  { name: "популярности (низ)", sortProperty: "-rating" },
  { name: "цене (вер)", sortProperty: "price" },
  { name: "цене (низ)", sortProperty: "-price" },
  { name: "алфавиту (вер)", sortProperty: "title" },
  { name: "алфавиту (низ)", sortProperty: "-title" },
];

const Sort = () => {
  const [open, setOpen] = React.useState(false);
  const sortRef = React.useRef();

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.path.includes(sortRef.current)) {
        console.log('click body');
        setOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const sortType = useSelector((state) => state.filter.sort);
  const dispatch = useDispatch();

  const onClickSortType = (obj) => {
    dispatch(setSortType(obj));
    setOpen(!open);
  };

  return (
    <div ref={sortRef} className="sort">
      
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{sortType.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, idx) => (
              <li
                key={obj.name + idx}
                onClick={() => onClickSortType(obj)}
                className={
                  sortType.sortProperty === obj.sortProperty ? "active" : ""
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
