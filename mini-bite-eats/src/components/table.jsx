import PropTypes from "prop-types";
import { ButtonBorder } from "./button";
import { IoTrash } from "react-icons/io5";

function calculateTotal(food) {
  return (
    food.nf_calories +
    food.nf_cholesterol +
    food.nf_protein +
    food.nf_sugars +
    food.nf_total_fat +
    food.nf_total_carbohydrate
  );
}

function Table({ data, onDelete }) {
  return (
    <div className="overflow-x-auto justify-center mx-36 py-10">
      <table className="table table-zebra text-center">
        <thead className="font-semibold text-base text-[#274C5B]">
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Calories</th>
            <th>Cholesterol (mg)</th>
            <th>Protein (g)</th>
            <th>Sugars (mg)</th>
            <th>Total Fat (g)</th>
            <th>Total Carbohydrate (g)</th>
            <th>Total of Each Columns</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((food, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{food.food_name}</td>
              <td>{food.nf_calories}</td>
              <td>{food.nf_cholesterol}</td>
              <td>{food.nf_protein}</td>
              <td>{food.nf_sugars}</td>
              <td>{food.nf_total_fat}</td>
              <td>{food.nf_total_carbohydrate}</td>
              <td>{calculateTotal(food)}</td>
              <td>
                <ButtonBorder
                  label={<IoTrash />}
                  onClick={() => onDelete(index)}
                />
              </td>
            </tr>
          ))}

          <tr>
            <td colSpan="1"></td>
            <td className="font-semibold text-base text-[#274C5B]">
              Total of each rows
            </td>
            <td>{data.reduce((total, food) => total + food.nf_calories, 0)}</td>
            <td>
              {data.reduce((total, food) => total + food.nf_cholesterol, 0)}
            </td>
            <td>{data.reduce((total, food) => total + food.nf_protein, 0)}</td>
            <td>{data.reduce((total, food) => total + food.nf_sugars, 0)}</td>
            <td>
              {data.reduce((total, food) => total + food.nf_total_fat, 0)}
            </td>
            <td>
              {data.reduce(
                (total, food) => total + food.nf_total_carbohydrate,
                0
              )}
            </td>
            <td>
              {data.reduce((total, food) => total + calculateTotal(food), 0)}
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      food_name: PropTypes.string,
      nf_calories: PropTypes.number,
      nf_cholesterol: PropTypes.number,
      nf_protein: PropTypes.number,
      nf_sugars: PropTypes.number,
      nf_total_fat: PropTypes.number,
      nf_total_carbohydrate: PropTypes.number,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Table;
