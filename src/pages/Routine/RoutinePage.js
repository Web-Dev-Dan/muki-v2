// Styles
import "./RoutinePage.css";

// Components
import RoutineEntry from "../../blocks/RoutineEntry/RoutineEntry";

function RoutinePage() {
  return (
    <div className="main__page">
      <div className="cont--max">
        <h1>Routine page</h1>
        <div className="main__page__inner">
          <div className="routine-container disp--flex flex--colu">
            <RoutineEntry />
            <RoutineEntry />
            <RoutineEntry />
            <RoutineEntry />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoutinePage;
