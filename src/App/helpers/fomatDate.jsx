const fomatDate = (dateString) => {
  const date = new Date(dateString);

  const options = {
    day: 'numeric',
    month: 'numeric',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };
  return date.toLocaleString(undefined, options);
};

export default fomatDate;
