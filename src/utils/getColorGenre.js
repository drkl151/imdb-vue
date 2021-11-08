export default function getColorGenre(genre) {
  let colorGenre = "";

  switch (genre) {
    case "action":
      colorGenre = "#ea4737";
      break;
    case "animation":
      colorGenre = "#39fccb";
      break;
    case "adventure":
      colorGenre = "#93e24a";
      break;
    case "drama":
      colorGenre = "#772cd8";
      break;
    case "comedy":
      colorGenre = "#d8b82c";
      break;
    case "fantasy":
      colorGenre = "#d82c6e";
      break;
    case "thriller":
      colorGenre = "#2998e2";
      break;
    case "war":
      colorGenre = "#222cb4";
      break;
    case "western":
      colorGenre = "#1c25a5";
      break;
    case "science fiction":
      colorGenre = "#008d5e";
      break;
    case "crime":
      colorGenre = "#af4f00";
      break;
    case "music":
      colorGenre = "#8f0388";
      break;
    case "romance":
      colorGenre = "#ff1eda";
      break;
    default:
      colorGenre = "#ea4737";
  }

  return colorGenre;
}