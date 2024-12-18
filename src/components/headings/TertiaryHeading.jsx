function TertiaryHeading({ color = "red", children }) {
  return (
    <h3
      className={`mb-5 text-4xl font-bold capitalize ${
        color === "white"
          ? "text-white"
          : color === "red"
          ? "text-red-500"
          : `text-${color}`
      }`}
    >
      {children}
    </h3>
  );
}

export default TertiaryHeading;
