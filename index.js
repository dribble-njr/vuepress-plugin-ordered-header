module.exports = () => {
  return {
    name: "vuepress-plugin-ordered-header",
    extendsPage: (page) => {
      const counter = Array(6).fill(undefined);

      const reorderHeaders = (headers) => {
        headers.forEach((header) => {
          const level = header.level - 1;

          counter[level] = (counter[level] || 0) + 1;

          // reset level
          for (let i = level + 1; i < counter.length; i++) {
            counter[i] = undefined;
          }

          header.title = `${counter.filter(Number).join(".")} ${header.title}`;

          if (header.children) reorderHeaders(header.children);
        });
      };

      reorderHeaders(page.headers);

      return page;
    },
  };
};
