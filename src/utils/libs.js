export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getDateString = () => {
  const date = new Date();
  const dayWeek = date.toLocaleString("es-ES", { weekday: "long" });

  const month = date.toLocaleString("es-ES", { month: "long" });
  return `${capitalize(dayWeek)}, ${date.getDate()} de ${capitalize(
    month
  )} de ${date.getFullYear()}`;
};
