let ghpages = require("gh-pages");
let dayjs = require("dayjs");
ghpages.publish(
  "out",
  {
    branch: "main",
    dotfiles: true,
    message: `🚀 Deploy [${dayjs().format("DD/MM/YY")}]`,
  },
  () => {
    console.log("yayyy");
  }
);
