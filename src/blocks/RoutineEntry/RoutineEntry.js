import { useState } from "react";

function RoutineEntry() {
  // *********************** //
  // ** TOGGLE ROUTINE BOX ** //
  // *********************** //
  const [routineBoxActive, setRoutineBoxActive] = useState(false);

  function toggleRoutineEntry() {
    setRoutineBoxActive(!routineBoxActive);
  }

  return (
    <div
      className={`routine bc--white ${
        routineBoxActive ? "routine--active" : ""
      }`}
    >
      {/* Top */}
      <div className="routine--top disp--flex just--betw alig--cent">
        <h2 className="routine__title">Chest Day</h2>
        <button
          onClick={() => toggleRoutineEntry()}
          className="routine__button__open btn btn--transparent"
        >
          <i className="fa-regular fa-square-plus"></i>
        </button>
        <button
          onClick={() => toggleRoutineEntry()}
          className="routine__button__close btn btn--transparent"
        >
          <i className="fa-regular fa-square-minus"></i>
        </button>
      </div>
      {/* Bottom */}
      <div className="routine--bottom">
        {/* Entry */}
        <div className="routine__entry disp--flex">
          <div className="routine__entry__checkbox">
            <i class="fa-regular fa-square"></i>
          </div>
          <div className="routine__entry__title">
            <p>Warm-up set 1 (x6)</p>
          </div>
          <div className="routine__entry__reps">
            <i className="fa-solid fa-info"></i>
          </div>
          <div className="routine__entry__delete">
            <i className="fa-regular fa-trash-can"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoutineEntry;
