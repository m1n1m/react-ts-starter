import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import ErrorBoundary from './error-boundary';

export const ErrorBoundaryRoute = ({ component: Component, ...rest }: RouteProps) => {

  if (!Component) throw new Error(`A component needs to be specified for path ${(rest as any).path}`);

  const encloseInErrorBoundary = props => (
    <ErrorBoundary>
      <Component {...props} />
    </ErrorBoundary>
  );

  return <Route {...rest} render={encloseInErrorBoundary} />;
};

export default ErrorBoundaryRoute;
