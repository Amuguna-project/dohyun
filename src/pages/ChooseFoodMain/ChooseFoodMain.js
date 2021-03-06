import React, { useState } from "react";
import "./ChooseFoodMain.css";
import ChooseFood from "components/ChooseFood/ChooseFood";

const FoodCategory = [
  { id: 1, name: "한식" },
  { id: 2, name: "중식" },
  { id: 3, name: "일식" },
  { id: 4, name: "양식" },
];

const ChooseFoodMain = () => {
  const [value, setValue] = useState(0);
  const [display, setDisplay] = useState(true)
  const categoryList = FoodCategory.map((name) => (
    <li key={name.id} className="group-name">
      <span
        className="name"
        onClick={() => {
          setValue(name.id);
          setDisplay(false)
          console.log(value);
        }}
      >
        {name.name}
      </span>
    </li>
  ));

  



  return (
    <div className="main-content">
      <div className="content-step1">
        <h2 className="food-tit">음식을 선택해주세요</h2>
        <div className={ `food-group ${display ? "show" : "hide"}`}>
          <ul className="food-category">{categoryList}</ul>
        </div>
        <div className="content-step2">
          <ChooseFood value={value} />
        </div>
      </div>
    </div>
  );
};

export default ChooseFoodMain;
