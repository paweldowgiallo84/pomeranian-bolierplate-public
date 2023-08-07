import './Icons.css';

export function BinIcon({ isError }) {
  const svgClassname = `icon${isError ? '--error' : ''}`;

  return (
    <svg
      className={svgClassname}
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.75 5.47831C17.1425 5.12081 13.5133 4.93665 9.895 4.93665C7.75 4.93665 5.605 5.04498 3.46 5.26165L1.25 5.47831"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.20825 4.38413L7.44659 2.96496C7.61992 1.93579 7.74992 1.16663 9.58075 1.16663H12.4191C14.2499 1.16663 14.3908 1.97913 14.5533 2.97579L14.7916 4.38413"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.4208 8.90173L17.7166 19.8109C17.5974 21.5117 17.4999 22.8334 14.4774 22.8334H7.52243C4.49993 22.8334 4.40243 21.5117 4.28327 19.8109L3.5791 8.90173"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.19092 16.875H12.7984"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.29175 12.5416H13.7084"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
