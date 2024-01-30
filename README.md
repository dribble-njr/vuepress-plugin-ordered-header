# Vuepress Plugin Ordered Header

This is a vuepress plugin for ordering headers in the sidebar.

Like this:

```markdown
# header 1

## header 1-1

### header 1-1-1

## header 1-2

# header4
```

And the sidebar will be:

```
1 header 1

1.1 header 1-1

1.1.1 header 1-1-1

1.2 header 1-2

2 header4
```

## Installation

You can install it via npm or other.

```bash
npm install vuepress-plugin-ordered-header
```

## Usage

In vuepress config file, add the plugin to the plugins array.

```javascript
import orderedHeader from "vuepress-plugin-ordered-header";

module.exports = {
  plugins: [orderedHeader],
};
```
