// @flow

import initStoryshots, {
  multiSnapshotWithOptions
} from "@storybook/addon-storyshots";
import registerRequireContextHook from "babel-plugin-require-context-hook/register";

registerRequireContextHook();
initStoryshots({
  test: multiSnapshotWithOptions({})
});
