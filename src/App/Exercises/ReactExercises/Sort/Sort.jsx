import './styles.css';

export const SortImmute = () => {
  const originalArr = [1, 3, 2, 10, 21, 50, -10];

  const clonedArr = [...originalArr];

  function compareNumbers(valueA, valueB) {
    return valueA - valueB;
  }

  const sortedArr = clonedArr.sort(compareNumbers);

  console.log({
    originalArr, // [1, 3, 2]
    sortedArr, // [1, 2, 3]
  });

  return (
    <div className="sort">
      <p>1. </p>
    </div>
  );
};
