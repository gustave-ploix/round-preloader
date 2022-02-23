import "./svgs.scss";

export default function Svgs() {
  const circles = document.getElementsByClassName("circles");

  function handleMouseEnter() {
    recursiveFunctionForFirstStep(0);
  }

  function handleMouseLeave() {
    recursiveFunctionForSecondStep(0);
  }

  function handleClick() {
    recursiveFunctionForDissapear(0);
  }

  function recursiveFunctionForFirstStep(index) {
    let iterable = index;

    if (iterable === circles.length) {
      console.log("its okay now");
      return true;
    } else {
      setTimeout(() => {
        circles[iterable].classList.add("bigger");
        recursiveFunctionForFirstStep(iterable + 1);
      }, 20);
    }
  }

  function recursiveFunctionForSecondStep(index) {
    let iterable = index;

    if (iterable === circles.length) {
      return true;
    } else {
      setTimeout(() => {
        circles[iterable].classList.remove("bigger");
        recursiveFunctionForSecondStep(iterable + 1);
      }, 20);
    }
  }

  function recursiveFunctionForDissapear(index) {
    let iterable = index;

    if (iterable === circles.length) {
      return true;
    } else {
      setTimeout(() => {
        circles[iterable].classList.add("removed");
        recursiveFunctionForDissapear(iterable + 1);
      }, 20);
    }
  }

  return (
    <svg
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      width="600"
      height="600"
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="circles" cx="300" cy="300" r="297.5" stroke="white" />
      <circle className="circles" cx="300" cy="300" r="2.5" stroke="white" />
      <circle
        className="circles"
        cx="300"
        cy="300"
        r="283.452"
        stroke="white"
      />
      <circle
        className="circles"
        cx="300"
        cy="300"
        r="269.405"
        stroke="white"
      />
      <circle
        className="circles"
        cx="300"
        cy="300"
        r="255.357"
        stroke="white"
      />
      <circle className="circles" cx="300" cy="300" r="241.31" stroke="white" />
      <circle
        className="circles"
        cx="300"
        cy="300"
        r="227.262"
        stroke="white"
      />
      <circle
        className="circles"
        cx="300"
        cy="300"
        r="213.214"
        stroke="white"
      />
      <circle
        className="circles"
        cx="300"
        cy="300"
        r="199.167"
        stroke="white"
      />
      <circle
        className="circles"
        cx="300"
        cy="300"
        r="185.119"
        stroke="white"
      />
      <circle
        className="circles"
        cx="300"
        cy="300"
        r="171.071"
        stroke="white"
      />
      <circle
        className="circles"
        cx="300"
        cy="300"
        r="157.024"
        stroke="white"
      />
      <circle
        className="circles"
        cx="300"
        cy="300"
        r="142.976"
        stroke="white"
      />
      <circle
        className="circles"
        cx="300"
        cy="300"
        r="128.929"
        stroke="white"
      />
      <circle
        className="circles"
        cx="300"
        cy="300"
        r="114.881"
        stroke="white"
      />
      <circle
        className="circles"
        cx="300"
        cy="300"
        r="100.833"
        stroke="white"
      />
      <circle
        className="circles"
        cx="300"
        cy="300"
        r="86.7857"
        stroke="white"
      />
      <circle
        className="circles"
        cx="300"
        cy="300"
        r="72.7381"
        stroke="white"
      />
      <circle
        className="circles"
        cx="300"
        cy="300"
        r="58.6905"
        stroke="white"
      />
      <circle
        className="circles"
        cx="300"
        cy="300"
        r="44.6429"
        stroke="white"
      />
      <circle
        className="circles"
        cx="300"
        cy="300"
        r="30.5952"
        stroke="white"
      />
      <circle
        className="circles"
        cx="300"
        cy="300"
        r="16.5476"
        stroke="white"
      />
    </svg>
  );
}
