import $ from "./Text.module.sass";

function getStyles(color, fontFamily) {
  let styles = { color, fontFamily };

  switch (color) {
    case "red":
      styles.color = "#7E2726";
      break;
    case "light-gray":
      styles.color = "#D9D9D9";
      break;
    case "gray":
      styles.color = "#888888";
      break;
    case "dark-gray":
      styles.color = "#4C4C4C";
      break;
    default:
      styles.color = "#353535";
  }

  switch (fontFamily) {
    case "light":
      styles.fontFamily = ["Roboto Light", "sans-serif"];
      break;
    case "normal":
      styles.fontFamily = ["Roboto", "sans-serif"];
      break;
    case "medium":
      styles.fontFamily = ["Roboto Medium", "sans-serif"];
      break;
    case "bold":
      styles.fontFamily = ["Roboto Bold", "sans-serif"];
      break;
    case "black":
      styles.fontFamily = ["Roboto Black", "sans-serif"];
      break;
    default:
      styles.fontFamily = ["Roboto", "sans-serif"];
  }

  return styles;
}

const Text = ({
  type = "Paragraph",
  color = "#353535",
  fontFamily = "normal",
  children,
}) => {
  let styles = getStyles(color, fontFamily);

  switch (type) {
    case "GiantText":
      return (
        <h1 className={$.giantText} style={styles}>
          {children}
        </h1>
      );
    case "BigText":
      return (
        <h1 className={$.bigText} style={styles}>
          {children}
        </h1>
      );
    case "Title":
    case "Title1": // Ambos o mesmo tipo
      return (
        <h1 className={$.title1} style={styles}>
          {children}
        </h1>
      );
    case "Title2":
      return <h2 style={styles}>{children}</h2>;
    case "Paragraph":
      return (
        <p className={$.text} style={styles}>
          {children}
        </p>
      );
    case "Subtitle":
      return <p className={$.subtitle}>{children}</p>;
    default:
      return (
        <p className={$.text} style={styles}>
          {children}
        </p>
      );
  }
};

export default Text;
