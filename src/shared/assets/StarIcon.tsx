import styled from "styled-components";

const SStarIcon = styled.div`
  position: relative;
`;

const SLint = styled.div`
  position: absolute;
  top: 11px;
  left: 3px;
  width: 100%;
  height: 100%;
`;

export const StarIcon = () => {
  return (
    <SStarIcon>
      <svg
        width="9"
        height="9"
        viewBox="0 0 9 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.25534 0.644224C3.58238 -0.214636 4.79738 -0.214637 5.12442 0.644224L5.68492 2.11621C5.78644 2.38282 5.997 2.59338 6.26361 2.6949L7.7356 3.2554C8.59446 3.58244 8.59446 4.79745 7.7356 5.12448L6.26361 5.68499C5.997 5.78651 5.78644 5.99706 5.68492 6.26367L5.12442 7.73566C4.79739 8.59452 3.58238 8.59452 3.25534 7.73566L2.69484 6.26367C2.59332 5.99706 2.38276 5.78651 2.11615 5.68499L0.644163 5.12448C-0.214697 4.79745 -0.214698 3.58244 0.644163 3.2554L2.11615 2.6949C2.38276 2.59338 2.59332 2.38282 2.69484 2.11621L3.25534 0.644224Z"
          fill="white"
        />
      </svg>

      <SLint>
        <svg
          width="2"
          height="11"
          viewBox="0 0 2 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1V10C2 10.5523 1.55228 11 1 11C0.447715 11 0 10.5523 0 10V1Z"
            fill="url(#paint0_linear_1_643)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_643"
              x1="1"
              y1="0"
              x2="1"
              y2="11"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </SLint>
    </SStarIcon>
  );
};
