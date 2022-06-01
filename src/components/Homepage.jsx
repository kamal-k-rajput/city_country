import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../Redux/Action/action";

export const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountry());
  }, []);

  const data = useSelector((store) => {
    return store.countries;
  });
  //   console.log(data.getState(), "dsta");
  function sortChange(e) {
    console.log(e.target.value);
  }
  return (
    <>
      <div className="filter">
        Country
        <select>
          <option value="">india</option>
        </select>
      </div>
      <div className="sort">
        <select onChange={sortChange}>
          <option value="">Population</option>
          <option value="ascending">Assending</option>
          <option value="decending">Decending</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Country</th>
            <th>Population</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{}</tbody>
      </table>
    </>
  );
};
