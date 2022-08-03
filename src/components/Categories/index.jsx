import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../../redux/slices/filterSlice";

const Categories = () => {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();

  const onChangeCatigories = (id) => {
    dispatch(setCategoryId(id));
  };
  const categories = ["Все", "  Мясные", " Вегетарианская", "  Гриль", "  Острые", " Закрытые"];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, idx) => (
          <li
            key={idx + category}
            className={categoryId === idx ? "active" : ""}
            onClick={() => onChangeCatigories(idx)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
