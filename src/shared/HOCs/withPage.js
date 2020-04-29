
import { compose } from 'ramda';
import withHoneybadger from "./withHoneybadger";

export default Component =>
  compose(
    withHoneybadger
  )(Component);
